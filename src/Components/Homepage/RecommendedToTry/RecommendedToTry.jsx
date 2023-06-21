import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import CommonSectionTitle from '../../HelpingCompo/CommonSectionTitle';
import { FreeMode, Pagination } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


const RecommendedToTry = () => {
    const [RecommendedRecipe, setRecommendedRecipe] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch(`${import.meta.env.VITE_BASE_SERVER_URL}/recommended-recipes`)
            .then(res => res.json())
            .then(data => { setRecommendedRecipe(data); setIsLoading(false) })
    }, [])

    return (
        <div className='py-20'>
            <CommonSectionTitle title={'Recommended to try'} subtitle={'Try to cook our delicious recipe'}></CommonSectionTitle>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><div className='h-72 w-full bg-slate-500'>hey hey</div></SwiperSlide>
                <SwiperSlide><div className='h-72 w-full bg-slate-500'>hey hey</div></SwiperSlide>
                <SwiperSlide><div className='h-72 w-full bg-slate-500'>hey hey</div></SwiperSlide>
                <SwiperSlide><div className='h-72 w-full bg-slate-500'>hey hey</div></SwiperSlide>
                <SwiperSlide><div className='h-72 w-full bg-slate-500'>hey hey</div></SwiperSlide>
                <SwiperSlide><div className='h-72 w-full bg-slate-500'>hey hey</div></SwiperSlide>
                <SwiperSlide><div className='h-72 w-full bg-slate-500'>hey hey</div></SwiperSlide>
                <SwiperSlide><div className='h-72 w-full bg-slate-500'>hey hey</div></SwiperSlide>
                <SwiperSlide><div className='h-72 w-full bg-slate-500'>hey hey</div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default RecommendedToTry;