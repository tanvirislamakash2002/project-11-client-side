import React from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';

const PostArticle = () => {
  const { user, darkMode } = useAuth();

  const handlePostArticle = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Process tags
    data.tags = data.tags.split(',').map((tag) => tag.trim());

    axios
      .post(`${import.meta.env.VITE_API_URL}/post-article`, data)
      .then(() => {
        toast.success('Your Article Posted Successfully!');
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error('Failed to add post!');
      });
  };

  return (
    <div
      className={`flex items-center justify-center min-h-[calc(100vh-120px)] px-4 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-100'
      }`}
    >
      <form
        onSubmit={handlePostArticle}
        className={`w-full max-w-2xl p-8 rounded-xl shadow-lg border ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}
      >
        <h2
          className={`text-3xl font-bold mb-6 text-center ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          Post Article
        </h2>

        {/* Title */}
        <label className="block font-semibold mb-1">Title</label>
        <input
          required
          name="title"
          type="text"
          className={`input input-bordered w-full mb-4 ${
            darkMode ? 'bg-gray-700 text-white placeholder-gray-300' : ''
          }`}
          placeholder="Give a title"
        />

        {/* Content */}
        <label className="block font-semibold mb-1">Content</label>
        <textarea
          required
          name="content"
          className={`textarea textarea-bordered w-full h-32 mb-4 ${
            darkMode ? 'bg-gray-700 text-white placeholder-gray-300' : ''
          }`}
          placeholder="Write your content here"
        ></textarea>

        {/* Category */}
        <label className="block font-semibold mb-1">Category</label>
        <select
          name="category"
          defaultValue="Random"
          className={`select select-bordered w-full mb-4 ${
            darkMode ? 'bg-gray-700 text-white' : ''
          }`}
        >
          <option value="Random" disabled>
            Select Your Category
          </option>
          <option>Technology</option>
          <option>Science</option>
          <option>Sports</option>
          <option>Politics</option>
        </select>

        {/* Tags */}
        <label className="block font-semibold mb-1">Tags</label>
        <input
          required
          name="tags"
          type="text"
          className={`input input-bordered w-full mb-4 ${
            darkMode ? 'bg-gray-700 text-white placeholder-gray-300' : ''
          }`}
          placeholder="Tags (separate with commas)"
        />

        {/* Thumbnail */}
        <label className="block font-semibold mb-1">Thumbnail URL</label>
        <input
          required
          name="thumbnail"
          type="text"
          className={`input input-bordered w-full mb-4 ${
            darkMode ? 'bg-gray-700 text-white placeholder-gray-300' : ''
          }`}
          placeholder="Thumbnail image URL"
        />

        {/* Date */}
        <label className="block font-semibold mb-1">Date</label>
        <input
          required
          name="date"
          type="date"
          className={`input input-bordered w-full mb-4 ${
            darkMode ? 'bg-gray-700 text-white' : ''
          }`}
        />

        {/* Author Info */}
        <label className="block font-semibold mb-1">My Info</label>
        <input
          name="authorName"
          type="text"
          readOnly
          value={user?.displayName}
          className={`input input-bordered w-full mb-2 ${
            darkMode ? 'bg-gray-700 text-white' : ''
          }`}
        />
        <input
          name="authorEmail"
          type="text"
          readOnly
          value={user?.email}
          className={`input input-bordered w-full mb-4 ${
            darkMode ? 'bg-gray-700 text-white' : ''
          }`}
        />
        <input
          name="authorPhoto"
          type="text"
          value={user?.photoURL}
          className="hidden"
        />

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-primary w-full text-lg font-semibold"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default PostArticle;
