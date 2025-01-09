import React, { useState, useEffect } from "react";
import ProductCard from "../productcard/ProductCard";
import Loading from "../utility/Loading";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="text-center py-8 my-8">
        <div className="text-center py-12 ">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-gray-800">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">
              Top Categories
            </span>
          </h1>
          <p className="text-lg font-medium max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Discover amazing discounts and unbeatable deals across all our
            categories. Dive in, explore your favorites, and grab the best
            offers now!
          </p>
          <div className="mt-8">
            <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded"></div>
          </div>
        </div>
      </div>

      <div className="container flex justify-center items-center flex-wrap m-4">
        {loading ? (
          <Loading />
        ) : (
          data?.map((item) => (
            <div key={item.id} className="m-4">
              <ProductCard item={item} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Dashboard;
