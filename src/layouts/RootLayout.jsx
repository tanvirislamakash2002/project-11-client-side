import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>

            <main className='min-h-[calc(100vh-280px)]'>
                <Outlet></Outlet>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;