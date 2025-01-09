import React from "react";

const TopCategories = () => {
  return (
    <div className="text-center pt-8 mt-4">
      <div className="text-center py-12 ">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-gray-800">
          <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">
            Top Categories
          </span>
        </h1>
        <p className="text-lg font-medium max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Discover amazing discounts and unbeatable deals across all our
          categories. Dive in, explore your favorites, and grab the best offers
          now!
        </p>
        <div className="mt-8">
          <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
