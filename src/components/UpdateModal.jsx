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
            <div className="modal-box max-w-7xl mx-auto">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className=" w-2xl mx-auto">
                    <form method="dialog" onSubmit={handleEditArticle} className="mx-auto fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <h2 className='text-3xl font-bold text-center'>Post Article</h2>

                        <label className="label">Title</label>
                        <input name='title' value={title} type="text" className="input" placeholder="Give a title" onChange={handleChange} />

                        <label className="label">Content </label>
                        <textarea name='content' value={content} className="textarea" placeholder="Content " onChange={handleChange}></textarea>

                        <label className="label">Category</label>


                        <select name='category' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}  className="select w-full select-shadow">
                            <option disabled={true}>Select Your Category</option>
                            <option value='Technology'>Technology</option>
                            <option value='Science'>Science</option>
                            <option value='Sports'>Sports</option>
                            <option value='Politics'>Politics</option>
                        </select>

                        <label className="label">Tags</label>
                        <input name='tags' type="text" className="input w-full input-shadow" placeholder="Give a title"  onChange={handleChange} value={tags}/>


                        <label className="label">Thumbnail image</label>
                        <input name='thumbnail' value={thumbnail} type="text" className="input" placeholder="Thumbnail image" onChange={handleChange} />

                        <label className="label">Date</label>
                        <input name='date' defaultValue={date} type="date" className="input" placeholder="" />

                        <label className="label">My Info</label>
                        <input value={authorName} name='authorName' type="text" className="input" />
                        <input value={authorEmail} name='authorEmail' type="text" className="input" />

                        <button className="btn btn-neutral mt-4">Edit Article</button>
                    </form>
                </div>
                <form method="dialog" className='flex justify-end'>
                    <button className='btn btn-error'>Cancel Editing</button>
                </form>
            </div>

        </dialog>
    );
};

export default UpdateModal;