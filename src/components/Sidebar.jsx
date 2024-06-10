import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Sidebar = ({ open, setOpen }) => {
  const sideVariants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    close: {
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center  bg-white text-white lg:hidden "
      animate={open ? "open" : "close"}
    >
      <motion.div
        className="fixed top-20 right-0 bottom-0
         w-full h-[50vh]  backdrop-blur-xl shadow-sm shadow-violet-400  z-50"
        variants={sideVariants}
      >
        <div className="absolute flex flex-col w-[100%] h-[100%] justify-center items-center gap-6 text-white text-4xl">
          <Link
            to="/"
            className="hover:text-violet-400"
            onClick={() => setOpen((prev) => !prev)}
          >
            Home
          </Link>

          <Link
            to="/contact "
            className="hover:text-violet-400"
            onClick={() => setOpen((prev) => !prev)}
          >
            Contact
          </Link>
          <Link
            to="/news"
            className="hover:text-violet-400"
            onClick={() => setOpen((prev) => !prev)}
          >
            News
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
