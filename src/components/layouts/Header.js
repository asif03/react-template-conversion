import React from "react";
import rocket from "../../assets/images/rocket.svg";

const Header = () => {
  return (
    <div className="w-full h-auto bg-contain bg-no-repeat bg-right bg-[url('./assets/images/illustration.png')]">
      <div className="container mx-auto px-8 lg:px-12 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full flex flex-col pt-7 items-center">
          <h1 className="text-black font-mono font-extrabold lg:text-left text-center text-7xl">
            Premium Launchpad Technology
          </h1>
          <p className="text-gray-600 font-mono font-normal lg:text-left text-center text-lg pt-7">
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </p>
          <div className="w-full flex flex-col lg:items-start items-center pt-7">
            <button className="bg-sky-400 rounded-lg font-medium text-sm h-12 px-5">
              Launch your Projects
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-auto grid justify-items-center lg:pt-2 pt-7">
          <img src={rocket} width={546} height={522} alt="Rocket" />
        </div>
      </div>
    </div>
  );
};

export default Header;
