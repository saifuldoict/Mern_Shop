import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import SearchInput from "../SearchInput";
import { IoClose } from "react-icons/io5";

import { Dialog, DialogPanel } from '@headlessui/react'

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#",
  },
  {
    id: 3,
    name: "Contact",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40 ">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2 ">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-xl items-center flex gap-1">
              <FiShoppingBag size="30" className="text-red-500"/>
              Mern <span className="text-red-600">SHop</span>
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <SearchInput/>

            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              <span className="absolute right-75 top-0 w-3.5 h-3.5 text-white text-[12px] flex items-center justify-center bg-primary rounded-full">0</span>
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>

            {/* Menu Icon for Small device*/}
            <button onClick={()=>setIsOpen(true)}  className="text-2xl text-lightText hover:text-primary md:hidden">
              <AiOutlineMenuUnfold className="text-2xl text-lightText hover:text-primary"/>
            </button>
            {/* small device Dialog button*/}
            
             <Dialog open={isOpen}  
             className="relative z-50 md:hidden text-white/80 " 
             onClose={()=>setIsOpen(false)}>
              <div className="fixed inset-0 z-50 w-screen items-center justify-center p-4 bg-black/90">
              <DialogPanel
              transition
              className="absolute max-w-[90%]  space-y-4 bg-black/40 p-6 border border-lightText rounded-md top-10"
                >

                  {/*dialog items*/}
                  <div className="w-[500px] h-[400px] " >
                    <div className="flex items-center justify-between  px-20">
                      <h1 className="text-xl text-white">Navigation Menu</h1>
                     <button onClick={()=>setIsOpen(false)} className="text-white text-2xl hover:text-red-700 duration-300 rounded-md border border-white/40 hover:border border-red-300">
                      <IoClose />
                     </button>
                    </div>
                    <ul>
                      {Menu.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className="inline-block px-4 hover:text-primary h-[1px] duration-200 p-3"
                        >
                          {data.name}
                        </a>
                        
                      </li>
                    ))}
                    {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* Simple Dropdown and Links close */}
                    </ul>
                   
                  </div>
                  
              
            </DialogPanel>
        </div>
      </Dialog>






             {/* login/registration head icon*/}
            <div>
              <FaUserAlt className="text-2xl hover:text-primary"/>
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center ">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* Simple Dropdown and Links close */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
