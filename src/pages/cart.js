import React from "react";
import { removeItem } from "../store/cartslice";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeItem(productId));
  };

  console.log("products", products.cart.item);
  return (
    <div>
      <div className='pt-20 pb-6 text-2xl font-semibold text-left pl-10 '>
        <span>Cart</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 bg-grey pt-20 border-solid px-10">
        {products.cart.item?.map((product) => (
          <div key={product.id}>
            <div className="border-2 border-slate-200 py-10 px-0 rounded">
            <img className='h-52 w-38 mx-auto' src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className="bg-red-700 text-white p-1 rounded-md" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
           
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cart;
