import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import Magnifying from "../assets/Magnifying.svg";
import cart from "../assets/cart.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Main Navbar */}
      <div className="flex items-center justify-evenly mt-[8.42vh] px-2 lg:px-8 ">
        {/* Logo */}
        <div className="cursor-pointer ">
          <img
            src={Logo}
            alt="Logo"
            className="  lg:w-[16.87vw] md:w-[25.32vw] w-[40vw] "
          />
        </div>

        {/* Nav Div */}
        <div className=" hidden lg:flex items-center gap-8 font-Abel">
          <a href="#" className="text-[1.14vw] hover:text-gray-700">
            Home
          </a>
          <a href="#" className="text-[1.14vw] hover:text-gray-700">
            Menu
          </a>
          <a href="#" className="text-[1.14vw] hover:text-gray-700">
            Services
          </a>
          <a href="#" className="text-[1.14vw] hover:text-gray-700">
            Delivery
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center lg:gap-[2.5vw] md:[2.2vw] gap-[1.87vw] mx-[1vw]">
          <div>
            <img
              src={Magnifying}
              alt="Search"
              className="cursor-pointer hover:opacity-75 lg:w-[4.29vw] md:w-[5.8vw] w-[8vw]"
            />
          </div>
          <div>
            <img
              src={cart}
              alt="Cart"
              className="cursor-pointer hover:opacity-75 lg:w-[4.29vw] md:w-[5.8vw] w-[8vw]"
            />
          </div>
          {/* Toggle Menu */}
          <div className=" lg:hidden flex items-center mr-[2vw]">
            <button
              onClick={toggleMenu}
              className="text-[5.5vw] cursor-pointer focus:outline-none"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white shadow-md font-Abel z-10">
          <ul className="flex flex-col items-start gap-4 p-4">
            <a href="#" className="text-[4.14vw] hover:text-gray-700 w-full">
              <li>Home</li>
            </a>
            <a href="#" className="text-[4.14vw] hover:text-gray-700 w-full">
              <li>Menu</li>
            </a>
            <a href="#" className="text-[4.14vw] hover:text-gray-700 w-full">
              <li>Services</li>
            </a>
            <a href="#" className="text-[4.14vw] hover:text-gray-700 w-full">
              <li>Delivery</li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
