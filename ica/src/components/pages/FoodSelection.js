import React from "react";
import "../../App.css";
import {BrowserRouter as Router } from 'react-router-dom';
import Hero from '../Hero';
import Products from '../Products';
import { productData} from '../Products/data';
//import Cart from '../Cart/cart';
//import Feature from '../Feature';
import Footer from '../Footer';

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
<Feature />
            <div id='entrees'>
                <Products heading='Choose your Entree' data={productDataTwo}/>
            </div>
            <div id='desserts'>
                <Products heading='Choose your Dessert' data={productDataThree}/>
            </div>
            */