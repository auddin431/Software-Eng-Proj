import React from "react";
import "../../App.css";
import {BrowserRouter as Router } from 'react-router-dom';
import Hero from '../Hero';
import Products from '../Products';
import { productData} from '../Products/data';
//import Cart from '../Cart/cart';
//import Feature from '../Feature';
import Footer from '../Footer';

//This function is what loads the Food Ordering page. It calls the Products component and passes in Menu and the array of products to it
//The Hero is there for the top portion of te page, as desacribed in the Hero.js file
//Footer is for the social media links the link back to the Home page, as described in the Footer.js file

function FoodSelection() {
    return (
        <Router>
            
            <Hero />
            <Products heading='Menu' data={productData}/>
            <Footer />
            
        </Router>
    );
}

export default FoodSelection;

/*
//These were part of an older version of FoodSelection.js but were removed due to changes in structure. We kept them here in case we decided to do something where we needed them again
//As described in Feature.js, this was something extra that we decided to forgo
<Feature />
            <div id='entrees'>
                <Products heading='Choose your Entree' data={productDataTwo}/>
            </div>
            <div id='desserts'>
                <Products heading='Choose your Dessert' data={productDataThree}/>
            </div>
            */