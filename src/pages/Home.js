import React from "react";
import "../App.css";
import Header from "../components/layouts/Header";
import Feature from "../components/features/Feature";
import Projects from "../components/projects/Projects";
import logobg from "../assets/images/bg-logo.png";

const Home = () => {
  return (
    <div className="App-header">
      <Header />
      <Feature />
      <Projects />
      <div
        style={{ backgroundColor: "#00AEA5" }}
        className="w-full flex lg:flex-row flex-col"
      >
        <div className="lg:w-1/2 w-full lg:container lg:mx-auto px-8 lg:px-16 pl-8 flex flex-col justify-items-center py-7">
          <h1 className="lg:text-left text-center font-extrabold text-5xl">
            Bringing Investors and High Quality Projects Together
          </h1>
          <p className="text-white font-normal lg:text-left text-center text-xl pt-5">
            Boostx provides its community with fair access to exclusive
            early-stage presale opportunities, allowing you to acquire
            highly-anticipated tokens before they hit the market; while
            simultaneously giving innovative projects the ability to crowdsource
            funding and build a strong and loyal community in the process. Using
            our game changing presale dashboard technology and extensive
            marketing experience, boostx successfully facillitates the launches
            of multiple high quality blockchain projects.
          </p>
        </div>
        <div className="lg:w-1/2 w-full py-5 min-h-min bg-contain bg-no-repeat bg-right bg-[url('./assets/images/nest-bg.png')]">
          <div className="container mx-auto px-8 flex items-center">
            <img src={logobg} alt="Big Logo" width={380} height={460} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
