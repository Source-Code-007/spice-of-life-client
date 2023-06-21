import React, { useEffect, useState } from 'react';
import { FaHeart, FaThumbsUp } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import ButtonDisable from '../HelpingCompo/ButtonDisable';
import { getItemFromLocalStorage } from '../../Utilities/LocalStorage';
import { BallTriangle } from 'react-loader-spinner'
import Rating from 'react-rating';

const Chef = () => {
    const { id } = useParams()
    const [chef, setChef] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const storedRecipe = getItemFromLocalStorage();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_SERVER_URL}/chef/${id}`)
            .then(res => res.json())
            .then(data => {setChef(data); setIsLoading(false)})
    }, [])

    const { id: _id, chef_picture, chef_name, num_recipes, years_of_experience, description, likes, recipes } = chef || {}
    return (
        <section className='flex justify-center items-center min-h-screen' style={{ background: '#0f1d22' }}>
            {
                !isLoading ? <div className='w-6/6 md:w-5/6 lg:w-4/6 mx-5 card shadow-slate-500 shadow-inner mt-24 mb-5'>
                    <figure className='' style={{ height: '600px' }}>
                            <img className='h-full w-full object-center' src={chef_picture} alt={chef_name} />
                    </figure>
                    <div className="card-body space-y-5">
                        <h2 className="card-title text-white text-5xl">{chef_name}</h2>
                        <p className='text-gray-400'>{description}</p>
                        <div className='flex justify-between flex-col md:flex-row gap-2'>
                            <p className='text-gray-400'><span className="badge bg-success font-bold">{years_of_experience}+</span> years of experience</p>
                            <p className='text-gray-400'><span className="badge bg-success font-bold">{num_recipes}</span> special recipes</p>
                            <p className='text-gray-400 flex items-center md:justify-end gap-2'><FaThumbsUp className='text-green-500'></FaThumbsUp> <span> {likes}</span></p>
                        </div>

                        <div className='space-y-5'>
                            <h2 className='card-title text-white text-5xl mt-3'>Available recipes</h2>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                                {
                                    recipes?.map((recipe, ind) => {
                                        const { recipe_name, recipe_img, ingredients, cooking_method, rating } = recipe
                                        return <div key={ind} className='shadow shadow-slate-700 rounded-lg text-white p-4 space-y-6' style={{ background: '#0b1315' }}>
                                            <h2 className='font-bold text-3xl'>{recipe_name}</h2>
                                            <div className='flex justify-between'>
                                                <div className='flex items-center gap-2'> <Rating readOnly style={{ maxWidth: 100 }} value={rating} /></div>
                                                <span>
                                                    {
                                                        (storedRecipe && storedRecipe.find(recipe => recipe.recipe_name === recipe_name)) ? <button className='flex justify-end' disabled><FaHeart></FaHeart></button> :
                                                            <ButtonDisable recipe_data={{ chef_name, recipe_name, recipe_img }}></ButtonDisable>
                                                    }
                                                </span>
                                            </div>
                                            <div><p className='font-bold text-lg'>Cooking method</p> <span className='text-gray-400'>{cooking_method}</span></div>
                                            <ul>
                                                <h2 className='font-bold text-lg'>Ingredients</h2>
                                                {
                                                    ingredients.map((data, ind) => <li key={ind} className='text-gray-400'>{ind + 1}. {data}</li>)
                                                }
                                            </ul>
                                        </div>
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div> : <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperClass={{}}
                    wrapperStyle=""
                    visible={true}
                />
            }
        </section>
    );
};

export default Chef;