import React, { useEffect, useState } from "react";
import MyArticleRow from "../components/MyArticleRow";
import UpdateModal from "../components/UpdateModal";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { GrArticle } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";

const MyArticles = () => {
    const { user, darkMode } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState({});

    useEffect(() => {
        axiosSecure(`/my-articles/${user.email}`)
            .then((data) => setArticles(data?.data))
            .catch((error) => console.error(error));
    }, [axiosSecure, user]);

    const removeDataFromTable = (id) => {
        setArticles((prev) => prev.filter((article) => article._id !== id));
    };

    const handleEdit = (articleData) => {
        setSelectedArticle(articleData);
        document.getElementById("my_modal_3").showModal();
    };

    const handleRowUpdate = (updatedData) => {
        setArticles((prev) =>
            prev.map((article) =>
                article._id === updatedData._id ? updatedData : article
            )
        );
    };

    const totalLikes = articles.reduce(
        (sum, obj) => sum + (obj.likedBy ? obj.likedBy.length : 0),
        0
    );

    return (
        <div className="max-w-7xl mx-auto w-11/12 mt-6 pb-6">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h1 className="text-3xl font-bold">My Articles</h1>
                <p className="text-base-content/70">
                    Manage, edit, and track the performance of your articles.
                </p>
            </div>

            {/* Stats Section */}
            <div
                className={`mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 ${darkMode ? "text-white" : ""
                    }`}
            >
                {/* Likes */}
                <div className="bg-pink-500/10 p-6 rounded-xl shadow-md flex items-center gap-4">
                    <div className="bg-pink-500 text-white p-3 rounded-lg">
                        <FaHeart size={24} />
                    </div>
                    <div>
                        <p className="text-sm opacity-70">Total Likes</p>
                        <p className="text-2xl font-bold">{totalLikes}</p>
                    </div>
                </div>

                {/* Articles Count */}
                <div className="bg-violet-500/10 p-6 rounded-xl shadow-md flex items-center gap-4">
                    <div className="bg-violet-500 text-white p-3 rounded-lg">
                        <GrArticle size={24} />
                    </div>
                    <div>
                        <p className="text-sm opacity-70">Total Articles</p>
                        <p className="text-2xl font-bold">{articles?.length}</p>
                    </div>
                </div>

                {/* User Info */}
                <div className="bg-base-200 p-6 rounded-xl shadow-md flex items-center gap-4">
                    <div className="avatar">
                        <div className="w-16 h-16 rounded-xl overflow-hidden">
                            <img src={user?.photoURL} alt="User" />
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden">
                        <h2 className="text-xl font-bold truncate">{user?.displayName}</h2>
                        <p className="text-gray-500 truncate">{user?.email}</p>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div
                className={`mt-8 overflow-x-auto rounded-xl border border-base-content/10 ${darkMode ? "bg-base-200" : "bg-white"
                    } shadow-md`}
            >
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th className="hidden lg:table-cell">Tags</th>
                            <th>Category</th>
                            <th className="hidden md:table-cell">Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.length > 0 ? (
                            articles.map((myData, index) => (
                                <MyArticleRow
                                    key={myData._id}
                                    myData={myData}
                                    index={index}
                                    handleEdit={handleEdit}
                                    removeDataFromTable={removeDataFromTable}
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center py-6 opacity-60">
                                    No articles found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Update Modal */}
            {selectedArticle && (
                <UpdateModal
                    selectedArticle={selectedArticle}
                    setSelectedArticle={setSelectedArticle}
                    handleRowUpdate={handleRowUpdate}
                />
            )}
        </div>
    );
};

export default MyArticles;
