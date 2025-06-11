import React from 'react';
import { Link } from 'react-router';

const ArticleCard = ({ articleData }) => {
    const { _id, authorEmail, authorName, category, content, date, tags, thumbnail, title } = articleData
    // console.log(articleData)
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={thumbnail}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
                <p>{category}</p>
                <div className="card-actions">
                    <Link to={`/articleDetails/${_id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;