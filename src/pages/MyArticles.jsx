import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import MyArticleRow from '../components/MyArticleRow';
import UpdateModal from '../components/UpdateModal';

const MyArticles = () => {
    const { data } = useLoaderData()

    const [articles, setArticles] = useState(data)
    const [selectedArticle, setSelectedArticle] = useState({})



    const handleEdit = (articleData) => {
        setSelectedArticle(articleData)
        document.getElementById('my_modal_3').showModal()

    }
    // console.log(selectedArticle)

    //     setArticles(articles.map(article=>
    //     article._id===selectedArticle._id?selectedArticle:article
    // ))


    const handleRowUpdate = (updatedData) => {
        console.log(updatedData)
        setArticles(articles.map(article =>
            article._id === updatedData._id ? updatedData : article
        ))
        setSelectedArticle({})
    }


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
                        articles.map((myData, index) =>
                            <MyArticleRow key={myData._id} myData={myData} index={index} handleEdit={handleEdit} ></MyArticleRow>
                        )
                    }

                </tbody>
            </table>
            {selectedArticle && <UpdateModal selectedArticle={selectedArticle} setSelectedArticle={setSelectedArticle} handleRowUpdate={handleRowUpdate}></UpdateModal>}
        </div>
    );
};

export default MyArticles;