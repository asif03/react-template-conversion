import React from "react";
import distribution from "../../assets/images/distribution.png";
import telegram from "../../assets/images/telegram-alt.png";
import globe from "../../assets/images/globe.png";
import info from "../../assets/images/info-circle.png";

const Project = (props) => {
  return (
    <div className="lg:w-1/2 w-full bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col text-gray-500">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row pt-3">
            <img src={props.img} alt={props.title} width={120} height={120} />
            <div className="flex flex-col pl-4 items-start pt-2">
              <h6 className="text-sky-600 text-sm">Sale ended on April 08</h6>
              <h1 className="text-black font-extrabold text-3xl py-2">
                {props.title}
              </h1>
              <h5 className="font-semibold text-lg">{props.subtitle}</h5>
            </div>
          </div>
          <div className="flex flex-row">
            <button className="rounded-lg border border-gray-300 p-1 h-10 mr-1">
              <img src={globe} alt="Globe" />
            </button>
            <button className="rounded-lg border border-gray-300 p-1 h-10">
              <img src={info} alt="Distribution" />
            </button>
          </div>
        </div>
        <p className="text-left text-lg py-3">
          Seesaw Protocol has successfully launched on the Binance Chain
        </p>
        <p className="text-left flex items-start py-2">
          <img src={distribution} alt="Distribution" width={21} height={21} />
          <span className="pl-1 text-base">
            Distribution and launch on BNB chain
          </span>
        </p>
        <p className="text-left flex items-start py-2">
          <img src={telegram} alt="Distribution" width={21} height={21} />
          <span className="pl-1 text-base">Projects Official Telegram</span>
        </p>
        <div className="w-full flex flex-row justify-between pt-2">
          <button className="bg-sky-400 rounded-lg font-medium text-sm text-white h-12 px-5">
            Enter Presale
          </button>
          <div className="flex flex-col items-end">
            <span className="text-gray-600">Presale launch</span>
            <span className="text-sky-500 text-lg font-bold">
              11 ATI = $0.006667
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
