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

    const { multi1: multi1Value = '', multi2: multi2Value = '' } = tags || {}

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedArticle({ ...selectedArticle, [name]: value })
    }

    const handleTagsChange = (e)=>{
        const{name, value} =e.target;
        setSelectedArticle({
            ...selectedArticle,
            tags:{
                ...selectedArticle.tags,
                [name]: value
            }
        })
    }
    // edit method 
    const handleEditArticle = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        // const { title, content, category, multi1, multi2, thumbnail, date, authorName, authorEmail } = data

        // combining tags 
        const { multi1, multi2, ...newPost } = data
        newPost.tags = { multi1, multi2 }
        


        axios.put(`${import.meta.env.VITE_API_URL}/edit-my-article/${_id}`, newPost)
            .then(data => {
                
                toast.success("Your Article Posted Successfully!");
                newPost._id = _id
                setSelectedArticle(newPost)
                handleRowUpdate(newPost)
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

                        <select name='category' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="select">
                            <option disabled={true}>Pick a color</option>
                            <option value='gulistan'>gulistan</option>
                            <option value='pakistan'>pakistan</option>
                            <option value='srilanka'>srilanka</option>
                            <option value='american'>american</option>
                            <option value='london'>london</option>
                        </select>

                        <label className="label">Tags</label>
                        <div className="flex">
                            <select name='multi1' value={multi1Value} onChange={handleTagsChange} className="select">
                                <option disabled>Pick a color</option>
                                <option value='tanvir'>tanvir</option>
                                <option value='islam'>islam</option>
                                <option value='akash'>akash</option>
                                <option value='siddik'>siddik</option>
                                <option value='amir'>amir</option>
                            </select>
                            <select name='multi2' value={multi2Value} onChange={handleTagsChange} className="select">
                                <option disabled={true}>Pick a color</option>
                                <option value='what'>what</option>
                                <option value='the'>the</option>
                                <option value='fish'>fish</option>
                                <option value='shirk'>shirk</option>
                                <option value='abraham'>abraham</option>
                            </select>
                        </div>

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