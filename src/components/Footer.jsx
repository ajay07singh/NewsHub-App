import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="z-10 relative flex flex-col   items-center text-white bg-neutral-800  mt-40 pb-10">
      <div className="-z-50 absolute -top-20 flex flex-col md:flex-row justify-center items-center rounded-[50px] bg-indigo-400/100 max-w-[70%] w-[90%] md:h-[200px] h-[200px] px-4">
        <p className="text-white md:text-4xl text-2xl p-10">
          What would you like to read?{" "}
        </p>
        <button className="bg-white md:w-[250px] md:h-[50px] w-[150px] rounded-xl py-2 px-4 text-indigo-400/100 md:text-2xl font-bold">
          <Link to="/news">Get Started</Link>
        </button>
      </div>
      <div className="flex  mt-48">
        <div className="flex flex-col items-center md:flex-row md:items-start lg:gap-36 gap-5 px-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h1 className="text-4xl bg-gradient-to-r from-zinc-300 via-pink-500 to-violet-600 text-transparent bg-clip-text">
              NEWS-HUB
            </h1>
            <p className="text-lg">Get News From All Over The World</p>
          </div>
          <div className="flex flex-col gap-4 ">
            <h1 className="text-3xl ">Quick Links</h1>
            <div className="flex flex-col items-center md:items-start gap-4 text-lg text-neutral-400">
              <Link to="/" className="hover:text-indigo-500/100">
                Home
              </Link>
              <Link to="/news" className="hover:text-indigo-500/100">
                News
              </Link>
              <Link to="/contact" className="hover:text-indigo-500/100">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl">Legal</h1>
            <div className="flex flex-col items-center md:items-start  gap-4 text-lg text-neutral-400 ">
              <Link to="/" className="hover:text-indigo-500/100">
                Home
              </Link>
              <Link to="/news" className="hover:text-indigo-500/100">
                News
              </Link>
              <Link to="/contact" className="hover:text-indigo-500/100">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <h1 className="text-3xl">GET IN TOUCH</h1>
            <p className="flex items-center gap-2 cursor-pointer text-neutral-400 hover:text-indigo-500/100 text-xl">
              <FaEnvelope />
              abcabc@mail.com
            </p>
          </div>
        </div>
      </div>
      <p className="mt-28">Copyright © 2024 Ajay</p>
    </div>
  );
};

export default Footer;
