import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ArticleCard from '../components/ArticleCard';

const categories = ['All Articles', 'Technology', 'Science', 'Sports', 'Politics'];

const AllArticles = () => {
  const { data } = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState('All Articles');

  const filteredArticles = selectedCategory === 'All Articles'
    ? data
    : data.filter(article => article.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row gap-10">
      
      {/* Sidebar */}
      <aside className="md:w-56 bg-white dark:bg-gray-900 rounded-lg shadow-lg sticky top-24 self-start p-6">
        <h2 className="text-2xl font-semibold mb-6 text-violet-700 dark:text-violet-400 border-b border-violet-200 dark:border-violet-700 pb-2">
          Categories
        </h2>
        <div className="flex flex-col space-y-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-left px-4 py-2 rounded-md font-medium transition-colors duration-200
                ${
                  selectedCategory === category
                    ? 'bg-violet-600 text-white shadow-md'
                    : 'bg-violet-50 text-violet-700 hover:bg-violet-200 dark:bg-gray-800 dark:text-violet-300 dark:hover:bg-violet-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">
          {selectedCategory}
        </h1>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(articleData => (
              <ArticleCard key={articleData._id} articleData={articleData} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 text-lg mt-16">
            No articles found in this category.
          </p>
        )}
      </main>
    </div>
  );
};

export default AllArticles;
