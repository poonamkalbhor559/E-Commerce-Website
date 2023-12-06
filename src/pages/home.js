import React from 'react'
import Product from '../components/products'
const Home = () => {
  return (
    <div>
      <div className='pt-20 pb-6 text-4xl font-semibold text-left pl-10 '>
        <span >Products</span>
        </div>
      <Product/>
    </div>
  )
}

export default Home;
