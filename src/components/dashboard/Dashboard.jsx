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
        <h1 className="text-4xl font-bold mb-4 tracking-wide">
          TOP CATEGORIES
        </h1>
        <p className="text-lg font-medium max-w-2xl mx-auto">
          How does it feel when you see amazing discount deals for each product?
          Explore our top categories and grab the best offers now!
        </p>
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
