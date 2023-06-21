import React from 'react';
import Banner from './Banner/Banner';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import Chefs from './Chefs/Chefs';
import RecentNews from './RecentNews/RecentNews';
import RecipesByCategory from './RecipesByCategory/RecipesByCategory';

const Homepage = () => {
    return (
        <>
            <Banner></Banner>   
            <WhoWeAre></WhoWeAre>
            <Chefs></Chefs>
            <RecipesByCategory></RecipesByCategory>
            <RecentNews></RecentNews>
        </>
    );
};

export default Homepage;