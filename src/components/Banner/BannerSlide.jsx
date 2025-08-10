import React from 'react';
import { Link } from 'react-router';

const BannerSlide = ({ data }) => {
    return (
        <div 
            style={{ backgroundImage: `url(${data.image_url})` }} 
            className="relative bg-cover bg-center h-[70vh]"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center">
                <div className="container mx-auto px-6 lg:px-12 text-white">
                    <div className="max-w-2xl space-y-6 mx-auto">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            {data.title}
                        </h2>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-200">
                            {data.sub_title}
                        </p>
                        <div className="pt-4">
                            <Link 
                                to="/allArticles" 
                                className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-300 rounded-full group"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary opacity-90 group-hover:opacity-100 transition-all duration-300"></span>
                                <span className="relative flex items-center gap-2">
                                    Explore Articles
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSlide;