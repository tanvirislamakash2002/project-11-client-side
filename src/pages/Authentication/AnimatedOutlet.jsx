import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { ToastContainer } from 'react-toastify';

const AnimatedOutlet = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [toggle, setToggle] = useState()
    useEffect(() => {
        setToggle(location.pathname === '/login')
    }, [location])
    const handleToggle = () => {
        const changedToggle = !toggle
        setToggle(changedToggle)
        navigate(changedToggle ? '/login' : '/register')
    }
    return (
        <>
            <div className=" min-h-screen gap-4 flex flex-col justify-center items-center bg-violet-300">

                <label className="relative cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={toggle} onChange={handleToggle} />
                    <div
                        className="w-[193px] h-20 flex items-center bg-violet-600 rounded-lg text-[19px] peer-checked:text-violet-600 text-violet-600 font-extrabold after:flex after:items-center after:justify-center peer after:content-['login'] peer-checked:after:content-['register'] peer-checked:after:translate-x-full after:absolute after:left-[4px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-xl after:h-16 after:w-22 after:transition-all peer-checked:bg-violet-600">
                    </div>
                </label>
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, x: location.pathname === '/login' ? 500 : -500 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: location.pathname === '/login' ? -500 : 500 }}
                    transition={{ duration: 0.4 }}
                    style={{ height: '100%' }}
                >
                    <ToastContainer />
                    <Outlet></Outlet>
                </motion.div>
            </div>
        </>
    );
};

export default AnimatedOutlet;