import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategories().then((newCategory) => setCategory(newCategory));
  }, []);
  return (
    <div className="bg-white shadow-lg rounded-lg mb-8 p-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Category</h3>
      {category?.map((tempCategory) => (
        <Link href={`/category/${tempCategory.slug}`} key={tempCategory.slug}>
          <span className="cursor-pointer block pb-3 mb-3">
            {tempCategory.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
