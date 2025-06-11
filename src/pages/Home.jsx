import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useLoaderData } from 'react-router';
import ArticleCard from '../components/ArticleCard';
import CategorySection from '../components/CategorySection';


const Home = () => {
    const { data } = useLoaderData()
    const [recentArticles, setRecentArticles] = useState(data)
    // console.log(recentArticles)
    return (
        <div>
            <h2 className="text-3xl text-green-500">This is home</h2>

            <div className="grid grid-cols-3">
                {
                    recentArticles.map(articleData => <ArticleCard articleData={articleData}></ArticleCard>)
                }
            </div>

            {/* filter by article by category */}
            <CategorySection></CategorySection>



        </div>
    );
};

export default Home;