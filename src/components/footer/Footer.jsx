import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-gray-800 py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {/* Contact Us Section */}
        <div className="ml-16">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Contact Us</h3>
          <div className="mb-4 flex items-center">
            <FaMapMarkerAlt className="text-blue-500 text-xl mr-4" />
            <p className="font-semibold">450 CD, Country Latin literature.</p>
          </div>
          <div className="mb-4 flex items-center">
            <FaClock className="text-green-500 text-xl mr-4" />
            <p className="font-semibold">8am-9pm, Mon-Sat</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-red-500 text-xl mr-4" />
            <p className="font-semibold">contact-fashionshop.com</p>
          </div>
        </div>

        {/* Policies & Info Section */}
        <div className="ml-16">
          <h3 className="text-lg font-bold text-gray-800 mb-6">
            Policies & Info
          </h3>
          <ul className="space-y-3 font-semibold">
            <li>
              <button className="hover:text-blue-500 transition duration-200 ease-in-out">
                Terms & Conditions
              </button>
            </li>
            <li>
              <button className="hover:text-blue-500 transition duration-200 ease-in-out">
                Policy for Sellers
              </button>
            </li>
            <li>
              <button className="hover:text-blue-500 transition duration-200 ease-in-out">
                Policy for Buyers
              </button>
            </li>
            <li>
              <button className="hover:text-blue-500 transition duration-200 ease-in-out">
                Shipping & Refund
              </button>
            </li>
            <li>
              <button className="hover:text-blue-500 transition duration-200 ease-in-out">
                Wholesale Policy
              </button>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="ml-16">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Quick Links</h3>
          <ul className="space-y-3 font-semibold">
            <li>
              <button className="hover:text-blue-500 transition duration-200 ease-in-out">
                Home
              </button>
            </li>
            <li>
              <button className="hover:text-blue-500 transition duration-200 ease-in-out">
                Products
              </button>
            </li>
            <li>
              <button className="hover:text-blue-500 transition duration-200 ease-in-out">
                About Us
              </button>
            </li>
            <li>
              <button className="hover:text-blue-500 transition duration-200 ease-in-out">
                Contact Us
              </button>
            </li>
            <li>
              <button className="hover:text-blue-500 transition duration-200 ease-in-out">
                Shipping & Refund
              </button>
            </li>
          </ul>
        </div>

        {/* Subscribe Us Section */}
        <div className="mr-12">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Subscribe Us</h3>
          <p className="mb-6 font-semibold">
            Stay updated with the latest offers and trends.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-md text-gray-700 border focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-200 ease-in-out"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
        <p>&copy; 2025 Fashion Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
