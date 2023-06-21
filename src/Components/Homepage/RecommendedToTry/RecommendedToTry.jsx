import React, { useState } from 'react';
import CommonSectionTitle from '../../HelpingCompo/CommonSectionTitle';

const RecommendedToTry = () => {
    const [RecommendedRecipe, setRecommendedRecipe] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch(`${import.meta.env.VITE_BASE_SERVER_URL}/recommended-recipes`)
            .then(res => res.json())
            .then(data => { setRecommendedRecipe(data); setIsLoading(false) })
    }, [])

    return (
        <div>
            <CommonSectionTitle title={'Recommended to try'} subtitle={'Try to cook our delicious recipe'}></CommonSectionTitle>

            
        </div>
    );
};

export default RecommendedToTry;