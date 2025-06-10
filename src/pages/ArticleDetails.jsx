import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';

const ArticleDetails = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const { data } = useLoaderData()
    const [article, setArticle] = useState(data)
    const { _id, authorEmail, authorName, category, content, date, tags, thumbnail, title, likedBy = [] } = article || {}
    const { multi1, multi2 } = tags

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
    const handleComment=(e)=>{
        e.preventDefault()
        const comment = e.target.comment.value;
        console.log(comment)
    }
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
                        <span>{multi1}, {multi2}</span>
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
            <div className="card card-dash bg-base-100 w-96">
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card card-dash bg-base-100 w-96">
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetails;