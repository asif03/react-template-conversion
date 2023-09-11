import React from "react";
import logo from "../assets/images/boostx-logo-white.png";

const About = () => {
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 174, 165, 0.35) 0%, rgba(250, 251, 255, 1) 100%)",
        }}
      >
        <div className="container mx-auto px-8 lg:px-12">
          <h1 className="pt-20 font-mono text-black font-extrabold text-6xl">
            About
          </h1>
          <p className="pt-10 lg:px-48 px-8 pb-20 text-gray-600 font-normal text-lg font-mono">
            BoostX provides its community with fair access to exclusive
            early-stage presale opportunities, allowing you to acquire
            highly-anticipated tokens before they hit the market; while
            simultaneously giving innovative projects the ability to crowdsource
            funding and build a strong and loyal community in the process. Using
            our game changing presale dashboard technology and extensive
            marketing experience, BoostX successfully facilitates the launches
            of multiple high quality blockchain projects.
          </p>
        </div>
      </div>
      <div style={{ backgroundColor: "#00AEA5" }} className="py-5">
        <div className="w-full min-h-min bg-contain bg-no-repeat bg-center bg-[url('./assets/images/bg-logo.png')]">
          <div className="container mx-auto px-8 lg:px-12 flex flex-col items-center py-16">
            <img src={logo} alt="Logo" width={310} height={120} />
            <p className="text-white font-semibold text-xl lg:px-96 px-8">
              BoostX is a multi-chain launchpad enabling projects to raise
              capital, market effectively and ensure the safety of early
              investors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
