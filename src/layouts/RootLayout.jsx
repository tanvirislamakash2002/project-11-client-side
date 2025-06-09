import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import Loading from '../pages/Loading';

const RootLayout = () => {
    const navigation = useNavigation()
    // if(navigation.state==='loading'){
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>

            <main className='min-h-[calc(100vh-285px)]'>
                {
                    navigation.state==='loading'?
                    <Loading></Loading>
                    :<Outlet></Outlet>
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