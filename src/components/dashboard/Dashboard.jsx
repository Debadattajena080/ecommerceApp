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
