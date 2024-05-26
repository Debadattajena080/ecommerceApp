import React, { useState, useEffect } from "react";
import ProductCard from "../../productcard/ProductCard";

const Jewellery = () => {
  const [jewellery, setJewellery] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => setJewellery(data));
  }, []);

  console.log(jewellery);
  return (
    <div className="container flex justify-center items-center flex-wrap m-4 ">
      {jewellery?.map((item) => (
        <div key={item.id} className="m-4">
          <ProductCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default Jewellery;
