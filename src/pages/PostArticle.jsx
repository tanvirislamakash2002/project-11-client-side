import React from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';


const PostArticle = () => {
    const { user } = useAuth()

    const handlePostArticle = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        // const { title, content, category, multi1, multi2, thumbnail, date, authorName, authorEmail } = data

        // process tags 
        const processTags = data.tags.split(',').map(tag=>tag.trim())
        data.tags=processTags
        console.log(data)

        //  combining tags 
        // const { multi1, multi2, ...newPost } = data
        // newPost.tags = { multi1, multi2 }
        // console.log(newPost)

        axios.post(`${import.meta.env.VITE_API_URL}/post-article`, data)
            .then(data => {
                // console.log('data form axios',data)
                toast.success("Your Article Posted Successfully!");
            })
            .catch(error => {
                console.log(error);
                toast.error("Failed to add post!");

            })
    }
    return (
        <form onSubmit={handlePostArticle} className="flex items-center justify-center min-h-screen">
            <div className=" fieldset bg-stone-600/20 border-base-300 rounded-box w-lg border p-4 lg:mx-2 mx-4 my-4">
                <h2 className='text-3xl font-bold text-center'>Post Article</h2>

                <label className="label akash">Title</label>
                <input name='title' type="text" className="input w-full input-shadow" placeholder="Give a title" />

                <label className="label">Content </label>
                <textarea name='content' className="textarea w-full input-shadow" placeholder="Write your Content here"></textarea>

                <label className="label">Category</label>
                <select name='category' defaultValue="Random" className="select w-full select-shadow">
                    <option disabled={true}>Select Your Category</option>
                    <option>Technology</option>
                    <option>Science</option>
                    <option>Sports</option>
                    <option>Politics</option>
                </select>

                <label className="label">Tags</label>
                <input name='tags' type="text" className="input w-full input-shadow" placeholder="Give a title" />
                {/* <div className="flex gap-2"> */}
                {/* <select name='multi1' defaultValue="Pick a color" className="select select-shadow">
                        <option disabled={true}>Pick a color</option>
                        <option>tanvir</option>
                        <option>islam</option>
                        <option>akash</option>
                    </select>
                    <select name='multi2' defaultValue="Pick a color" className="select select-shadow">
                        <option disabled={true}>Pick a color</option>
                        <option>what</option>
                        <option>the</option>
                        <option>fish</option>
                    </select> */}
                {/* <select name='multi2' defaultValue="Pick a color" className="select">
                        <option disabled={true}>Pick a color</option>
                        <option>what</option>
                        <option>the</option>
                        <option>fish</option>
                    </select> */}
                {/* </div> */}

                <label className="label">Thumbnail image</label>
                <input name='thumbnail' type="text" className="input w-full input-shadow" placeholder="Thumbnail image" />

                <label className="label">Date</label>
                <input name='date' type="date" className="input w-full select-shadow" placeholder="" />

                <label className="label">My Info</label>
                <input name='authorName' type="text" className="input w-full" value={user?.displayName} />
                <input name='authorEmail' type="text" className="input w-full" value={user?.email} />

                <button className="btn btn-neutral mt-4">Publish</button>
            </div>
        </form>
    );
};

export default PostArticle;