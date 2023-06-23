import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import CommonSectionTitle from '../../HelpingCompo/CommonSectionTitle';
import { ColorRing } from 'react-loader-spinner';
import Rating from 'react-rating';
import { FaStar } from "react-icons/fa";

const RecipesByCategory = () => {
    const [activeCategory, setActiveCategory] = useState('West Indian Cuisine')
    const [activeCategoryRecipes, setActiveCategoryRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch(`${import.meta.env.VITE_BASE_SERVER_URL}/getRecipesByCategory?category=${activeCategory}`)
            .then(res => res.json())
            .then(data => { setActiveCategoryRecipes(data); setIsLoading(false) })
    }, [activeCategory])

    const tabs = ['West Indian Cuisine', 'North Indian Cuisine', 'Punjabi Cuisine', 'Gujarati Cuisine']
    
    return (
        <div className='max-w-7xl mx-auto py-16 px-10 xl:px-0'>
            <CommonSectionTitle title={'Explore Delicious Categories'} subtitle={'Discover a Wide Range of Culinary Delights'}></CommonSectionTitle>
            {isLoading ? <div className='h-[50vh] flex justify-center items-center'><ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            /></div>
                : <Tabs>
                    <div className='grid grid-cols-12 gap-8'>

                        {/* tab button */}
                        <div className='col-span-12 md:col-span-6 xl:col-span-4'>
                            <TabList className={'flex flex-col gap-2 sticky top-0 left-0 pt-5'}>
                                {
                                    tabs.map((tab, ind) => <Tab key={ind}><button onClick={() => setActiveCategory(tab)} className={`cmn-btn-one ${activeCategory === tab && '!bg-orange-500'} w-full`}>{tab}</button></Tab>)
                                }
                            </TabList>
                        </div>

                        <div className='col-span-12 md:col-span-6 xl:col-span-8'>
                            {
                                tabs.map((tab, ind) => {
                                    return <TabPanel key={ind}>
                                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-5'>
                                            {
                                                activeCategoryRecipes.map((recipe, ind) => {
                                                    const { recipe_name, recipe_img, rating, ingredients } = recipe
                                                    return <div key={ind} className='space-y-4 rounded-lg shadow-inner shadow-slate-500  group overflow-hidden'>
                                                        <figure className='h-72 overflow-hidden'>
                                                            <img src={recipe_img} alt={recipe_name} className='h-full w-full rounded-t group-hover:scale-110 transition duration-500' />
                                                        </figure>

                                                        <div className="card-body">
                                                            <div className='my-2'>
                                                                <h2 className='font-bold text-3xl'>{recipe_name}</h2>
                                                                <Rating initialRating={rating} emptySymbol={<span className='text-slate-300'><FaStar></FaStar></span>} fullSymbol={<span className='text-orange-500'><FaStar></FaStar></span>} />
                                                            </div>

                                                            <h3 className='my-1'>Ingredients:</h3>
                                                            <ul className='grid grid-cols-2 gap-2'>
                                                                {ingredients.map((ingredient, ind) => <li key={ind} className='badge badge-outline'>{ingredient}</li>)}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </TabPanel>
                                })
                            }
                        </div>

                    </div>
                </Tabs>
            }

        </div>
    );
};

export default RecipesByCategory;