import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import MyArticleRow from '../components/MyArticleRow';
import UpdateModal from '../components/UpdateModal';

const MyArticles = () => {
    const { data } = useLoaderData()

    const [articles, setArticles] = useState(data)
    const [selectedArticle, setSelectedArticle] = useState({})


    const removeDataFromTable = (id) => {
        const filterData = articles.filter(article => article._id !== id)
        console.log('what a data', filterData)
        setArticles(filterData)
    }
    const handleEdit = (articleData) => {
        setSelectedArticle(articleData)
        document.getElementById('my_modal_3').showModal()

    }
    

    const handleRowUpdate = (updatedData) => {
        
        setArticles(articles.map(article =>
            article._id === updatedData._id ? updatedData : article
        ))
        // setSelectedArticle({})
    }


    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Tags</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows */}
                    {
                        articles.map((myData, index) =>
                            <MyArticleRow key={myData._id} myData={myData} index={index} handleEdit={handleEdit} removeDataFromTable={removeDataFromTable}></MyArticleRow>
                        )
                    }

                </tbody>
            </table>
            {selectedArticle && <UpdateModal selectedArticle={selectedArticle} setSelectedArticle={setSelectedArticle} handleRowUpdate={handleRowUpdate}></UpdateModal>}
        </div>
    );
};

export default MyArticles;