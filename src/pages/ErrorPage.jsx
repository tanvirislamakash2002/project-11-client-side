import React from 'react';
import errorAnimation from '../assets/lotties/error.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col pt-12'>
            <div>
                <h2 className='text-5xl font-semibold text-center text-red-500'>Page Not Found!</h2>
                <h3 className='text-5xl font-semibold text-center text-green-300'>Lost in Knowledge?</h3>
            </div>
            <div className="flex justify-center items-center">
                <Lottie animationData={errorAnimation} loop={true} style={{ width: '400px' }}></Lottie>
            </div>
            <div className="flex justify-center">
                <Link to='/'><button className='btn btn-success mx-auto'>Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;