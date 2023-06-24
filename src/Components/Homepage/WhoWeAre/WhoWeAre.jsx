import React from 'react';
import whoWeAreImgOne from '../../../assets/img/whowerareone.jpg'
import whoWeAreImgTwo from '../../../assets/img/whowearetwo.jpg'
import whoWeAreImgThree from '../../../assets/img/whowearethree.jpg'


const WhoWeAre = () => {

    
    const whoWeAreData = [
        {
            photo: whoWeAreImgOne,
            title: "Authentic Indian Taste",
            description: "Experience the authentic and flavorful taste of India with our collection of mouthwatering recipes, carefully curated by top chefs from across the country."
        },
        {
            photo: whoWeAreImgTwo,
            title: "Cook with Confidence",
            description: "Whether you're a seasoned cook or a beginner in the kitchen, our easy-to-follow recipes and expert tips will empower you to create delicious Indian dishes that will impress everyone at the table."
        },
        {
            photo: whoWeAreImgThree,
            title: "Fresh Ingredients, Fresh Flavors",
            description: "We believe that the best dishes start with fresh, high-quality ingredients. That's why our recipes feature the freshest spices, produce, and meats, resulting in bold and unforgettable flavors."
        },
    ]
    
    return (

        <div className='text-white'>
            <div className='max-w-7xl mx-10 xl:mx-auto py-14'>
                <div className='space-y-3 text-center mb-12'>
                    <div className='relative'>
                        <h2 className='text-4xl font-bold pb-3'>Who we are</h2>
                        <div className='h-0.5 w-32 bg-green-500 absolute top-full left-0 right-0 mx-auto'>
                        </div>

                    </div>
                    <p className='text-slate-300 text-lg'>Everything you want to know</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        whoWeAreData.map((data, ind) => {
                            return <div key={ind} className='space-y-4 group overflow-hidden rounded-lg shadow-inner shadow-slate-500'>
                                <figure className='h-72 overflow-hidden'>
                                        <img className='rounded-t-lg h-full w-full group-hover:scale-110 transition duration-500' src={data.photo} alt="" />
                                </figure>
                                <div className='p-5 space-y-3'>
                                    <h2 className='font-bold text-xl'>{data.title}</h2>
                                    <p className='text-gray-400'>{data.description}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;