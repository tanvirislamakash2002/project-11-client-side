import React from 'react';
import { FaArrowRight, FaBookOpen } from 'react-icons/fa';
import PopularArticleCard from './PopularArticleCard';
import useAuth from '../hooks/useAuth';
import { FaFire } from 'react-icons/fa';
import { Link } from 'react-router';

const PopularArticles = ({ allArticlesData }) => {
    const { darkMode } = useAuth();
    const sortedByLikes = [...allArticlesData].sort((a, b) => (b.likedBy?.length || 0) - (a.likedBy?.length || 0));
    const top3MostLiked = sortedByLikes.slice(0, 3);

    return (
        <section className={`${darkMode ? 'bg-gray-900' : 'bg-base-100'} py-24 px-4 sm:px-6`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center justify-center mb-6 px-6 py-3 rounded-full bg-opacity-10 ${darkMode ? 'bg-primary' : 'bg-primary'}">
                        <FaFire className={`text-2xl ${darkMode ? 'text-yellow-400' : 'text-red-500'} mr-2`} />
                        <span className={`text-lg font-semibold ${darkMode ? 'text-primary' : 'text-primary'}`}>Trending Now</span>
                    </div>
                    <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Community's Most Valued Reads
                    </h2>
                    <div className={`w-24 h-1.5 mx-auto rounded-full ${darkMode ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gradient-to-r from-primary to-secondary'}`}></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {top3MostLiked.map((articleData, index) => (
                        <div key={articleData._id} className="relative">
                            {/* Moved and redesigned ranking badge */}
                            <div className={`absolute -top-2 -left-2 z-10 flex items-center justify-center w-14 h-14 rounded-lg ${index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                                    index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-400' :
                                        'bg-gradient-to-br from-amber-600 to-amber-800'
                                } shadow-lg transform rotate-[-8deg]`}>
                                <span className="font-bold text-white text-xl">#{index + 1}</span>
                            </div>

                            <div className="transform transition-all duration-300 hover:-translate-y-1">
                                <PopularArticleCard
                                    articleData={articleData}
                                    showLikeCount={true}
                                    badgeColor={
                                        index === 0 ? 'from-yellow-400 to-yellow-600' :
                                            index === 1 ? 'from-gray-300 to-gray-400' :
                                                'from-amber-600 to-amber-800'
                                    }
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <Link
                        to="/popular-articles"
                        className="inline-flex items-center justify-center group"
                    >
                        <span className={`text-lg font-medium mr-3 ${darkMode ? 'text-primary hover:text-primary-focus' : 'text-primary hover:text-primary-focus'} transition-colors`}>
                            Browse All Popular Content
                        </span>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${darkMode ? 'bg-primary group-hover:bg-primary-focus' : 'bg-primary group-hover:bg-primary-focus'}`}>
                            <FaArrowRight className="text-white text-lg transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PopularArticles;