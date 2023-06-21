import React from 'react';
import { FaComment, FaUser } from 'react-icons/fa';


const RecentNews = () => {

    const recentNews = [
        {
            id: 1,
            title: "Eat Healthy Food & Get Your Happiness",
            date: "May 1, 2023",
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",
            description: "Check out our latest recipe for Lemon and Herb Grilled Chicken, perfect for your summer cookouts!",
            comment: 10,
        },
        {
            id: 2,
            title: "Cooking Delicious Food Our Experties Chef.",
            date: "April 27, 2023",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyosy6h66oHB4y-Juczgcr6ZrSgupoAawasQ&usqp=CAU",
            description: "Congratulations to Chef John Doe for winning the prestigious James Beard Award for Best New Restaurant!",
            comment: 15,
        },
        {
            id: 3,
            title: "To Serve Food Customer With Coffee.",
            date: "April 22, 2023",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_6vLS10Ugohq7Kxtt9VvuyOzX9BN4QQ4qw&usqp=CAU",
            description: "Join us for our latest cooking class where you'll learn to make delicious French pastries like croissants and macarons!",
            comment: 30,
        }
    ];

    return (
        <section className='py-20 text-white'>
            <div className='max-w-7xl mx-10 xl:mx-auto'>
                <div className='space-y-3 text-center mb-12'>
                    <div className='relative'>
                        <h2 className='text-4xl font-bold pb-2'>Recent News</h2>
                        <div className='h-0.5 w-32 bg-green-500 absolute top-full left-0 right-0 mx-auto'></div>
                    </div>
                    <p className='text-slate-300 text-lg'>Discover the Latest Buzz from Our Kitchen and Beyond</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        recentNews.map((data, ind) => {
                            return <div key={ind} className='space-y-4 rounded-lg shadow-inner shadow-slate-500 relative'>
                                <figure>
                                        <img className='rounded-t-lg h-52 w-full' src={data.image} alt="" />
                                </figure>
                                <div className='p-5 space-y-3'>
                                    <div className='flex justify-between items-center gap-4'>
                                        <span className='flex items-center gap-2'> <FaUser></FaUser> <span className='text-slate-300'>By admin</span></span>
                                        <hr className='border border-slate-700 flex-grow' />
                                        <span className='flex items-center gap-2'> <FaComment></FaComment> <span className='text-slate-300'>comment ({data.comment})</span></span>
                                    </div>
                                    <h2 className='font-bold text-xl'>{data.title}</h2>
                                    <p className='text-gray-400'>{data.description}</p>
                                </div>
                                <span className='absolute top-1 left-0 bg-red-500 p-3 rounded-r'>{data.date}</span>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default RecentNews;