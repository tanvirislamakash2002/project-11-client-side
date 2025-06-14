import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const UpdateModal = ({ selectedArticle, setSelectedArticle, handleRowUpdate }) => {
    // const [updateData, setUpdateData] = useState(selectedArticle)
    const { _id, authorEmail, authorName, category, content, date, tags, thumbnail, title } = selectedArticle

    const [selectedCategory, setSelectedCategory] = useState(category || '')
    useEffect(() => {
        setSelectedCategory(category || '')
    }, [category])
    // console.log(selectedCategory)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedArticle({ ...selectedArticle, [name]: value })
    }


    // edit method 
    const handleEditArticle = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const updateData = Object.fromEntries(formData.entries())

        
        // process tags 
        const processTags = updateData.tags.split(',').map(tag=>tag.trim())
        updateData.tags=processTags
// console.log(data)
        axios.put(`${import.meta.env.VITE_API_URL}/edit-my-article/${_id}`, updateData)
            .then(data => {

                toast.success("Your Article Posted Successfully!");
                updateData._id = _id
                setSelectedArticle(updateData)
                handleRowUpdate(updateData)
                // setUpdateData(selectedArticle)
            })
            .catch(error => {
                console.log(error);
                toast.error("Failed to add post!");

            })


        document.getElementById('my_modal_3').close()

    }
    return (
        <dialog id="my_modal_3" className="modal">
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
            <div className="modal-box max-w-xl mx-auto bg-slate-600/60">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl text-white bg-red-300 p-4">✕</button>
                </form>
                <div className=" w-full mx-auto">
                    <form method="dialog" onSubmit={handleEditArticle} className="mx-auto fieldset rounded-box w-md p-4">
                        <h2 className='text-3xl font-bold text-center'>Post Article</h2>

                        <label className="label text-white text-lg">Title</label>
                        <input name='title' value={title} type="text" className="input input-shadow w-full" placeholder="Give a title" onChange={handleChange} />

                        <label className="label text-white text-lg">Content </label>
                        <textarea name='content' value={content} className="textarea input-shadow w-full" placeholder="Content " onChange={handleChange}></textarea>

                        <label className="label text-white text-lg">Category</label>


                        <select name='category' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}  className="select w-full select-shadow">
                            <option disabled={true}>Select Your Category</option>
                            <option value='Technology'>Technology</option>
                            <option value='Science'>Science</option>
                            <option value='Sports'>Sports</option>
                            <option value='Politics'>Politics</option>
                        </select>

                        <label className="label text-white text-lg">Tags</label>
                        <input name='tags' type="text" className="input w-full input-shadow" placeholder="Give a title"  onChange={handleChange} value={tags}/>


                        <label className="label text-white text-lg">Thumbnail image</label>
                        <input name='thumbnail' value={thumbnail} type="text" className="input input-shadow w-full" placeholder="Thumbnail image" onChange={handleChange} />

                        <label className="label text-white text-lg">Date</label>
                        <input name='date' defaultValue={date} type="date" className="input select-shadow w-full" placeholder="" />

                        <label className="label text-white text-lg">My Info</label>
                        <input value={authorName} name='authorName' type="text" className="input w-full" />
                        <input value={authorEmail} name='authorEmail' type="text" className="input w-full" />

                        <button className="btn btn-neutral mt-4">Edit Article</button>
                    </form>
                </div>
                <form method="dialog" className='flex justify-end'>
                    <button className='btn btn-error text-white'>Cancel Editing</button>
                </form>
            </div>

        </dialog>
    );
};

export default UpdateModal;