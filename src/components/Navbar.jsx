import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="text-white bg-black shadow-sm shadow-violet-400 fixed w-full top-0 z-50">
        <div className="flex items-center  justify-between px-10 py-6 w-[80%] mx-auto ">
          <div>
            <h1 className="text-4xl bg-gradient-to-r from-zinc-300 via-pink-500 to-violet-600 text-transparent bg-clip-text">
              News-Hub
            </h1>
          </div>
          <div className="lg:flex justify-center items-center gap-10 text-2xl hidden">
            <Link to="/" className="hover:text-violet-400">
              Home
            </Link>

            <Link to="contact" className="hover:text-violet-400 ">
              Contact
            </Link>
            <Link to="news" className="hover:text-violet-400">
              News
            </Link>
          </div>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="w-14 h-14 rounded-[50%] fixed right-6 top-6 border-none bg-transparent text-white cursor-pointer lg:hidden block "
          >
            <motion.div className="flex flex-col items-center justify-center gap-2">
              <motion.div
                className=" border-[2px] w-[40px] rounded-lg border-white "
                animate={open ? { rotate: 45, y: 4 } : { rotate: 0 }}
              ></motion.div>
              <motion.div
                className="border-[2px] w-[40px]   rounded-lg border-white "
                animate={open ? { opacity: 0 } : { opactiy: 1 }}
              ></motion.div>
              <motion.div
                className="border-[2px] w-[40px] rounded-lg border-white"
                animate={open ? { rotate: -45, y: -18 } : { rotate: 0 }}
              ></motion.div>
            </motion.div>
          </button>
        </div>
      </nav>
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
