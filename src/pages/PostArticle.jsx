import React from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';


const PostArticle = () => {
    const { user, darkMode } = useAuth()

    const handlePostArticle = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())

        // process tags 
        const processTags = data.tags.split(',').map(tag=>tag.trim())
        data.tags=processTags



        axios.post(`${import.meta.env.VITE_API_URL}/post-article`, data)
            .then(data => {
                
                toast.success("Your Article Posted Successfully!");
                form.reset()
            })
            .catch(error => {
                console.log(error);
                toast.error("Failed to add post!");

            })
    }
    return (
        <form onSubmit={handlePostArticle} className={`${darkMode?'text-white':''} flex items-center justify-center min-h-[calc(100vh-352px)]`}>
            <div className=" fieldset bg-violet-600/20 border-base-300/30 rounded-box w-lg border p-4 lg:mx-2 mx-4 my-4">
                <h2 className='text-3xl font-bold text-center'>Post Article</h2>

                <label className={`${darkMode?'text-white':''} font-bold textarea-md label`}>Title</label>
                <input required name='title' type="text" className={`${darkMode?'text-white placeholder-white':''} input w-full input-shadow`} placeholder="Give a title" />

                <label className={`${darkMode?'text-white':''} font-bold textarea-md label`}>Content </label>
                <textarea required name='content' className={`${darkMode?'text-white placeholder-white':''} textarea w-full input-shadow `} placeholder="Write your Content here"></textarea>

                <label className={`${darkMode?'text-white':''} font-bold textarea-md label`}>Category</label>
                <select name='category' defaultValue="Random" className="select w-full select-shadow font-semibold">
                    <option value='Random' disabled={true}>Select Your Category</option>
                    <option>Technology</option>
                    <option>Science</option>
                    <option>Sports</option>
                    <option>Politics</option>
                </select>

                <label className={`${darkMode?'text-white':''} font-bold textarea-md label`}>Tags</label>
                <input required name='tags' type="text" className={`${darkMode?'placeholder-white':''} input w-full input-shadow`} placeholder="Give some tags (separate with commas ',' )" />
 
                <label className={`${darkMode?'text-white':''} font-bold textarea-md label`}>Thumbnail image</label>
                <input required name='thumbnail' type="text" className={`${darkMode?'placeholder-white':''} input w-full input-shadow`} placeholder="Give your thumbnails URL" />

                <label className={`${darkMode?'text-white':''} font-bold textarea-md label`}>Date</label>
                <input required name='date' type="date" className="input w-full select-shadow font-semibold" placeholder="" />

                <label className={`${darkMode?'text-white':''} font-bold textarea-md label`}>My Info</label>
                <input name='authorName' type="text" className={`${darkMode?'placeholder-white':''} input w-full input-shadow`} value={user?.displayName} />
                <input name='authorEmail' type="text" className={`${darkMode?'placeholder-white':''} input w-full input-shadow`} value={user?.email} />
                <input name='authorPhoto' type="text" className="input w-full hidden" value={user?.photoURL} />

                <button className="btn bg-violet-950 border-violet-800 text-white hover:bg-white hover:text-violet-900 mt-4 text-lg">Publish</button>
            </div>
        </form>
    );
};

export default PostArticle;