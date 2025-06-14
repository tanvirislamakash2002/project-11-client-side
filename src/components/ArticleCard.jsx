import React from 'react';
import { Link } from 'react-router';
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const ArticleCard = ({ articleData }) => {
    const { _id, authorEmail, authorName, category, content, date, tags, thumbnail, title } = articleData
    // console.log(articleData)
    return (
        <div className="card bg-violet-400/20 max-w-96 shadow-sm flex flex-col h-full">
            <figure className="px-4 pt-4">
                <img
                    src={thumbnail}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body text-center mx-5 pt-4 flex flex-col flex-grow">
                <h2 className="card-title text-3xl">{title}</h2>

                <div className=" mt-auto">
                    <div className="flex flex-col mb-4 gap-2 text-violet-800">
                        <p className='flex items-center text-xl'><FaRegUser />{authorName}</p>
                        <p className='flex items-center  text-lg'><MdOutlineDateRange/>Date: {date}</p>
                    </div>
                    <div className="card-actions mx-auto items-end justify-center">
                        <Link to={`/articleDetails/${_id}`}>
                            {/* <button className="btn btn-primary">Read More</button> */}
                            <span className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="relative">Read More</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;