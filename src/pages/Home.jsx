import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useLoaderData } from 'react-router';
import ArticleCard from '../components/ArticleCard';
import CategorySection from '../components/CategorySection';
import Banner from '../components/Banner/Banner';
import axios from 'axios';
import ExtraSection1 from '../components/ExtraSection/ExtraSection1';
import ExtraSection2 from '../components/ExtraSection/ExtraSection2';


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
        <div className='pb-14'>
            <div>
                <Banner></Banner>
            </div>

            <div className={`${darkMode ? 'text-white' : ''} my-16`}>
                <h2 className={`font-bold text-5xl text-center mt-12 mb-10`}>Recently Posted Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-11/12">
                    {
                        recentArticles.map(articleData => <ArticleCard key={articleData._id} articleData={articleData}></ArticleCard>)
                    }
                </div>
            </div>

            {/* filter by article by category */}
            <CategorySection></CategorySection>

            {/* extra sections */}
            <ExtraSection1 allArticlesData={allArticlesData}></ExtraSection1>

            <ExtraSection2 allArticlesData={allArticlesData}></ExtraSection2>

        </div>
    );
};

export default Home;