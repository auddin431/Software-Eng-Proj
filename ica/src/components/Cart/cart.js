import React, {useState} from 'react'
import {CartBtn, CartIcon} from '../Products/ProductsElements';
/*
const CartInfo = {
    count: 0,
    cart: []
}

export const Cart = () => {
    const [cart, setCart] = useState([]);
    //make count state variable
    const [count, setCount] = useState(0);
    
    const addToCart = (productsInfo) => {
        setCart([...cart, productsInfo]);
        setCount(count + 1);
    };
    
    const removeFromCart = (productsInfo) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter(cartItems => cartItems.name !== productsInfo.name);
        setCart(hardCopy);
        if(count > 0){
            setCount(count - 1);
        }
    }
    return(
        <CartBtn> 
            <CartIcon/> 
            <p>{CartInfo.count}</p>
        </CartBtn>
    )
}

export default Cart;
*/