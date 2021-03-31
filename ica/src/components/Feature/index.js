import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';


//This function was to have a featured product on our Food Selection page. We decided as a team to forgo this
const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Entree of the Day</h1>
            <p>Our Classic Beef Cheeseburger is tasty, delicious, and will have you craving more on the first bite</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    );
};

export default Feature
