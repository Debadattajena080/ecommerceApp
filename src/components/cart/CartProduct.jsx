import React, { useContext } from "react";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { HiMiniPlusCircle } from "react-icons/hi2";
import { HiMiniMinusCircle } from "react-icons/hi2";

import { CartContext } from "../context/CartContext";

const CartProduct = ({ handleDecreamentCounter, handleIncrementCounter, currentCount }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const removeItem = (item) => {
    const newCartItems = cartItems?.filter((cart) => item.id !== cart.id);
    setCartItems(newCartItems);
  };

  return (
    <div>
      {cartItems?.map((cartItem) => (
        <div
          key={cartItem.id}
          className="rounded-lg mb-4 border border-gray-200 bg-white p-4 shadow-md shadow-red-200  md:p-6"
        >
          <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
            <img
              className="hidden h-20 w-20 dark:block"
              src={cartItem.image}
              alt="imac"
              loading="lazy"
            />

            <label for="counter-input" className="sr-only">
              Choose quantity:
            </label>
            <div className="flex items-center justify-between md:order-3 md:justify-end">
              <div className="flex items-center">
                <button
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="counter-input"
                  disabled={currentCount <= 1}
                >
                  <HiMiniMinusCircle
                    className="text-2xl text-red-400 hover:text-red-500"
                    onClick={handleDecreamentCounter}
                  />
                </button>
                <input
                  type="text"
                  id="counter-input"
                  data-input-counter
                  className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium focus:outline-none focus:ring-0 "
                  placeholder=""
                  value={currentCount}
                  required
                />
                <button
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="counter-input"
                  disabled={currentCount >= 3}
                >
                  <HiMiniPlusCircle
                    className="text-2xl text-red-400 hover:text-red-500"
                    onClick={handleIncrementCounter}
                  />
                </button>
              </div>
              <div className=" text-end md:order-4 md:w-32">
                <p className="text-base font-bold flex items-center justify-end">
                  <PiCurrencyDollarSimpleBold />
                  {currentCount} * {cartItem.price}
                </p>
              </div>
            </div>

            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
              <p className="text-base font-medium text-gray-900  ">
                PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24"
                Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT
              </p>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="inline-flex justify-center items-center text-sm font-semibold text-gray-800 hover:text-gray-900 hover:underline dark:text-gray-400 "
                >
                  <FaRegHeart className="font-medium mr-1" />
                  Add to Favorites
                </button>

                <button
                  type="button"
                  className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                  onClick={() => removeItem(cartItem)}
                >
                  <MdDeleteOutline className="text-lg h-4 w-4 mr-1" />
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProduct;
