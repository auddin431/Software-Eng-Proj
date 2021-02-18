import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

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
