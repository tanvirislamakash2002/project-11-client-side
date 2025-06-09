import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import MyArticleRow from '../components/MyArticleRow';

const MyArticles = () => {
    const { data } = useLoaderData()
    const [selectedArticle, setSelectedArticle] = useState(null)
    
    const handleEdit = (articleData)=>{
        setSelectedArticle(articleData)
        document.getElementById('my_modal_3').showModal()
        
    }
    const { _id, authorEmail, authorName, category, content, date, tags, thumbnail, title } = selectedArticle||{}
    console.log(content)
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows */}
                    {
                        data.map((myData, index) =>
                            <MyArticleRow key={myData._id} myData={myData} index={index} handleEdit={handleEdit}></MyArticleRow>
                        )
                    }

                </tbody>
            </table>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">{authorEmail}</h3>
                    <h3 className="font-bold text-lg">{content}</h3>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <h3 className="font-bold text-lg">{authorName}</h3>
                    <h3 className="font-bold text-lg">{category}</h3>
                    <input type="text" className='input' defaultValue={authorEmail} />
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>
        </div>
    );
};

export default MyArticles;