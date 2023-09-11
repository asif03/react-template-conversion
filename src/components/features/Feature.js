import React from "react";
import "./Feature.css";
import Keyfeature from "./Keyfeature";

import badge from "../../assets/images/badge-2.png";
import tag from "../../assets/images/tag.png";
import speedometer from "../../assets/images/speedometer.png";
import diamond from "../../assets/images/diamond.png";

const Feature = () => {
  return (
    <div className="feature w-full">
      <div className="flex flex-col container mx-auto px-2 lg:px-12 pt-5">
        <h1 className="text-black font-mono font-extrabold text-4xl">
          BoostX Key Features
        </h1>
        <p className="px-16 py-3 font-medium text-gray-500">
          Innovative Launchpad Technology created for IDOs with unique features
          designed to boost your project into the stratosphere; live orderbooks,
          dynamic pricing and much more…
        </p>
        <div className="flex lg:flex-row flex-col items-center lg:gap-3 py-5">
          <Keyfeature image={badge} feature="Curated Tokens" />
          <Keyfeature image={tag} feature="Unique Presales" />
          <Keyfeature image={speedometer} feature="Dynamic Dashboards" />
          <Keyfeature image={diamond} feature="High Quality Projects" />
        </div>
        <div className="w-full flex flex-col items-center pt-7 mb-16">
          <button className="bg-sky-400 rounded-lg font-medium text-sm text-white h-12 px-5">
            Launch your Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
