import React, { useState } from "react";
import logo from "../../assets/images/boostx-logo.svg";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="container mx-auto px-2 lg:px-12 flex flex-row justify-between items-center pt-5">
      <div className="w-1/3 justify-start">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <ul className="w-1/3 text-gray-600 font-medium text-sm font-mono flex flex-row justify-start items-center hidden lg:block">
        <li className="inline-block px-7">
          <Link className="flex flex-row p-2" to="/">
            Feature
          </Link>
        </li>
        <li className="inline-block px-7">
          <Link to="/faqs">FAQs</Link>
        </li>
        <li className="inline-block px-7">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="w-1/3 flex flex-row justify-end items-center hidden lg:block">
        <a
          className="text-gray-600 font-medium text-sm font-mono mx-7"
          href="#"
        >
          Sign In
        </a>
        <button className="bg-sky-400 rounded-lg font-medium text-sm h-12 px-5">
          Start Free
        </button>
      </div>
      <div className="flex flex-row justify-end items-center block lg:hidden">
        {toggleMenu ? (
          <RiCloseLine onClick={() => setToggleMenu(false)}></RiCloseLine>
        ) : (
          <RiMenuLine onClick={() => setToggleMenu(true)}></RiMenuLine>
        )}
      </div>

      {toggleMenu && (
        <div className="toggle-navbar bg-red-300 px-2 py-2 rounded-lg  flex flex-col justify-end items-end">
          <ul className="w-full text-gray-600 font-medium text-sm font-mono flex flex-col text-right">
            <li className="inline-block p-1 hover:bg-yellow-200 hover:rounded-lg pl-5">
              <Link to="/">Feature</Link>
            </li>
            <li className="inline-block p-1 hover:bg-yellow-200 hover:rounded-lg pl-5">
              <Link to="/faqs">FAQs</Link>
            </li>
            <li className="inline-block p-1 hover:bg-yellow-200 hover:rounded-lg pl-5">
              <Link to="/about">About</Link>
            </li>
          </ul>
          <a
            className="text-gray-600 font-medium text-sm font-mono mt-2"
            href="#"
          >
            Sign In
          </a>
          <button className="bg-sky-400 rounded-lg font-medium text-sm h-12 px-5 mt-2">
            Start Free
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
