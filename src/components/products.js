import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartslice';

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('https://fakestoreapi.com/products');
        setProducts(resp.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleAdd = (product) => {
  
    dispatch(addItem(product));
  };
  

  return (
    <div>
     
      
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 bg-grey border-solid px-10 ">
   
      {products.map((product) => (
        <div key={product.id}>
          
          <div className='space-y-2 border-2  border-2 py-10 px-0 rounded-lg bg-white'>
          <img className='h-48 w-32 mx-auto' src={product.image} alt="" />
          <h4 className='text-sm text-center min-h-[50px]'>{product.title}</h4>
          <h4>{product.price}</h4>
          <button className ='bg-cyan-700 text-white p-1 rounded-md'onClick={() => handleAdd(product)}>
            Add to Cart
          </button>

          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default Products;
