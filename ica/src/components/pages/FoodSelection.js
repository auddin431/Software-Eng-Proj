import React from "react";
import NavBar from "./NavBar";
import "../../App.css";
import {BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from '../../globalStyles';
import Hero from '../Hero';
import Products from '../Products';
import { productData, productDataTwo, productDataThree } from '../Products/data';
import Feature from '../Feature';
import Footer from '../Footer';

function FoodSelection() {
    return (
        <Router>
            
            <Hero />
            <div id='appetizers'>
                <Products heading='Menu' data={productData}/>
            </div>
            
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