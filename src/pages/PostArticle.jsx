import React from 'react';

const PostArticle = () => {
    return (
        <fieldset className="mx-auto fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <h2 className='text-3xl font-bold text-center'>Post Article</h2>

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
    );
};

export default PostArticle;