import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerSlide from './BannerSlide';
import Loading from '../../pages/Loading';
import useAuth from '../../hooks/useAuth';

const Banner = () => {
    const { loading } = useAuth();
    const [bannerData, setBannerData] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        fetch('bannerData.json')
            .then(res => res.json())
            .then(data => {
                setBannerData(data);
                setDataLoading(false);
            });
    }, []);

    if (loading || dataLoading) return <Loading />;

    return (
        <div className="relative overflow-hidden shadow-xl lg:mx-0">
            <Carousel
                showArrows={true}
                autoPlay={true}
                interval={5000}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                stopOnHover={true}
                dynamicHeight={false}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <button
                        onClick={clickHandler}
                        className="absolute z-10 left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-2 rounded-full shadow-lg transition-all duration-300"
                        disabled={!hasPrev}
                    >
                        ❮
                    </button>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <button
                        onClick={clickHandler}
                        className="absolute z-10 right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-2 rounded-full shadow-lg transition-all duration-300"
                        disabled={!hasNext}
                    >
                        ❯
                    </button>
                )}
            >
                {bannerData.map(data => (
                    <BannerSlide key={data.id} data={data} />
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;