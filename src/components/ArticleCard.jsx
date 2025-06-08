import React from 'react';
import { Link } from 'react-router';

const ArticleCard = ({ articleData }) => {
    const { _id, authorEmail, authorName, category, content, date, tags, thumbnail, title } = articleData
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={thumbnail}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
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