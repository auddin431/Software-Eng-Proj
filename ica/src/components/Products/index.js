import React, { useState} from 'react'
import {ProductsContainer, ProductWrapper, ProductsHeading, ProductTitle, ProductCard, ProductImg, ProductInfo, ProductDesc, ProductPrice, ProductButton, CartBtn, CartIcon} from './ProductsElements';
import { productData } from './data';



//heading and data passed in from FoodSelection.js
const Products = ({heading, data}) => {

    //cart useState variable
    const [cart, setCart] = useState([]);

    //count useState variable
    const [count, setCount] = useState(0);
    
    //when called, this function will add an object from the array of items to the cart variable
    //it preserves the previous state of the cart (due to the ...cart) and adds onto it. count is also incremented
    //this function is only called when the moviegoer clicks the "Add to Cart" button
    const addToCart = (productsInfo) => {
        setCart([...cart, productsInfo]);
        setCount(count + 1);

        //this function is to post the cart to the database
        const postDatabase = async (order) => {
            const reqOptions = {
                method: "POST",
                headers: {
                   Accept: "application/json",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(order)
             }
            let response = await fetch("http://localhost:9000/testPost/", reqOptions);
        }
        postDatabase(productsInfo)
    };

    /*

    //This function was removed since we decided to have a remove from cart feature at the checkout screen only
    //When the user clicked on the minus button (which was also removed), the item would be taken out of the cart and the count would decrease by 1
    const removeFromCart = (productsInfo) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter(cartItems => cartItems.name !== productsInfo.name);
        setCart(hardCopy);
        if(count > 0){
            setCount(count - 1);
        }
    }

    //This component was ommited since we are not removing items from the cart here. It basically was a stlyed component that acted as a remove from cart button
    <MinusBtn onClick={() => removeFromCart(ProductsInfo)}>-</MinusBtn>
    can delete this component before submtting final project
    
    //This function was to display the cart temporarily to see if it was working. We kept this here as we may need it to fully implement our Checkout page
    const cartItems = cart.map((ProductsInfo, index) =>
        <div key={index}>
            {`${ProductsInfo.name}: ${ProductsInfo.price}`}
            <input type="submit" value="remove" onClick={() => removeFromCart(ProductsInfo)} />
        </div>
    )
    */
   
    //Below, the data is displayed to the user through these stlyed components, showing the type of food it is: Appetizer, Entree, Drink, or Dessert
    //Other information displayed is the name of the product, the price, a description and of course, a picture
    //This is all done due to the map fuction. We map through the array of items and display the information at each element, which are the object's contents
    //At the very bottom, the CartIcon is able to display the React Icon for a shopping cart and the HTML paragraph shows the quantity at the top right side of the cart
    // the quantity is displayed by the useState variable count
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((ProductsInfo, index) => {
                    return (
                        <ProductCard key={index} id={ProductsInfo.alt}>
                            <ProductImg src={ProductsInfo.img} alt= {productData.alt} />
                            <ProductInfo>
                                <ProductTitle>{ProductsInfo.alt}: {ProductsInfo.name}</ProductTitle>
                                <ProductDesc>{ProductsInfo.desc}</ProductDesc>
                                <ProductPrice>{ProductsInfo.price}</ProductPrice>
                                <ProductButton onClick={() => addToCart(ProductsInfo)}>{ProductsInfo.button}</ProductButton>
                                <p></p>
                            </ProductInfo>
                        </ProductCard>
                    )

                })}
            </ProductWrapper>
            <CartBtn> 
                <CartIcon/> 
                <p>{count}</p>
            </CartBtn>
        </ProductsContainer>

    )
}

export default Products

 