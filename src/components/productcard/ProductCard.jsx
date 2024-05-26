import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
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
  console.log(cartItems);
  return (
    <>
      <div className="card w-96 bg-base-100 rounded-lg shadow-xl shadow-red-100 hover:shadow-2xl">
        <figure className="px-10 pt-10 flex justify-center items-center">
          <img src={item.image} alt="Shoes" className="rounded-xl h-44 " />
        </figure>
        <div className="card-body items-center text-center mt-6 "></div>
        <div className="flex mx-4 justify-between items-center">
          <div className="flex justify-center items-center bg-red-100 py-1 px-2 rounded-3xl">
            <PiCurrencyDollarSimpleBold className="text-2xl" />
            <span className="font-semibold">{item.price}</span>
          </div>
          <div className="flex justify-center items-center ">
            <FaStar className="text-xl mr-2 text-red-300" />
            <p className="font-semibold">
              {item.rating.rate}({item.rating.count})
            </p>
          </div>
        </div>
        <div
          className="cursor-pointer card-actions border rounded-lg w-full flex justify-center items-center bg-red-200 my-6 p-2 hover:bg-red-300"
          onClick={() => addToCart(item)}
        >
          <button className="text-md font-semibold">Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
