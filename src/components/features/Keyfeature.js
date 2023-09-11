import React from "react";

const Keyfeature = (props) => {
  return (
    <div className="key-feature lg:w-1/4 w-full mt-5 lg:mt-0 bg-white rounded-lg flex items-center shadow-lg">
      <div className="w-full flex flex-col items-center">
        <img src={props.image} alt={props.feature} />
        <h3 className="text-gray-900 font-extrabold text-xl font-mono tracking-tighter px-16 pt-2">
          {props.feature}
        </h3>
      </div>
    </div>
  );
};

export default Keyfeature;
