import React, { useState, useEffect } from 'react'
import {ProductsContainer, ProductWrapper, ProductsHeading, ProductTitle, ProductCard, ProductImg, ProductInfo, ProductDesc, ProductPrice, ProductButton, CartBtn, CartIcon} from './ProductsElements';
import { productData } from './data'


//used data as vaugue name since reused to make other arrays of food objects
const Products = ({heading, data}) => {
    
    const [cart, setCart] = useState([]);
    //make count state variable
    const [count, setCount] = useState(0);

    const addToCart = (productsInfo) => {
        setCart([...cart, productsInfo]);
        setCount(count + 1);
    };
    console.log(cart);
    console.log(count);

    const removeFromCart = (productsInfo) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter(cartItems => cartItems.name !== productsInfo.name);
        setCart(hardCopy);
        setCount(count - 1);
    }

    const cartItems = cart.map((ProductsInfo, index) =>
        <div key={index}>
            {`${ProductsInfo.name}: ${ProductsInfo.price}`}
            <input type="submit" value="remove" onClick={() => removeFromCart(ProductsInfo)} />
        </div>
    )
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((ProductsInfo, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={ProductsInfo.img} alt= {productData.alt} />
                            <ProductInfo>
                                <ProductTitle>{ProductsInfo.name}</ProductTitle>
                                <ProductDesc>{ProductsInfo.desc}</ProductDesc>
                                <ProductPrice>{ProductsInfo.price}</ProductPrice>
                                <ProductButton onClick={() => addToCart(ProductsInfo)}>{ProductsInfo.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )

                })}
            </ProductWrapper>
            <div>CART</div>
            <div>{cartItems}</div>
            <CartBtn> 
                <CartIcon/> {count}
            </CartBtn>
        </ProductsContainer>

    )
}

export default Products

 