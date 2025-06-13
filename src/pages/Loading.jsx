import React from 'react';
import loadingAnimation from '../assets/lotties/loading.json'
import Lottie from 'lottie-react';

const Loading = () => {
    return (
        <>
        {/* <div className="w-22 mx-auto">
            <span className="loading loading-dots w-full"></span>
        </div> */}
            <div className="flex justify-center items-center">
                <Lottie animationData={loadingAnimation} loop={true} style={{ width: '400px' }}></Lottie>
            </div>
        
        </>
    );
};

export default Loading;