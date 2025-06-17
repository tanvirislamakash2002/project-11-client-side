import React, { useEffect, useState } from 'react';
import ArticleCard from '../ArticleCard';

const ExtraSection2 = ({allArticlesData}) => {


        const sortedByLikes = [...allArticlesData].sort((a,b)=>(b.likedBy?.length || 0)-a.likedBy?.length||0);
        const top3MostLiked =sortedByLikes.slice(0,3)

    return (
        <div>
            {
                top3MostLiked.map(articleData=>
                    <ArticleCard articleData={articleData}></ArticleCard>
                )
            }
        </div>
    );
};

export default ExtraSection2;