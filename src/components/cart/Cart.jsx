import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import EmptyCart from "./EmptyCart";
import Checkout from "../checkout/Checkout";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import { FaLongArrowAltRight } from "react-icons/fa";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const [originalPrice, setOriginalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState();
  const [couponValue, setCouponValue] = useState("");
  const [extra, setExtra] = useState(0);
  const [currentCount, setCurrentCount] = useState(1);
  const Tax = 32;
  const DevileryCharge = 100;
  const Savings = 25;

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (couponValue.length >= 7) {
      setExtra(5);
      toast.success("Coupon applied successfully");
    } else {
      toast.info("Invalid coupon");
    }
  };

  const handleIncrementCounter = () => {
    setCurrentCount((currentCount) => currentCount + 1);
    console.log(currentCount);
  };

  const handleDecreamentCounter = () => {
    setCurrentCount((currentCount) => currentCount - 1);
    console.log(currentCount);
  };

  useEffect(() => {
    const newOriginalPrice =
      cartItems?.reduce((acc, curr) => acc + curr.price, 0) || 0;
    const newTotalPrice =
      currentCount * newOriginalPrice + DevileryCharge + Tax - Savings - extra;

    setOriginalPrice(newOriginalPrice);
    setTotalPrice(Math.floor(newTotalPrice));
  }, [cartItems, extra, currentCount]);

  return (
    <div>
      {cartItems.length !== 0 ? (
        <section className=" py-8 antialiased md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 className="text-xl font-semibold text-gray-900  sm:text-2xl">
              Shopping Cart
            </h2>

            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
              <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                <div className="space-y-6">
                  <CartProduct
                    handleIncrementCounter={handleIncrementCounter}
                    handleDecreamentCounter={handleDecreamentCounter}
                    currentCount={currentCount}
                  />
                </div>
              </div>

              <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                <div className="space-y-4 rounded-lg border border-gray-200 p-4 shadow-md shadow-red-200  sm:p-6">
                  <p className="text-xl font-semibold">Order summary</p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal">
                          Original price
                        </dt>
                        <dd className="text-base font-medium">
                          ${originalPrice}
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal">Savings</dt>
                        <dd className="text-base font-medium text-green-600">
                          -${Savings}
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal">Store Pickup</dt>
                        <dd className="text-base font-medium">
                          ${DevileryCharge}
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal">Tax</dt>
                        <dd className="text-base font-medium">${Tax}</dd>
                      </dl>
                    </div>

                    <dl className="flex flex-col justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      {extra > 0 && (
                        <div className="flex justify-between items-center">
                          <dt className="text-base">Coupon Applied</dt>
                          <dd className="text-base">-${extra}</dd>
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <dt className="text-base font-bold">Total</dt>
                        <dd className="text-base font-bold">${totalPrice}</dd>
                      </div>
                    </dl>
                  </div>

                  <button
                    // onClick={handleSubmit}
                    className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Proceed to Checkout
                  </button>

                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-normal"> OR </span>
                    <Link
                      to="/"
                      title=""
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                    >
                      Continue Shopping
                      <FaLongArrowAltRight className="text-xl" />
                    </Link>
                  </div>
                </div>

                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-md shadow-red-200 sm:p-6">
                  <form className="space-y-4">
                    <div>
                      <label
                        for="voucher"
                        className="mb-2 block text-sm font-medium"
                      >
                        Do you have a voucher or gift card?
                      </label>
                      <input
                        type="text"
                        id="voucher"
                        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600  dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="Enter coupon code"
                        required
                        value={couponValue}
                        onChange={(e) => setCouponValue(e.target.value)}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Apply Code
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <EmptyCart />
      )}

      <Checkout />
    </div>
  );
};

export default Cart;
