import React from "react";
import { Link, useLocation } from "react-router-dom";

const categories = [
  { id: "all", name: "Dashboard" },
  { id: "women", name: "Women" },
  { id: "men", name: "Men" },
  { id: "jewellery", name: "Jewellery" },
  { id: "electronics", name: "Electronics" },
];

const CategoryNavBar = () => {
  const location = useLocation(); // Get the current route path
  const activeCategory = location.pathname === "/" ? "all" : location.pathname.slice(1);

  return (
    <div className="flex justify-center items-center space-x-4 py-4 mb-8">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/${category.id === "all" ? "" : category.id}`}
          className={`px-4 py-2 text-sm font-medium rounded-full ${
            activeCategory === category.id
              ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryNavBar;
