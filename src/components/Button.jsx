"use client"
import React from "react";

const Button = ({btnDes,nav}) => {
  return (
    <div>
      <div className="relative overflow-hidden rounded-md group">
        <button className={`relative flex items-center gap-1 z-10 w-full sm:w-auto px-8 py-3 bg-transparent ${nav ? 'text-black':'text-white'} font-semibold rounded-md border-2 border-white transition-colors duration-500 ease-in-out group-hover:text-white group-hover:bg-[#FF674D] group-hover:border-[#FF674D]`}>
         {btnDes}
          {
            nav === true ? <img src="/arrow-Icon.png" className="w-3 h-3" alt="" />:<img src="/white-arrow.png" className="w-5 h-5" alt="" />
          }
         
        </button>
        <span className="absolute inset-0 bg-[#FF674D] transition-all duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-0"></span>
      </div>
    </div>
  );
};

export default Button;
