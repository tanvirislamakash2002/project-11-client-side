import React from 'react';
import { useLoaderData } from 'react-router';
import ArticleCard from '../components/ArticleCard';

const AllArticles = () => {
    const {data} =  useLoaderData()
    
    return (
<div className="flex justify-center w-11/12 mx-auto">
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-14'>
{
    data.map(articleData=><ArticleCard key={articleData._id} articleData={articleData}></ArticleCard>)
}
</div>
</div>
    );
};

export default AllArticles;