import { motion } from 'framer-motion';
import React from 'react';
import { Outlet, useLocation } from 'react-router';

const AnimatedOutlet = () => {
    const location = useLocation()
    return (
        <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: location.pathname === '/login' ? 500 : -500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: location.pathname === '/login' ? -500 : 500 }}
            transition={{duration:0.4}}
            style={{height:'100%'}}
        >
            <Outlet></Outlet>
        </motion.div>
    );
};

export default AnimatedOutlet;