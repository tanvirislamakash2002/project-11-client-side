import React from 'react';
import { FaArrowRight, FaBookOpen } from 'react-icons/fa';
import { Link } from 'react-router';
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import useAuth from '../hooks/useAuth';

const PopularArticleCard = ({ articleData, showLikeCount, badgeColor }) => {
    const { darkMode } = useAuth();
    const { _id, authorName, date, thumbnail, title, likedBy } = articleData;

    return (
        <div className={`group relative h-full flex flex-col rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        } hover:shadow-2xl hover:border-primary`}>
            {/* Like Count Ribbon */}
            {showLikeCount && (
                <div className={`absolute top-0 right-0 z-10 px-4 py-2 text-sm font-bold ${
                    darkMode ? 'text-white' : 'text-white'
                } bg-gradient-to-r ${badgeColor} shadow-md`}>
                    {likedBy?.length || 0} {likedBy?.length === 1 ? 'Like' : 'Likes'}
                </div>
            )}

            {/* Thumbnail with Overlay */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                    darkMode ? 'from-gray-900/80 to-gray-900/20' : 'from-gray-900/60 to-gray-900/10'
                }`}></div>
            </div>
            
            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                    <div className="flex items-center mb-3">
                        <FaBookOpen className={`mr-2 ${darkMode ? 'text-primary' : 'text-primary'}`} />
                        <span className={`text-sm font-medium ${darkMode ? 'text-primary' : 'text-primary'}`}>
                            Featured Article
                        </span>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-3 leading-snug ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                        {title}
                    </h3>
                </div>

                <div className={`pt-4 mt-4 border-t ${
                    darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`flex items-center text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                <FaRegUser className="mr-2" />
                                {authorName}
                            </p>
                            <p className={`flex items-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                <MdOutlineDateRange className="mr-2" />
                                {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>
                        
                        <Link 
                            to={`/articleDetails/${_id}`}
                            className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full ${
                                darkMode 
                                    ? 'bg-primary hover:bg-primary-focus text-white' 
                                    : 'bg-primary hover:bg-primary-focus text-white'
                            } transition-colors`}
                            aria-label={`Read ${title}`}
                        >
                            <FaArrowRight className="text-sm" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularArticleCard;