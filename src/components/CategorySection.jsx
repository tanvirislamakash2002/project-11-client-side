import React from 'react';
import { Link } from 'react-router';
import useAuth from '../hooks/useAuth';

const CategorySection = () => {
    const { darkMode } = useAuth();
    
    const categories = [
        {
            name: "Technology",
            icon: "https://i.ibb.co/KkwnNMJ/105e10388.png",
            path: "/filter-by-category/Technology"
        },
        {
            name: "Science",
            icon: "https://i.ibb.co/prkRLDpg/8945728.png",
            path: "/filter-by-category/Science"
        },
        {
            name: "Sports",
            icon: "https://i.ibb.co/XZBNFZNk/sport12.png",
            path: "/filter-by-category/Sports"
        },
        {
            name: "Politics",
            icon: "https://i.ibb.co/60cbrVNn/poli.png",
            path: "/filter-by-category/Politics"
        }
    ];

    return (
        <section className={`${darkMode ? 'bg-gray-900' : 'bg-base-100'} py-16 px-4 sm:px-6`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Explore Articles By Category
                    </h2>
                    <div className={`w-24 h-1 mx-auto ${darkMode ? 'bg-primary' : 'bg-primary'}`}></div>
                    <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Discover knowledge across various topics and fields of interest
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <Link 
                            to={category.path} 
                            key={index}
                            className="group transition-all duration-300 hover:transform hover:-translate-y-1"
                        >
                            <div className={`h-full rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                                darkMode 
                                    ? 'bg-gray-800 group-hover:bg-gray-700 border border-gray-700' 
                                    : 'bg-white group-hover:bg-gray-50 border border-gray-200'
                            }`}>
                                <div className="p-6 flex flex-col items-center">
                                    <div className="w-20 h-20 mb-4 p-3 rounded-full bg-violet-100 flex items-center justify-center">
                                        <img 
                                            src={category.icon} 
                                            alt={category.name} 
                                            className="w-12 h-12 object-contain" 
                                        />
                                    </div>
                                    <h3 className={`text-2xl font-bold text-center ${
                                        darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        {category.name}
                                    </h3>
                                    <div className={`mt-2 h-1 w-12 rounded-full ${
                                        darkMode ? 'bg-primary' : 'bg-primary'
                                    }`}></div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;