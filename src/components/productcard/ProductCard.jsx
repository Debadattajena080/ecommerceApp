import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const {  setCartItems } = useContext(CartContext);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.some((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        toast.error("Item is already in the cart!");
        return prevItems;
      } else {
        toast.success("Item added to cart!");
        return [...prevItems, item];
      }
    });
  };

  return (
    <div className="relative group card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 w-96 mb-8 ">
      <div className="overflow-hidden">
        <figure className="w-full h-52 my-6 flex justify-center items-center group-hover:scale-110 transition-transform duration-500">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-80 object-contain"
          />
        </figure>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm mt-1 truncate">
          {item.description}
        </p>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center bg-red-100 py-1 px-2 rounded-full">
            <PiCurrencyDollarSimpleBold className="text-2xl text-red-500" />
            <span className="ml-1 font-semibold text-gray-800">
              {item.price}
            </span>
          </div>
          <div className="flex items-center">
            <FaStar className="text-xl text-yellow-400" />
            <p className="ml-1 font-medium text-gray-700">
              {item.rating.rate}{" "}
              <span className="text-sm">({item.rating.count})</span>
            </p>
          </div>
        </div>
      </div>
      <button
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-red-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
        onClick={() => addToCart(item)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
