import React, { useState, useEffect } from "react";
import ProductCard from "../productcard/ProductCard";
const Dashboard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <div className="container flex justify-center items-center flex-wrap m-4 ">
      {data?.map((item) => (
        <div key={item.id} className="m-4">
          <ProductCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
