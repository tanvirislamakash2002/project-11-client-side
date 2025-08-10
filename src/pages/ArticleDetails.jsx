import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser, FaRegComment } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";

const ArticleDetails = () => {
  const navigate = useNavigate();
  const { user, darkMode } = useAuth();
  const { data } = useLoaderData();
  const [article, setArticle] = useState(data);
  const [comments, setComments] = useState([]);
  const {
    _id,
    authorEmail,
    authorName,
    authorPhoto,
    category,
    content,
    date,
    tags,
    thumbnail,
    title,
    likedBy = [],
  } = article || {};

  const [liked, setLiked] = useState(likedBy?.includes(user?.email));
  const [likeCount, setLikeCount] = useState(likedBy?.length);

  useEffect(() => {
    setLiked(likedBy.includes(user?.email));
  }, [likedBy, user]);

  const handleLike = () => {
    if (user?.email === authorEmail) {
      return toast.error("You cannot like your own post.");
    }

    if (user) {
      axios
        .patch(`${import.meta.env.VITE_API_URL}/like/${_id}`, {
          authorEmail: user?.email,
        })
        .then(({ data }) => {
          const isLiked = data?.liked;
          setLiked(isLiked);
          setLikeCount((prev) => (isLiked ? prev + 1 : prev - 1));
          isLiked
            ? toast.success('You have liked the article')
            : toast.warning('You have disliked the article');
        })
        .catch(() => {
          toast.error("Error processing like.");
        });
    } else {
      navigate('/login');
    }
  };

  const handleComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value.trim();
    if (!comment) return toast.warn("Comment cannot be empty.");

    const commentData = {
      article_id: _id,
      commenter_name: user?.displayName,
      commenter_photo: user?.photoURL,
      comment,
    };

    if (user) {
      axios
        .post(`${import.meta.env.VITE_API_URL}/comment-article`, commentData)
        .then(() => {
          setComments([...comments, commentData]);
          toast.success("Comment added successfully!");
          e.target.reset();
        })
        .catch(() => {
          toast.error("Failed to add comment.");
        });
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/article-comments/${_id}`)
      .then(({ data }) => setComments(data))
      .catch(() => {});
  }, [_id]);

  return (
    <div className="py-16 px-4 flex flex-col items-center">
      <div className={`${darkMode ? 'bg-violet-900' : 'bg-violet-100'} card w-full max-w-5xl  rounded-xl shadow-lg p-8`}>
        {/* Article Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <img
            src={thumbnail}
            alt={title}
            className="rounded-xl flex-shrink-0 w-full md:w-96 object-cover shadow-md"
          />

          <div className="flex flex-col justify-between flex-grow">
            <div className="flex items-center gap-5 mb-4">
              <div className="avatar rounded-full overflow-hidden border-4 border-violet-700 w-20 h-20 shadow-lg">
                <img src={authorPhoto} alt={`${authorName}'s avatar`} />
              </div>
              <div>
                <p className={`text-xl font-bold mb-3 leading-snug ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                  <FaRegUser className={`${darkMode ? 'text-violet-300' : 'text-violet-700'}`} />
                  {authorName}
                </p>
                <p className={`text-md font-semibold mb-3 leading-snug flex items-center gap-2 ${darkMode ? 'text-violet-300' : 'text-gray-600'}`}>
                  <MdOutlineDateRange className={`${darkMode ? 'text-violet-300' : 'text-violet-700'}`} /> {date}
                </p>
              </div>
            </div>
            <p className={`text-xl font-bold mb-3 leading-snug ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Category: <span className={`font-normal ${darkMode ? 'text-violet-300' : 'text-gray-600'}`}>{category}</span>
            </p>

            <div className="flex flex-wrap gap-2">
              {tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-violet-500 text-white text-sm font-semibold shadow"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="mb-8">
          <h1 className={`text-4xl font-bold mb-4 leading-snug ${darkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h1>
          <p className={`text-lg leading-relaxed whitespace-pre-wrap ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {content}
          </p>
        </div>

        {/* Like & Comment Stats */}
        <div className={`flex justify-between items-center border-t border-gray-300 pt-4 mb-8 ${darkMode ? 'border-gray-600' : ''}`}>
          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              aria-label={liked ? 'Dislike' : 'Like'}
              className={`btn rounded-full text-xl px-4 py-2 transition-colors ${
                liked
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              {liked ? <BiDislike /> : <BiLike />}
            </button>
            <p className={`text-sm font-semibold select-none ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Liked by <span className="badge badge-md bg-violet-600 text-white">{likeCount}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <p className={`text-sm font-semibold select-none ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className="badge badge-md bg-violet-700 text-white">{comments.length}</span> comments
            </p>
            <FaRegComment className={`text-xl ${darkMode ? 'text-violet-300' : 'text-violet-600'}`} />
          </div>
        </div>

        {/* Comment Form */}
        <form onSubmit={handleComment} className="mb-8">
          <textarea
            name="comment"
            placeholder="Give your opinion on the article..."
            className={`textarea textarea-bordered w-full min-h-[100px] resize-none p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 ${
              darkMode ? 'bg-violet-800 text-white border-violet-600' : 'bg-white text-gray-900 border-gray-300'
            }`}
            required
          ></textarea>
          <div className="flex justify-end mt-3">
            <button
              type="submit"
              className="btn bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Post
            </button>
          </div>
        </form>

        {/* Comments List */}
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment._id || comment.comment + Math.random()}
              className={`card rounded-lg p-4 shadow-md ${
                darkMode ? 'bg-violet-800' : 'bg-violet-100'
              }`}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="mask mask-squircle w-14 h-14 overflow-hidden rounded-lg border-2 border-violet-700">
                  <img
                    src={comment.commenter_photo}
                    alt={`${comment.commenter_name}'s avatar`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className={`font-semibold text-lg leading-snug ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {comment.commenter_name}
                </p>
              </div>
              <p
                className={`whitespace-pre-wrap border-t border-dashed border-violet-700 pt-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                {comment.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
