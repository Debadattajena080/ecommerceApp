import React, { useState, useEffect } from "react";
import ProductCard from "../../productcard/ProductCard";
import Loading from "../../utility/Loading";

const Men = () => {
  const [men, setMen] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((data) => {
        setMen(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 h-1/3 ">
      {loading && <Loading />}
      {men?.map((item) => (
        <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <ProductCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default Men;
