import { useEffect, useState } from "react";
import CommonCompoBanner from "../../HelpingCompo/CommonCompoBanner";
import axios from "axios";

const CookingTips = () => {

    const [allRecipes, setAllRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`${import.meta.env.VITE_BASE_SERVER_URL}/all-recipes`)
            .then(res => { setAllRecipes(res.data); setIsLoading(false) })
    }, [])

    return (
        <div>
            <CommonCompoBanner title={'Art of cooking'} subtile={'Discover the Secrets to Perfectly Executing Various Cooking Techniques'}></CommonCompoBanner>

            <div className="my-container">
                <div className="space-y-4 my-12">
                    <h3 className="my-title">Types of Cooking Methods</h3>
                    <p className="my-para">There are three types of cooking methods: dry heat cooking, moist heat cooking, and combination cooking. Each method describes how chefs <span className="text-green-500 font-semibold">use heat to cook food</span> and bring out unique flavors and textures. Understanding these different cooking methods can help you choose the best technique for your ingredients and create delicious meals. Additionally, knowing which cooking methods align with your menu allows you to choose the right <span className="text-green-500 font-semibold">kitchen equipment</span> to achieve consistent, flavorful results in your cooking. Use this guide to learn more about the different types of cooking methods and the best food for each technique.</p>
                </div>

                <div className="my-6 bg-[#0b131574]">
                    <h2 className="py-4 px-3 bg-[#0b1315] font-bold text-xl">Click any of the cooking methods below to learn more</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-3 p-8">
                        {
                            allRecipes?.map((recipe, ind) => <p key={ind}>{ind + 1}. <a href={`#${recipe.recipe_name}`} className="font-semibold text-green-500">{recipe.recipe_name}</a></p>)
                        }
                    </div>
                </div>

                <div>
                    {
                        allRecipes?.map((recipe, ind) => {
                            const { recipe_name, recipe_img, ingredients, cooking_method } = recipe || {}
                            return <div key={ind} className="my-28 shadow shadow-[#0b1315] rounded" id={recipe_name}>
                                <img src={recipe_img} alt={recipe_name} className="w-full h-[300px] lg:h-[500px]" />

                                <div className="p-10 rounded-t bg-[#0b131574]">
                                    <h2 className="my-title ">{ind + 1}. {recipe_name}</h2>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 my-5 gap-5">
                                        <div>
                                            <h3 className="my-title-two text-green-500 mb-2">Ingredients</h3>
                                            <ul className="space-y-3">
                                                {
                                                    ingredients.map((ingredient, ind) => <li key={ind} className="text-slate-300">{ind + 1}. {ingredient}</li>)
                                                }
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="my-title-two text-green-500 mb-2">Cooking method</h3>
                                            <ul className="space-y-3">
                                                {cooking_method.split(/\d+\.\s/g).filter(step => step.trim() !== '').map((method, ind) => <li key={ind} className="text-slate-300">{ind + 1}. {method}</li>)}
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        })
                    }
                </div>

            </div>

        </div>
    );
};

export default CookingTips;