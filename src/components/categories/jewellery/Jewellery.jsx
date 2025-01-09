import React, { useState, useEffect } from "react";
import ProductCard from "../../productcard/ProductCard";
import Loading from "../../utility/Loading";

const Jewellery = () => {
  const [jewellery, setJewellery] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => {
        setJewellery(data);
        setLoading(false);
      });
  }, []);

  console.log(jewellery);
  return (
    <div className="container flex justify-center items-center flex-wrap m-4 ">
      {loading && <Loading />}
      {jewellery?.map((item) => (
        <div key={item.id} className="m-4">
          <ProductCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default Jewellery;
