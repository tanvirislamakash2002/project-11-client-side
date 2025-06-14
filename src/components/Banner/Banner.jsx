import React, { Component, use, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BannerSlide from './BannerSlide';
import Loading from '../../pages/Loading';
import useAuth from '../../hooks/useAuth';

const Banner = () => {
    const {loading}  = useAuth()
    const [bannerData, setBannerData] = useState([])
    const [dataLoading, setDataLoading]  = useState(true)
    useEffect(()=>{
        fetch('bannerData.json')
        .then(res=>res.json())
        .then(data=>{
            setBannerData(data)
            setDataLoading(false)
        })
    },[])
    // console.log(bannerData)

    if(loading || dataLoading)  return <Loading></Loading>
    return (
        <Carousel
        showArrows={true}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        // showStatus={false}
        stopOnHover={false}
        dynamicHeight={false}
        >
            {
                bannerData.map(data=><BannerSlide key={data.id} data={data}></BannerSlide>)
            }
        </Carousel>
    );
};

export default Banner;