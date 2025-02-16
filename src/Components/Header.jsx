import React from "react";

const Header = ({ details, index, fade }) => {
  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4 relative">
      <div className={`text-center max-w-3xl ${index==0? "absolute left-39 text-justify":"text-center"}`}>
        {/* Smooth Text Transition */}
        <h2
          className={`text-white text-4xl md:text-6xl font-bold leading-tight transition-all duration-700 ease-in-out transform ${
            fade ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
          } `}
        >
          {details[index].text}
        </h2>
        <h4
          className={`text-white py-3 text-xl md:text-3xl transition-all duration-700 ease-in-out transform ${
            fade ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
          }`}
        >
          {details[index].name}
        </h4>
      </div>
    </div>
  );
};

export default Header;
