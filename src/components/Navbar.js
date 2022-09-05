/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={Logo} alt="logo" className="w-10 h-10" />
            <span className="ml-3 text-xl">Galenka</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to="/about" className="mr-5 hover:text-gray-900">
              About
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
