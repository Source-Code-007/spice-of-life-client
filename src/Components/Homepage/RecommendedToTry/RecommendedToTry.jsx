import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import CommonSectionTitle from '../../HelpingCompo/CommonSectionTitle';
import { FreeMode, Pagination } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { ColorRing } from 'react-loader-spinner';


const RecommendedToTry = () => {
    const [recommendedRecipe, setRecommendedRecipe] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch(`${import.meta.env.VITE_BASE_SERVER_URL}/recommended-recipes`)
            .then(res => res.json())
            .then(data => { setRecommendedRecipe(data); setIsLoading(false) })
    }, [])

    return (
        <div className='py-20 my-container'>
            <CommonSectionTitle title={'Recommended to try'} subtitle={'Try to cook our delicious recipe'}></CommonSectionTitle>

            {isLoading ? <div className='h-[50vh] flex justify-center items-center'><ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            /></div>
                : <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {
                        recommendedRecipe.map((recipe, ind) => {
                            const { recipe_name, recipe_img, rating, cooking_method, ingredients } = recipe || {}
                            return <SwiperSlide key={ind}>
                                <div key={ind} className='space-y-4 rounded-lg shadow-inner shadow-slate-500  group overflow-hidden mb-8'>
                                    <figure className='h-72 overflow-hidden relative'>
                                        <img src={recipe_img} alt={recipe_name} className='h-full w-full rounded-t group-hover:scale-110 transition duration-500' />
                                        <span className='badge badge-neutral bg-orange-500 absolute left-2 top-2'>{rating}</span>
                                    </figure>

                                    <div className="card-body space-y-3 min-h-[370px]">

                                        <h3 className='font-bold text-3xl'>Ingredients</h3>
                                        <ul className='grid grid-cols-2 gap-2'>
                                            {ingredients.map((ingredient, ind) => <li key={ind} className='badge badge-outline'>{ingredient}</li>)}
                                        </ul>
                                    <div>
                                    <h2 className='font-bold text-3xl'>Cooking method</h2>
                                        <p className='text-sm'>{cooking_method}</p>
                                    </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })
                    }

                </Swiper>
            }
        </div>
    );
};

export default RecommendedToTry;