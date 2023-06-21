import React from 'react';
import Banner from './Banner/Banner';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import Chefs from './Chefs/Chefs';
import RecentNews from './RecentNews/RecentNews';
import RecipesByCategory from './RecipesByCategory/RecipesByCategory';
import RecommendedToTry from './RecommendedToTry/RecommendedToTry';

const Homepage = () => {
    return (
        <>
            <Banner></Banner>   
            <WhoWeAre></WhoWeAre>
            <Chefs></Chefs>
            <RecipesByCategory></RecipesByCategory>
            <RecentNews></RecentNews>
            <RecommendedToTry></RecommendedToTry>
        </>
    );
};

export default Homepage;