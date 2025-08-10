import React, { useMemo } from 'react';
import useAuth from '../hooks/useAuth';
import { FaMedal, FaUserEdit, FaArrowRight } from 'react-icons/fa';

const useTopAuthors = (allArticlesData, count = 3) => {
    return useMemo(() => {
        if (!allArticlesData || !allArticlesData.length) return [];

        const authorMap = {};
        allArticlesData.forEach(post => {
            const { authorEmail, authorName, authorPhoto } = post;
            if (authorEmail) {
                if (!authorMap[authorEmail]) {
                    authorMap[authorEmail] = {
                        count: 0,
                        name: authorName,
                        photo: authorPhoto
                    };
                }
                authorMap[authorEmail].count += 1;
            }
        });
        return Object.entries(authorMap)
            .map(([email, data]) => ({
                email,
                name: data.name,
                photo: data.photo,
                postCount: data.count
            }))
            .sort((a, b) => b.postCount - a.postCount)
            .slice(0, count);
    }, [allArticlesData, count]);
};

const TopContributors = ({ allArticlesData }) => {
    const { darkMode } = useAuth();
    const topAuthors = useTopAuthors(allArticlesData, 3);

    return (
        <section className={`${darkMode ? 'bg-gray-900' : 'bg-base-100'} py-20 px-4 sm:px-6`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Our Distinguished Contributors
                    </h2>
                    <div className={`w-24 h-1 mx-auto ${darkMode ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gradient-to-r from-primary to-secondary'}`}></div>
                    <p className={`mt-6 max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Celebrating the most valuable knowledge contributors in our community
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {topAuthors.map((author, index) => (
                        <div
                            key={author.email}
                            className={`relative group rounded-2xl transition-all duration-500 ${darkMode
                                ? 'bg-gradient-to-b from-gray-800 to-gray-900 hover:shadow-xl hover:shadow-primary/20'
                                : 'bg-white hover:shadow-lg'
                                }`}
                        >
                            {/* Ranking badge */}
                            <div className={`absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full ${index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white' :
                                index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-gray-800' :
                                    'bg-gradient-to-br from-amber-600 to-amber-800 text-white'
                                }`}>
                                <span className="font-bold">{index + 1}</span>
                            </div>

                            <div className="p-8 flex flex-col items-center h-full">
                                {/* Profile image with glow effect */}
                                <div className="relative mb-8 group-hover:transform group-hover:scale-105 transition-transform duration-500">
                                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-xl relative">
                                        <div className={`absolute inset-0 rounded-full ${index === 0 ? 'shadow-[0_0_30px_10px_rgba(234,179,8,0.3)]' :
                                            index === 1 ? 'shadow-[0_0_30px_10px_rgba(156,163,175,0.3)]' :
                                                'shadow-[0_0_30px_10px_rgba(217,119,6,0.3)]'
                                            }`}></div>
                                        <img
                                            src={author.photo}
                                            alt={author.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'https://www.gravatar.com/avatar?d=mp';
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="text-center flex-grow">
                                    <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {author.name}
                                    </h3>

                                    <div className={`inline-flex items-center px-4 py-2 rounded-full mb-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'
                                        }`}>
                                        <span className={`font-semibold ${darkMode ? 'text-primary-content' : 'text-primary'}`}>
                                            {author.postCount} {author.postCount === 1 ? 'Article' : 'Articles'}
                                        </span>
                                    </div>

                                    <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {index === 0 ? 'Top Knowledge Contributor' :
                                            index === 1 ? 'Expert Contributor' :
                                                'Valued Contributor'}
                                    </p>
                                </div>

                                <button
                                    className={`mt-auto w-full flex items-center justify-center py-3 px-6 rounded-lg font-medium transition-all ${darkMode
                                        ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary-focus hover:to-secondary-focus text-white'
                                        : 'bg-gradient-to-r from-primary to-secondary hover:from-primary-focus hover:to-secondary-focus text-white'
                                        }`}
                                >
                                    View Contributions
                                    <FaArrowRight className="ml-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopContributors;