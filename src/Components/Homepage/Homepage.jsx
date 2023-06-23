import Banner from './Banner/Banner';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import Chefs from './Chefs/Chefs';
import RecentNews from './RecentNews/RecentNews';
import RecipesByCategory from './RecipesByCategory/RecipesByCategory';
import RecommendedToTry from './RecommendedToTry/RecommendedToTry';
import CouterUp from './CouterUp/CouterUp';


const Homepage = () => {
    
    return (
        <>
            <Banner></Banner>   
            <WhoWeAre></WhoWeAre>
            <Chefs></Chefs>
            <RecipesByCategory></RecipesByCategory>
            <CouterUp></CouterUp>
            <RecentNews></RecentNews>
            <RecommendedToTry></RecommendedToTry>
        </>
    );
};

export default Homepage;