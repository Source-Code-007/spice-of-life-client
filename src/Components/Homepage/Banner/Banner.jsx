import React from 'react';
import bannerBg from '../../../assets/img/bannerBgTwo.jpg'

const Banner = () => {
    return (
        <div className='min-h-screen flex justify-center items-center text-white bg-cover bg-slate-600 bg-blend-overlay' style={{ backgroundImage: `url(${bannerBg})`}}>
            <div className='w-5/6 md:w-4/6 lg:w-3/6 mx-auto space-y-6 text-center'>
                <div className='relative'>
                    <h2 className='text-6xl font-extrabold pb-8 uppercase'>Taste the Magic of India</h2>
                    <div className='h-0.5 w-36 bg-green-500 absolute top-full left-0 right-0 mx-auto'></div>
                </div>

                <h2 className='text-3xl font-bold'>Authentic and Mouthwatering Recipes from the Best Indian Chefs!</h2>
                <p className='text-xl text-slate-400 italic font-semibold'>Spice up your cooking with our curated collection of traditional and modern Indian dishes, from the most talented chefs across the country!</p>
                <button className='btn btn-success border border-orange-500 text-slate-50 font-bold' style={{background: '#0b1315'}}>Taste the Magic</button>
            </div>
        </div>
    );
};

export default Banner;