import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { ToastContainer } from 'react-toastify';

const AnimatedOutlet = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(location.pathname === '/login');

  useEffect(() => {
    setIsLogin(location.pathname === '/login');
  }, [location]);

  const handleToggle = () => {
    const newState = !isLogin;
    setIsLogin(newState);
    navigate(newState ? '/login' : '/register');
  };

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-violet-700 to-indigo-600 p-6">
      {/* Back to Home Button */}
      <button
        onClick={handleBackHome}
        className="self-start font-bold mb-6 px-4 py-2 bg-white/20 text-white rounded-md hover:bg-opacity-40 transition"
        aria-label="Back to Home"
      >
        ← Back to Home
      </button>

      {/* Toggle Switch */}
      <div className="relative mb-12">
        <label className="flex items-center cursor-pointer select-none text-white font-semibold text-lg">
          <span className="mr-4">{isLogin ? 'Login' : 'Register'}</span>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isLogin}
              onChange={handleToggle}
              aria-label="Toggle between Login and Register"
            />
            <div className="w-36 h-10 bg-white bg-opacity-20 rounded-full shadow-inner"></div>
            <div
              className={`absolute top-1 left-1 w-16 h-8 bg-violet-300 rounded-full shadow-md transform transition-transform ${
                isLogin ? 'translate-x-0' : 'translate-x-20'
              }`}
            />
          </div>
        </label>
      </div>

      {/* Animated Content */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: isLogin ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isLogin ? -100 : 100 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar
            newestOnTop
            closeOnClick
            pauseOnHover={false}
            draggable={false}
            theme="colored"
          />
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedOutlet;
