import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useAuth from '../hooks/useAuth';
// import axios from 'axios';

const CategorySection = () => {
    const {darkMode} = useAuth()
    // const [articles, setArticles] = useState([])

        // useEffect(() => {
        //     axios.get(`/all-articles`)
        //         .then(data => {
        //             console.log(data?.data)
        //         })
        //         .catch(error => {
        //             console.log(error)
        //         })
        // }, [])
        // console.log(articles)

    return (
        <section className={`${darkMode?'text-white':''} p-6 my-6 max-w-7xl w-11/12 mx-auto`}>
            <h2 className='text-5xl font-bold text-center mb-10'>Explore Articles By Category</h2>
            <div className="container grid  grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4 auto-rows-fr">
                <Link to={`/filter-by-category/Technology`}>
                    <div className="flex flex-col items-center p-4 space-x-4 rounded-lg md:space-x-6 bg-violet-400/40 hover:bg-violet-400/80 justify-center h-full">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 object-contain ">

                            <img src="https://i.ibb.co/KkwnNMJ/105e10388.png" alt="" />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-4xl font-bold leading-none">Technology</p>
                        </div>
                    </div>
                </Link>
                <Link to={`/filter-by-category/Science`}>
                    <div className="flex flex-col items-center p-4 space-x-4 rounded-lg md:space-x-6 bg-violet-400/40 hover:bg-violet-400/80 justify-center h-full">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 object-contain ">
                            <img src="https://i.ibb.co/prkRLDpg/8945728.png" alt="" />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-4xl font-bold leading-none">Science</p>
                        </div>
                    </div>
                </Link>
                <Link to={`/filter-by-category/Sports`}>
                    <div className="flex flex-col items-center p-4 space-x-4 rounded-lg md:space-x-6 bg-violet-400/40 hover:bg-violet-400/80 justify-center h-full">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 object-contain ">
                            <img src="https://i.ibb.co/XZBNFZNk/sport12.png" alt="" />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-4xl font-bold leading-none">Sports</p>
                        </div>
                    </div>
                </Link>
                <Link to={`/filter-by-category/Politics`}>
                    <div className="flex flex-col items-center p-4 space-x-4 rounded-lg md:space-x-6 bg-violet-400/40 hover:bg-violet-400/80 justify-center h-full">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 object-contain">
                            <img src="https://i.ibb.co/60cbrVNn/poli.png" alt="" />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-4xl font-bold leading-none">Politics</p>
                        </div>
                    </div>
                </Link>

            </div>
        </section>
    );
};

export default CategorySection;