import React, { useMemo } from 'react';
import useAuth from '../../hooks/useAuth';
import { FaRegUser } from 'react-icons/fa';

const useTopAuthors = (allArticlesData, count = 3) => {
    return useMemo(() => {
        if (!allArticlesData || !allArticlesData.length) return []

        const authorMap = {}
        allArticlesData.forEach(post => {
            const { authorEmail, authorName, authorPhoto } = post
            if (authorEmail) {
                if (!authorMap[authorEmail]) {
                    authorMap[authorEmail] = {
                        count: 0,
                        name: authorName,
                        photo: authorPhoto
                    }
                }
                authorMap[authorEmail].count += 1
            }
        })
        return Object.entries(authorMap)
            .map(([email, data]) => ({
                email,
                name: data.name,
                photo: data.photo,
                postCount: data.count
            }))
            .sort((a, b) => b.postCount - a.postCount)
            .slice(0, count)
    }, [allArticlesData, count])
}
const ExtraSection1 = ({ allArticlesData }) => {
    const { darkMode } = useAuth()
    const topAuthors = useTopAuthors(allArticlesData, 3)
    // console.log(topAuthors)
    return (
        <section className={`${darkMode ? 'text-white' : ''} mt-12 lg:mt-24 max-w-7xl mx-auto w-11/12`}>
            <h2 className='text-5xl font-bold text-center mb-12'>Top Contributors Are</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {topAuthors.map(author =>
                    <div className="flex flex-col items-center p-4 space-x-4 rounded-lg md:space-x-6 bg-violet-400/50 justify-center h-full">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 object-contain ">
                            <div className="avatar">
                                <div className="w-54 rounded">
                                    <img src={author?.photo} alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-bold leading-none flex gap-3"><FaRegUser />{author?.name}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ExtraSection1;