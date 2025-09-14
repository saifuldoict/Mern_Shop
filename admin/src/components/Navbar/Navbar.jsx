 import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";






const Navbar = () => {
    
  return (
    <header className="container sticky border-b border-gray-600 w-full top-0 left-0 z-50">
      <div >
            <a href="#" className="font-bold text-xl items-center flex gap-1">
              <FiShoppingBag size="30" className="text-red-500"/>
              Mern <span className="text-red-600">SHop</span>
            </a>
          </div>
   
    </header>
  );
};

export default Navbar;
