import React from "react";
import emptycart from "../../assets/emptycart.png";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <img src={emptycart} alt="empty-cart" className="mb-12" loading="lazy" />
      <div>
        <p className="mb-12">YOUR CART IS EMPTY</p>
        <Link
          to="/"
          className="border rounded-md px-8 py-3 bg-red-400 font-semibold hover:bg-red-500"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
