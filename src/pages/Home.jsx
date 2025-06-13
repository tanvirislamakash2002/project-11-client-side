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

            <div className="grid grid-cols-3">
                {
                    recentArticles.map(articleData => <ArticleCard key={articleData._id} articleData={articleData}></ArticleCard>)
                }
            </div>

            {/* filter by article by category */}
            <CategorySection></CategorySection>



        </div>
    );
};

export default Home;