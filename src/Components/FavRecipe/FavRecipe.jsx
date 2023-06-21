import React from 'react';
import { useEffect } from 'react';
import { getItemFromLocalStorage, removeItemFromLocalStorage } from '../../Utilities/LocalStorage';
import { useState } from 'react';

const FavRecipe = () => {
    let [favRecipe, setFavRecipe] = useState(getItemFromLocalStorage() || [])

    // handle remove recipe func
    const handleRemoveRecipeFunc = (recipe_name) => {
        removeItemFromLocalStorage(recipe_name)
        let updateRecipes = favRecipe.filter(recipe => recipe.recipe_name !== recipe_name)
        setFavRecipe(updateRecipes)
    }

    return (
        <div style={{ background: '#0f1d22' }}>
            {favRecipe.length && <h2 className='pt-28 text-center font-bold text-4xl text-white'>Delicious Dishes I Love</h2>}
            <div className='min-h-screen max-w-7xl mx-10 lg:mx-auto flex justify-center items-center'>
                {
                    favRecipe.length ? <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-3 py-10 px-5'>
                        {
                            favRecipe && favRecipe.map((recipe, ind) => {
                                const { chef_name, recipe_name, recipe_img } = recipe || {}
                                return <div key={ind} className='shadow shadow-slate-700 rounded-lg text-white space-y-6' style={{ background: '#0b1315' }}>
                                    <figure className='w-full'>
                                        <img className='h-72 w-full rounded-t-lg' src={recipe_img} alt="" />
                                    </figure>
                                    <div className='p-4 space-y-4'>
                                        <div className="overflow-x-auto">
                                            <table className="table w-full text-white font-bold">
                                                <thead >
                                                    <tr className='border border-slate-700'>
                                                        <th className='bg-transparent text-gray-200'>Chef</th>
                                                        <th className='bg-transparent text-gray-200'>Recipe</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className='border border-slate-700'>
                                                        <td className='bg-transparent text-xl'>{chef_name}</td>
                                                        <td className='bg-transparent text-xl'>{recipe_name}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <button onClick={() => handleRemoveRecipeFunc(recipe_name)} className="btn btn-success border border-orange-500 text-white" style={{ background: '#0b1315' }}>Remove Recipe</button>
                                    </div>
                                </div>
                            })
                        }
                    </div> : <div className='text-center font-bold text-4xl text-white p-3'>There are no favorite recipes yet!</div>
                }
            </div>
        </div>
    );
};

export default FavRecipe;