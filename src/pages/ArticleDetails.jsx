import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';
import { toast } from 'react-toastify';

const ArticleDetails = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const { data } = useLoaderData()
    const [article, setArticle] = useState(data)
    const [comments, setComments] = useState([])
    const { _id, authorEmail, authorName, category, content, date, tags, thumbnail, title, likedBy = [] } = article || {}
    // const { multi1, multi2 } = tags

    // handle like and dislike
    const [liked, setLiked] = useState(likedBy?.includes(user?.email))
    const [likeCount, setLikeCount] = useState(likedBy?.length)

    useEffect(() => {
        setLiked(likedBy.includes(user?.email))
    }, [likedBy, user])

    const handleLike = () => {
        if (user?.email === authorEmail) {
            return Swal.fire({ title: 'you cannot like your own post', icon: 'error' })
        }

        if (user) {
            axios.patch(`${import.meta.env.VITE_API_URL}/like/${_id}`, {
                authorEmail: user?.email
            })
                .then(data => {
                    console.log(data?.data)
                    const isLiked = data?.data?.liked
                    setLiked(isLiked)
                    setLikeCount(prev => (isLiked ? prev + 1 : prev - 1))
                })
                .catch(error => {
                    console.log(error)
                })
            Swal.fire({ title: 'You have liked the post', icon: 'success' })
        }
        else {
            return navigate('/login')
        }
    }

    // handle comment article 
    const handleComment = (e) => {
        e.preventDefault()
        const comment = e.target.comment.value;
        const commentData = { article_id: _id, commenter_name: user?.displayName, commenter_photo: user?.photoURL, comment }
        console.log(commentData)
        axios.post(`${import.meta.env.VITE_API_URL}/comment-article`, commentData)
        .then(data => {
            setComments([...comments, commentData]) 
                // console.log('data form axios',data)
                toast.success("Comment added Successfully!");
            })
            .catch(error => {
                console.log(error);
                toast.error("Failed to comment!");

            })
    }

    

    useEffect(() => {
        try {
            axios.get(`${import.meta.env.VITE_API_URL}/article-comments/${_id}`)
                .then(res => {

                    setComments(res.data)
                })
        } catch (error) {
            console.log(error)
        }

    }, [_id])
    // console.log(comments)
    return (
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
                <div><img src={thumbnail} alt="" /></div>
                <span className="badge  badge-warning">{authorEmail}</span>
                <span className="badge  badge-warning">{authorName}</span>
                <span className="badge  badge-warning">{likeCount}</span>
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{category}</h2>
                    <span className="text-xl">{date}</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-lg">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{title}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{content}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        {/* <span>{multi1}, {multi2}</span> */}
                        <div className='flex flex-wrap'>

                        {
                        tags.map(tag=><span className='mr-2 mb-2 block badge  badge-warning'>{tag}</span>)
                        }
                        </div>
                    </li>

                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block" onClick={handleLike}>{liked ? `Dislike` : `Like`}</button>
                </div>
                <form onSubmit={handleComment}>
                    <textarea name='comment' className="textarea w-full" placeholder="Bio"></textarea>
                    <div className="flex justify-end">
                        <input type="submit" value="post" className='btn btn-success' />
                    </div>
                </form>
            </div>
            {
                comments.map(comment => <div key={comment._id} className="card card-dash bg-base-100 w-96">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="mask mask-squircle w-24">
                                <img src={comment.commenter_photo} />
                            </div>
                        </div>
                        <p>{comment.commenter_name}</p>
                        <p>{comment.comment}</p>
                    </div>
                </div>)
            }

        </div>
    );
};

export default ArticleDetails;