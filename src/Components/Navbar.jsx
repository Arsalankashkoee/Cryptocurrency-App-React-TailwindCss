import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/">
      <div className="flex justify-center items-center gap-3 mt-3">
        <FaCoins className="text-3xl text-[#6900ff]" />
        <h1 className="text-2xl font-bold">
          Coin <span className="text-[#6900ff]">Search</span>
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
