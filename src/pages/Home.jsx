import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useLoaderData } from 'react-router';
import ArticleCard from '../components/ArticleCard';
import CategorySection from '../components/CategorySection';
import Banner from '../components/Banner/Banner';


const Home = () => {
    const { data } = useLoaderData()
    const [recentArticles, setRecentArticles] = useState(data)
    // console.log(recentArticles)
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div className=" my-16">
                <h2 className="font-bold text-5xl text-center mt-12 mb-10">Recently Posted Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-11/12">
                    {
                        recentArticles.map(articleData => <ArticleCard key={articleData._id} articleData={articleData}></ArticleCard>)
                    }
                </div>
            </div>

            {/* filter by article by category */}
            <CategorySection></CategorySection>



        </div>
    );
};

export default Home;