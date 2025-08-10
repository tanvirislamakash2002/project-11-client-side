import React from 'react';
import { Link } from 'react-router';
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import useAuth from '../hooks/useAuth';

const ArticleCard = ({ articleData }) => {
    const { darkMode } = useAuth();
    const { _id, authorName, date, thumbnail, title } = articleData;

    return (
        <div className={`group relative flex flex-col h-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
            {/* Thumbnail */}
            <div className="overflow-hidden h-48">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            
            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                    <h3 className={`text-xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                        {title}
                    </h3>
                    
                    <div className={`flex flex-col space-y-2 mb-4 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        <div className="flex items-center">
                            <FaRegUser className="mr-2" />
                            <span>{authorName}</span>
                        </div>
                        <div className="flex items-center">
                            <MdOutlineDateRange className="mr-2" />
                            <span>{new Date(date).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
                
                <div className="mt-auto">
                    <Link 
                        to={`/articleDetails/${_id}`}
                        className={`inline-flex items-center justify-center w-full px-4 py-3 border border-transparent text-sm font-medium rounded-md ${
                            darkMode 
                                ? 'text-primary-content bg-primary hover:bg-primary-focus' 
                                : 'text-white bg-primary hover:bg-primary-focus'
                        } transition-colors`}
                    >
                        Read More
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;