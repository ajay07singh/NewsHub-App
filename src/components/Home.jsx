import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" flex justify-center items-center h-[100vh] text-white">
      <div className="flex md:flex-row flex-col items-center  w-[90%] mx-auto">
        <div className=" flex flex-col justify-center items-center gap-16 w-1/2">
          <h1 className="md:text-7xl text-5xl text-center selection:text-cyan-400">
            Get Your Daily News Here!
          </h1>
          <div className="relative">
            <div className="absolute top-1/2 md:-left-[34%] -left-[37%] border-b w-16"></div>
            <Link to="/news">
              <button className=" hover:bg-neutral-700 duration-300 border px-10 py-1 md:text-2xl text-xl">
                Get News
              </button>
            </Link>
            <div className="absolute top-1/2 md:-right-[34%] -right-[36%] border-b w-16"></div>
          </div>
        </div>
        <div className="w-2/3">
          <img className="" src="hero3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
