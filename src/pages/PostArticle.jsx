import React from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const PostArticle = () => {
    const { user } = useAuth()

    const handlePostArticle = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        // const { title, content, category, multi1, multi2, thumbnail, date, authorName, authorEmail } = data
        
        // combining tags 
        const {multi1, multi2, ...newPost} =data
        newPost.tags = {multi1, multi2}
        // console.log(newPost)

        axios.post(`${import.meta.env.VITE_API_URL}/post-article`, newPost)
        .then(data=>{
            console.log('data form axios',data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <form onSubmit={handlePostArticle} className="mx-auto fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <h2 className='text-3xl font-bold text-center'>Post Article</h2>

            <label className="label">Title</label>
            <input name='title' type="text" className="input" placeholder="Give a title" />

            <label className="label">Content </label>
            <textarea name='content' className="textarea" placeholder="Content "></textarea>

            <label className="label">Category</label>
            <select name='category' defaultValue="Pick a color" className="select">
                <option disabled={true}>Pick a color</option>
                <option>african</option>
                <option>american</option>
                <option>london</option>
            </select>

            <label className="label">Tags</label>
            <div className="flex">
                <select name='multi1' defaultValue="Pick a color" className="select">
                    <option disabled={true}>Pick a color</option>
                    <option>tanvir</option>
                    <option>islam</option>
                    <option>akash</option>
                </select>
                <select name='multi2' defaultValue="Pick a color" className="select">
                    <option disabled={true}>Pick a color</option>
                    <option>what</option>
                    <option>the</option>
                    <option>fish</option>
                </select>
            </div>

            <label className="label">Thumbnail image</label>
            <input name='thumbnail' type="text" className="input" placeholder="Thumbnail image" />

            <label className="label">Date</label>
            <input name='date' type="date" className="input" placeholder="" />

            <label className="label">My Info</label>
            <input name='authorName' type="text" className="input" value={user?.displayName} />
            <input name='authorEmail' type="text" className="input" value={user?.email} />

            <button className="btn btn-neutral mt-4">Login</button>
        </form>
    );
};

export default PostArticle;