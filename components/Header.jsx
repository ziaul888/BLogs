import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategory } from "../services";

const Header = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory().then((newCategory) => setCategory(newCategory));
  }, []);
  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block border-blue-400 py-8">
          <div className="md:float-left block">
            <Link href="/">
              <span className="cursor-pointer font-bold text-4xl text-white">
                GraphCMS
              </span>
            </Link>
          </div>
          <div className="hidden md:float-left md:contents">
            {category.map((tempCategory) => (
              <Link
                href={`/category/${tempCategory.slug}`}
                key={tempCategory.slug}
              >
                <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                  {tempCategory.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
