import React from "react";
import {
  RiLinkedinFill,
  RiMessengerFill,
  RiTwitterFill,
  RiHaze2Line,
} from "react-icons/ri";
import logo from "../../assets/images/boostx-logo.svg";
import language from "../../assets/images/language.png";

const Footer = () => {
  return (
    <div className="bg-white w-full py-5">
      <div className="container mx-auto px-2 lg:px-12 pt-5">
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-1/4 w-full pt-5 flex items-start">
            <img
              className="pt-1"
              src={language}
              alt="Language"
              width={24}
              height={24}
            />
            <span className="pl-2 font-bold text-2xl pb-2">English</span>
          </div>
          <div className="lg:w-1/2 w-full flex flex-col items-center py-5">
            <img src={logo} alt="Logo" width={168} height={67} />
            <p className="font-normal text-base py-5 text-gray-400">
              BoostX is a multi-chain launchpad enabling projects to raise
              capital, market effectively and ensure the safety of early
              investors.
            </p>
            <div className="flex flex-row text-sky-600">
              <a href="#" className="p-2">
                <RiLinkedinFill></RiLinkedinFill>
              </a>
              <a href="#" className="p-2">
                <RiMessengerFill></RiMessengerFill>
              </a>
              <a href="#" className="p-2">
                <RiTwitterFill></RiTwitterFill>
              </a>
              <a href="#" className="p-2">
                <RiHaze2Line></RiHaze2Line>
              </a>
            </div>
          </div>
          <div className="lg:w-1/4 w-full flex flex-col py-5 pl-5 lg:items-start items-center">
            <h1 className="font-bold text-3xl text-gray-700">Company</h1>
            <a href="#" className="font-normal text-base text-gray-700 py-2">
              Feature
            </a>
            <a href="#" className="font-normal text-base text-gray-700 py-2">
              About
            </a>
            <a href="#" className="font-normal text-base text-gray-700 py-2">
              FAQs
            </a>
          </div>
        </div>
        <hr className="border-gray-100" />
        <div className="text-gray-800 text-base pt-3 font-mono">
          Copyright @ BoostX 2022. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
