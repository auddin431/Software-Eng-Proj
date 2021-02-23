import React from 'react'
import {ProductsContainer, ProductWrapper, ProductsHeading, ProductTitle, ProductCard, ProductImg, ProductInfo, ProductDesc, ProductPrice, ProductButton} from './ProductsElements';
import { productData } from './data'


//used data as vaugue name since reused to make other arrays of food objects
const Products = ({heading, data}) => {
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
                                <ProductButton>{ProductsInfo.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )

                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products
 