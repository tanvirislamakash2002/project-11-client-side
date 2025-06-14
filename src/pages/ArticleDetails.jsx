import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser, FaRegComment } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";

const ArticleDetails = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const { data } = useLoaderData()
    const [article, setArticle] = useState(data)
    const [comments, setComments] = useState([])
    const { _id, authorEmail, authorName, authorPhoto, category, content, date, tags, thumbnail, title, likedBy = [] } = article || {}
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
        <div className="py-16">
            <div className="card w-96 bg-violet-700/30 shadow-sm mx-auto">
                <div className="card-body">
                    <div><img src={thumbnail} alt="" /></div>
                    <div className="">
                        <h2 className="text-3xl font-bold">{title}</h2>
                        {/* <span className="text-xl">{date}</span> */}
                        <p>{content}</p>
                    </div>
                    <p className="text-xl"><span className='font-semibold'>Category:</span> {category}</p>
                    <div className='flex flex-wrap'>

                        {
                            tags.map((tag, index) => <span key={index} className='mr-2 mb-2 block badge  badge-warning'>{tag}</span>)
                        }
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={authorPhoto} />
                            </div>
                        </div>
                        {/* <img src={authorPhoto} alt="" /> */}
                        <div className="">
                            <p className="text-xl flex items-center gap-2"><FaRegUser />{authorName}</p>
                            <p className="text-lg flex items-center gap-2"><MdOutlineDateRange />{date}</p>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="mt-6">
                            <button className="btn btn-primary" onClick={handleLike}>{liked ? <BiDislike /> : <BiLike />}</button>
                            Liked by {likeCount}
                        </div>
                        <div className="mt-6">
                             {comments.length} comments
                            <button className="btn btn-primary" onClick={handleLike}>{<FaRegComment />}</button>
                        </div>
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
        </div>
    );
};

export default ArticleDetails;