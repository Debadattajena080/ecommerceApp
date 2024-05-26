import React, { useState, useEffect } from "react";
import ProductCard from "../../productcard/ProductCard";

const Men = () => {
  const [men, setMen] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((data) => setMen(data));
  }, []);

  
  return (
    <div className="container flex justify-center items-center flex-wrap m-4 ">
      {men?.map((item) => (
        <div key={item.id} className="m-4">
          <ProductCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default Men;
