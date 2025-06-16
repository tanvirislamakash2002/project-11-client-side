import React from 'react';
import { Link, useLoaderData, useLocation } from 'react-router';
import ArticleCard from '../components/ArticleCard';

const AllArticles = () => {
    const {data} =  useLoaderData()
    const location = useLocation()
    return (
<div className="flex flex-col justify-center max-w-7xl w-11/12 mx-auto">
                <span className='text-violet-400 font-bold mb-2 mr-4 text-center mt-4 '>Filter By Category</span>
            <div className='mx-auto join'>
                <Link to='/allArticles' className={`${location.pathname === '/allArticles' ? 'bg-violet-500 text-white' : 'bg-violet-100'} btn join-item border-0`}>All Articles</Link>
                <Link to='/filter-by-category/Technology' className={`${location.pathname === '/filter-by-category/Technology' ? 'bg-violet-400 text-white' : 'bg-violet-100'} btn join-item border-0`}>Technology</Link>
                <Link to='/filter-by-category/Science' className={`${location.pathname === '/filter-by-category/Science' ? 'bg-violet-400 text-white' : 'bg-violet-100'} btn join-item border-0`}>Science</Link>
                <Link to='/filter-by-category/Sports' className={`${location.pathname === '/filter-by-category/Sports' ? 'bg-violet-400 text-white' : 'bg-violet-100'} btn join-item border-0`}>Sports</Link>
                <Link to='/filter-by-category/Politics' className={`${location.pathname === '/filter-by-category/Politics' ? 'bg-violet-400 text-white' : 'bg-violet-100'} btn join-item border-0`}>Politics</Link>
            </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-14'>
{
    data.map(articleData=><ArticleCard key={articleData._id} articleData={articleData}></ArticleCard>)
}
</div>
</div>
    );
};

export default AllArticles;