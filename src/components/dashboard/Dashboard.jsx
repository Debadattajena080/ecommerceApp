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
      <div className="flex flex-wrap justify-center gap-4">
        {loading && <Loading />}
        {data?.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
