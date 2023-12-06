import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
  const items = useSelector((state) => state.cart);
return (
    <div className="bg-slate-700 fixed w-full border-b-[3px] ">
      <div className="flex items-center justify-between px-5 py-2">
        <div className="text-4xl text-white text-left ">
          <span>ReduxStore</span>
        </div>

        <div className="text-white text-right">
          <Link className="pr-10" to="/">
            Home
          </Link>
          <Link className="pr-10" to="/cart">
            Cart
          </Link>
          <span className="pr-2 ">Cart items: {items.item.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
