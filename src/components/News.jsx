import React from "react";
import CategoryCards from "./CategoryCards";
import { category } from "../data/MyLinks";
const News = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="mt-40">
        <h1 className="text-center text-white md:text-8xl text-6xl md:mb-20 mb-10">
          Top Categories
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-20 gap-10 mx-auto">
        {category.map((cat, i) =>
          cat.sublinks.map((sub, i) =>
            sub.sublink.map((link, i) => (
              <CategoryCards key={i} category={link} />
            ))
          )
        )}
      </div>
    </div>
  );
};

export default News;
