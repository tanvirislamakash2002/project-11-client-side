import React from 'react';
import { Link } from 'react-router';

const BannerSlide = ({ data }) => {
    return (
        <div style={{ backgroundImage: `url(${data.image_url})` }} className='bg-cover h-[500px] bg-[center_center]'>
            <div className="bg-black/50 h-[500px] flex flex-col justify-center items-center text-white">
                <h2 className="text-5xl text-center font-bold">
                    {data.title}
                </h2>
                <p className="pt-2 pb-2 text-xl">
                    {data.sub_title}
                </p>
                <div className="card-actions justify-center">
                    <Link to='/allArticles' className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full bg-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease text-pink-50">Explore Articles</span>
                        <span className="relative invisible">Explore Articles</span>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default BannerSlide;