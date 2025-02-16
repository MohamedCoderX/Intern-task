import React from "react";

const Header = ({ details, index, fade }) => {
  return (
    <div className="flex justify-center items-center min-h-[80vh] px-6 md:px-12">
      <div
        className={`w-full max-w-full sm:max-w-lg md:max-w-3xl transition-all duration-700 ease-in-out transform ${
          index === 0 ? "text-center md:text-left" : "text-center"
        }`}
      >
        {/* Smooth Text Transition */}
        <h2
          className={`text-white text-3xl sm:text-4xl md:text-6xl font-bold leading-tight transition-all duration-700 ease-in-out transform ${
            fade ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
          }`}
        >
          {details[index].text}
        </h2>
        <h4
          className={`text-white py-3 text-lg sm:text-xl md:text-3xl transition-all duration-700 ease-in-out transform ${
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
