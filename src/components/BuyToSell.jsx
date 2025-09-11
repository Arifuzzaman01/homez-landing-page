"use client";
import React from "react";
import Button from "./Button";

const BuyToSell = () => {
  return (
    <div className="relative flex justify-center w-full  md:max-h-[440px] lg:max-h-[588px] mx-auto  px-4">
         <img
          src="/BuyToSell.jpg" // Placeholder for the background image
          alt="Modern interior"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      <div className=" w-full py-[100px] md:py-[150px] lg:py-[185px] rounded-3xl overflow-hidden flex items-center justify-center text-center text-white">
        {/* Background Image with Overlay */}
       
        {/* A semi-transparent overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Content Container */}
        <div className="relative z-20 flex flex-col items-center p-4">
          <p className="text-sm uppercase tracking-widest text-gray-300 font-medium mb-2">
            Buy or Sell
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-12">
            Looking to Buy a new property or sell an existing one? <br /> Homez
            provides an awesome solution!
          </h1>
          

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Submit Property Button */}
            <div className="relative  overflow-hidden rounded-md group">
              <button className="relative flex items-center gap-1 z-10 w-full sm:w-auto px-8 py-3 bg-[#FF674D] text-white font-semibold rounded-md transition-colors duration-500 ease-in-out group-hover:text-[#FF674D] group-hover:border-[#FF674D] group-hover:bg-white border-2 border-transparent">
                Submit Property
                <img src="/white-arrow.png" className="w-5 h-5" alt="" />
              </button>
              <span className="absolute inset-0 bg-white transition-all duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-0"></span>
            </div>

            {/* Browse Properties Button */}
            <Button btnDes="Browse Properties" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyToSell;
