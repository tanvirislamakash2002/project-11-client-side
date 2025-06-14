import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
import MyArticleRow from '../components/MyArticleRow';
import UpdateModal from '../components/UpdateModal';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyArticles = () => {
    // const { data } = useLoaderData()
    const { user, darkMode } = useAuth()
    const axiosSecure = useAxiosSecure()

    const [articles, setArticles] = useState([])
    const [selectedArticle, setSelectedArticle] = useState({})

    useEffect(() => {
        axiosSecure(`/my-articles/${user.email}`)
            .then(data => {
                setArticles(data?.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [axiosSecure, user])
    // console.log(articles)


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

    }


    return (
        <div className='max-w-7xl w-11/12 mx-auto'>
            <div className={`${darkMode?`text-white`:``} stats shadow flex flex-row-reverse`}>
                <div className="stat">
                    <div className="stat-figure">
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            ></path>
                        </svg> */}
                    </div>
                    <div className="">Total Likes</div>
                    <div className="stat-value">25.6K
                                             <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            ></path>
                        </svg>
                    </div>
                    {/* <div className="stat-desc">21% more than last month</div> */}
                </div>

                <div className="stat">
                    {/* <div className="stat-figure ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            ></path>
                        </svg>
                    </div> */}
                    <div className="">The number of articles</div>
                    <div className="stat-value ">{articles?.length}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            ></path>
                        </svg>
                    </div>

                    {/* <div className="stat-desc">21% more than last month</div> */}
                </div>

                <div className="stat flex items-center">
                    <div className="">
                        <div className="avatar">
                            <div className="w-26 rounded-xl">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="stat-value text-3xl">{user?.displayName}</div>
                        <div className=" text-2xl">{user?.email}</div>
                    </div>
                    {/* <div className="stat-desc ">31 tasks remaining</div> */}
                </div>
            </div>

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

        </div>
    );
};

export default MyArticles;