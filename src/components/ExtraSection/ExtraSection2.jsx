import React, { useEffect, useState } from 'react';
import ArticleCard from '../ArticleCard';
import useAuth from '../../hooks/useAuth';

const ExtraSection2 = ({ allArticlesData }) => {
const {darkMode} =useAuth()

    const sortedByLikes = [...allArticlesData].sort((a, b) => (b.likedBy?.length || 0) - a.likedBy?.length || 0);
    const top3MostLiked = sortedByLikes.slice(0, 3)

    return (
        <section className={`${darkMode ? 'text-white' : ''} mt-12 lg:mt-24 max-w-7xl mx-auto w-11/12`}>
            <h2 className='text-5xl font-bold text-center mb-12'>Most Popular Articles</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    top3MostLiked.map(articleData =>
                        <ArticleCard articleData={articleData}></ArticleCard>
                    )
                }
            </div>
        </section>
    );
};

export default ExtraSection2;