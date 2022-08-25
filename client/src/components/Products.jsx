import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../Data'
import Product from './Product'
import axios from  'axios'
import StripeCheckout from "react-stripe-checkout";

const KEY = process.env.REACT_APP_STRIPE;


const Container=styled.div`
padding:20px;
display:felx;
`


const Products = ({cat,filters,sort}) => {
    const[products,setProducts]=useState([])
    const[filteredProducts,setFilteredProducts]=useState([]);

    useEffect(()=>{
const getProducts=async()=>{
    try{
        const res=await axios.get(`http://localhost:5000/api/products?category=${cat}`)//min30:40 ybadel size w el color kima yheb aandi mochkla fil url http://localhost:5000/api/products?category=${cat} maaneha el category kaad nbadel feha statique
        console.log(res.data)//howa aandou array m3ebya w ena le (min:27 )
        console.log(cat)
        setProducts(res.data);

    }catch(err)
    {

    }
}
getProducts()
    },[cat])
    useEffect(() => {
        cat &&
          setFilteredProducts(
            products.filter((item) =>
              Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
              )
            )
          );
      }, [products, cat, filters]);
    console.log('cat Products props',cat)
    console.log('filters Products props',filters)
      console.log('useEff',cat)
      useEffect(() => {
        if (sort === "newest") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.createdAt - b.createdAt)
          );
        } else if (sort === "asc") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.price - b.price)
          );
        } else {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => b.price - a.price)
          );
        }
      }, [sort]);


    return (
        <Container>
       {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)//ki nhot popularProducts ydhaharli kolchy(min:30:26)

        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)
        } 
          
            
            
        </Container>
    )
}
export default Products
