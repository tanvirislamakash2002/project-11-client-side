import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useLoaderData } from 'react-router';
import ArticleCard from '../components/ArticleCard';
import CategorySection from '../components/CategorySection';
import Banner from '../components/Banner/Banner';
import axios from 'axios';
import TopContributors from '../components/TopContributors';
import PopularArticles from '../components/PopularArticles';


const Home = () => {
    const { data } = useLoaderData()
    const { darkMode } = useAuth()

    const [recentArticles, setRecentArticles] = useState(data)
    const [allArticlesData, setAllArticlesData] = useState([])

    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/all-articles`)
            .then(data => {
                setAllArticlesData(data?.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    // console.log(allArticlesData)
    return (
        <div className=''>
            <div>
                <Banner></Banner>
            </div>

<div className={`${darkMode ? 'bg-gray-900' : 'bg-base-100'} py-16 px-4 sm:px-6`}>
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Recently Posted Articles
            </h2>
            <div className={`w-24 h-1 mx-auto ${darkMode ? 'bg-primary' : 'bg-primary'}`}></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {recentArticles.map(articleData => (
                <ArticleCard key={articleData._id} articleData={articleData} />
            ))}
        </div>
        
        <div className="text-center mt-12">
            <Link 
                to="/allArticles" 
                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm ${
                    darkMode 
                        ? 'bg-primary hover:bg-primary-focus text-white' 
                        : 'bg-primary hover:bg-primary-focus text-white'
                }`}
            >
                View All Articles
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </Link>
        </div>
    </div>
</div>

            {/* filter by article by category */}
            <CategorySection></CategorySection>

            {/* extra sections */}
            <TopContributors allArticlesData={allArticlesData}></TopContributors>

            <PopularArticles allArticlesData={allArticlesData}></PopularArticles>

        </div>
    );
};

export default Home;