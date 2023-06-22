import { useEffect, useState } from "react";
import CommonCompoBanner from "../../HelpingCompo/CommonCompoBanner";

const CookingTips = () => {

    const [allRecipes, setAllRecipes] = useState([])

    useEffect(()=>{
        
    }, [])

    return (
        <div>
            <CommonCompoBanner title={'Art of cooking'} subtile={'Discover the Secrets to Perfectly Executing Various Cooking Techniques'}></CommonCompoBanner>

            <div className="my-container">
                <div className="space-y-4 my-12">
                    <h3 className="my-title">Types of Cooking Methods</h3>
                    <p className="my-para">There are three types of cooking methods: dry heat cooking, moist heat cooking, and combination cooking. Each method describes how chefs <span className="text-green-500 font-semibold">use heat to cook food</span> and bring out unique flavors and textures. Understanding these different cooking methods can help you choose the best technique for your ingredients and create delicious meals. Additionally, knowing which cooking methods align with your menu allows you to choose the right <span className="text-green-500 font-semibold">kitchen equipment</span> to achieve consistent, flavorful results in your cooking. Use this guide to learn more about the different types of cooking methods and the best food for each technique.</p>
                </div>

                <div>
                    <h2>Click any of the cooking methods below to learn more</h2>

                </div>

            </div>

        </div>
    );
};

export default CookingTips;