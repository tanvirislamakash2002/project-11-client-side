import React from 'react';
import { useLoaderData } from 'react-router';
import ArticleCard from '../components/ArticleCard';

const AllArticles = () => {
    const {data} =  useLoaderData()
    // console.log(data)
    return (
<div className='grid grid-cols-1 lg:grid-cols-3'>
{
    data.map(articleData=><ArticleCard key={articleData._id} articleData={articleData}></ArticleCard>)
}
</div>
    );
};

export default AllArticles;