import React from "react";
import phoneTile from "../../assets/phoneTile.png";
import googlePlay from "../../assets/googlePlay.png";
import appStore from "../../assets/appStore.png";
import appGallery from "../../assets/appGallery.png";
import { FaMobileAlt } from "react-icons/fa";

const DownloadPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around min-h-screen p-6">
      <img
        src={phoneTile}
        alt="phoneTile"
        className="w-1/3 h-auto object-contain "
      />

      <div className="">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
          <FaMobileAlt className="inline-block mr-4" />
          Get The e-commerce App
        </h1>
        <p className="text-gray-600 mb-6 leading-relaxed font-semibold text-lg">
          Discover a seamless shopping experience with our app. Explore the best{" "}
          <br />
          deals, track your orders, and enjoy exclusive offers all in one place!
        </p>
        <div className="flex gap-4 mt-4">
          {/* Google Play */}
          <span className="flex items-center bg-gray-100 p-3 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 transition-all">
            <img src={googlePlay} alt="Google Play" className="h-12 w-auto" />
          </span>

          {/* App Store */}
          <span className="flex items-center bg-gray-100 p-3 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 transition-all">
            <img src={appStore} alt="App Store" className="h-12 w-auto" />
          </span>

          {/* App Gallery */}
          <span className="flex items-center bg-gray-100 p-3 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 transition-all">
            <img src={appGallery} alt="App Gallery" className="h-12 w-auto" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
