import React from "react";

const ButtonPrimary = ({ children }) => {
  return (
    <button className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg hover:shadow-orange-md transition-all outline-none border-4 border-black-500  bg-blue-400 ">
      {children}xx
    </button>
  );
};

export default ButtonPrimary;
