import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo, productDataThree } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';


function App(){
    return (
        <Router>
            <GlobalStyle />
            <Hero />
            <div id='appetizers'>
                <Products heading='Choose your Appetizer' data={productData}/>
            </div>
            <Feature />
            <div id='entrees'>
                <Products heading='Choose your Entree' data={productDataTwo}/>
            </div>
            <div id='desserts'>
                <Products heading='Choose your Dessert' data={productDataThree}/>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
