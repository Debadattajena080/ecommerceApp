import { Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "./dashboard/Dashboard";
import Women from "./categories/women/Women";
import Men from "./categories/men/Men";
import Jewellery from "./categories/jewellery/Jewellery";
import Electronics from "./categories/electronics/Electronics";
import Cart from "./cart/Cart";
import TopCategories from "./utility/TopCategories";
import CategoryNavBar from "./navbar/CategoryNav";

const Index = () => {
  return (
    <>
      <TopCategories />
      <CategoryNavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default Index;
