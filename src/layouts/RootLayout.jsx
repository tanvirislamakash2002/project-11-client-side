import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import Loading from '../pages/Loading';
import useAuth from '../hooks/useAuth';

const RootLayout = () => {
    const navigation = useNavigation()
    const {darkMode, user} = useAuth()
    // if(navigation.state==='loading'){
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <header className={user?'':''}>
                <Navbar></Navbar>
            </header>

            <main className={`${darkMode?`bg-[#23262B]`:``} min-h-[calc(100vh-272px)] pt-16`}>
                {
                    navigation.state==='loading'?
                    <Loading></Loading>
                    :
                    <Outlet></Outlet>
                    
                }
                <ToastContainer />
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;