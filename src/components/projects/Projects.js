import React, { useState } from "react";
import Project from "./Project";
import protocol from "../../assets/images/protocol.png";
import firepin from "../../assets/images/firepin.png";
import automish from "../../assets/images/automish-token.png";
import finance from "../../assets/images/finance.png";
import acranup from "../../assets/images/acranup.png";
import aquasis from "../../assets/images/aquasis.png";
import calyxtoken from "../../assets/images/calyxtoken.png";
import explorachain from "../../assets/images/explorachain.png";
import securipoptoken from "../../assets/images/securipoptoken.png";
import parodycoin from "../../assets/images/parodycoin.png";
import pacmanfrog from "../../assets/images/pacmanfrog.png";
import quitriumfinance from "../../assets/images/quitriumfinance.png";
import logirithmic from "../../assets/images/logirithmic.png";

const Projects = () => {
  const [toggleMore, setToggleMore] = useState(false);

  return (
    <div className="bg-sky-100">
      <div className="container mx-auto px-2 lg:px-12 pt-10 flex flex-col">
        <h1 className="font-extrabold font-mono text-black text-4xl tracking-tighter">
          Featured Projects
        </h1>
        <p className="font-medium text-gray-500 font-mono tracking-tighter px-16 pt-2">
          Innovative Launchpad Technology created for IDOs with unique features
          designed to boost your project into the stratosphere; live orderbooks,
          dynamic pricing and much more…
        </p>
        <div className="w-full flex flex-col py-5">
          <div className="w-full flex lg:flex-row flex-col gap-3">
            <Project img={protocol} title="Seesaw Protocol" subtitle="SSW" />
            <Project img={firepin} title="Firepin" subtitle="FRPN" />
          </div>
          <div className="w-full flex lg:flex-row flex-col pt-3 gap-3">
            <Project img={automish} title="Automish Token" subtitle="ATI" />
            <Project img={finance} title="Caprice Finance" subtitle="CFT" />
          </div>

          {toggleMore ? (
            <div>
              <div className="w-full flex lg:flex-row flex-col pt-3 gap-3">
                <Project img={acranup} title="Acranup" subtitle="ACRN" />
                <Project
                  img={aquasis}
                  title="Aquasis Protocol"
                  subtitle="AQS"
                />
              </div>
              <div className="w-full flex lg:flex-row flex-col pt-3 gap-3">
                <Project img={calyxtoken} title="Calyx Token" subtitle="CLX" />
                <Project
                  img={explorachain}
                  title="Explora Chain"
                  subtitle="EXPL"
                />
              </div>
              <div className="w-full flex lg:flex-row flex-col pt-3 gap-3">
                <Project
                  img={securipoptoken}
                  title="Securipop Token"
                  subtitle="SECR"
                />
                <Project img={parodycoin} title="Parody Coin" subtitle="PARO" />
              </div>
              <div className="w-full flex lg:flex-row flex-col pt-3 gap-3">
                <Project img={pacmanfrog} title="Pacman Frog" subtitle="PAC" />
                <Project
                  img={quitriumfinance}
                  title="Quitrium Finance"
                  subtitle="QTM"
                />
              </div>
              <div className="w-full flex lg:flex-row flex-col pt-3 gap-3">
                <Project
                  img={logirithmic}
                  title="Logirithmic Finance"
                  subtitle="LOG"
                />
              </div>

              <div className="py-10">
                <button
                  className="bg-sky-400 rounded-lg font-medium text-sm text-white h-12 px-5"
                  onClick={() => setToggleMore(false)}
                >
                  Show Less
                </button>
              </div>
            </div>
          ) : (
            <div className="py-10">
              <button
                className="bg-sky-400 rounded-lg font-medium text-sm text-white h-12 px-5"
                onClick={() => setToggleMore(true)}
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
