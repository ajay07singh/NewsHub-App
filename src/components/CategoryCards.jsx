import React from "react";
import { Link } from "react-router-dom";
const CategoryCards = ({ category }) => {
  return (
    <div className="z-0 w-[500px]  text-white bg-neutral-900 rounded-2xl border  border-neutral-600 mx-auto">
      <Link to={category.link}>
        <div className="relative overflow-hidden group cursor-pointer">
          <div>
            <div className="">
              <img
                className="h-full w-full object-cover group-hover:scale-105 duration-300 border-b-4 border-neutral-500"
                src={category.image}
                style={{ width: "500px", height: "350px" }}
                alt="image"
              />
            </div>
          </div>
          <div className="flex justify-start flex-col my-4 p-4">
            <h1 className="text-3xl ">{category.name}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCards;
