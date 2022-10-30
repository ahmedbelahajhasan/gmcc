import React from 'react'
import Categories from '../components/Categories'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
const Home = () => {
    return (
        <div>
          
           <Slider/>
           <Categories />
           <Products/>
           <Newsletter/>
           
        </div>
    )
}

export default Home

