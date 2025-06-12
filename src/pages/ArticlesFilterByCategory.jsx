import React from 'react';
import { useLoaderData } from 'react-router';
import ArticleCard from '../components/ArticleCard';

const ArticlesFilterByCategory = () => {
    const { data } = useLoaderData()
    // console.log(data)
    return (
        <div>
            filtered article
            <div className="grid grid-cols-3">
                {
                    data.map(articleData => <ArticleCard articleData={articleData}></ArticleCard>)
                }
            </div>

        </div>
    );
};

export default ArticlesFilterByCategory;