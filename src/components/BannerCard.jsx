import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";

const BannerCard = () => {
  return (
    <div className="max-w-[1170px] w-full mx-auto  px-4">
      {/* Top Tabs */}
      <div className="w-full sm:w-[300px] h-[54px] bg-[#ffffff] rounded-t-[12px] flex justify-between p-2 text-center text-[#181A20] ">
        <div>
          <p className="px-2 py-4 text-sm sm:text-base">All</p>
        </div>
        <div>
          <p className="px-2 py-4 text-sm sm:text-base">For Sales</p>
        </div>
        <div>
          <p className="px-2 py-4 text-sm sm:text-base">For Rent</p>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 w-full mx-auto bg-[#ffffff] rounded-b-[12px] rounded-tr-[12px] text-[#181A20] px-5 py-4 shadow-xl">
        
        {/* Search */}
        <div className="space-y-1 col-span-1 md:col-span-2">
          <p className="font-semibold text-sm sm:text-base">Search</p>
          <input
            type="text"
            placeholder="enter Keywords"
            className="w-full  rounded px-2 py-2 text-sm text-[#6C757D] placeholder-[#6C757D]"
          />
        </div>

        {/* Looking For */}
        <div className="space-y-1">
          <p className="font-semibold text-sm sm:text-base">Looking For</p>
          <div className="flex justify-between items-center  rounded px-2 py-2">
            <input
              type="text"
              placeholder="type"
              className="w-full text-sm placeholder-[#181A20]"
            />
            <span className="w-2 h-[5px] bg-black block ml-2"></span>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-1">
          <p className="font-semibold text-sm sm:text-base">Location</p>
          <div className="flex justify-between items-center  rounded px-2 py-2">
            <input
              type="text"
              placeholder="Location"
              className="w-full text-sm placeholder-[#181A20]"
            />
            <span className="w-2 h-[5px] bg-black block ml-2"></span>
          </div>
        </div>

        {/* Price */}
        <div className="space-y-1">
          <p className="font-semibold text-sm sm:text-base">Price</p>
          <div className="flex justify-between items-center">
            <h6 className="text-[#181A20] text-sm sm:text-base">$0</h6>
            <span className="w-4 h-0.5 bg-black block mx-2"></span>
            <h6 className="text-[#181A20] text-sm sm:text-base">$5,800</h6>
          </div>
        </div>

        {/* Advanced + Search Button */}
        <div className="flex flex-col sm:flex-row justify-end items-center gap-4 col-span-2">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/vector.png" width={16} height={16} alt="vector" />
            <p className="text-sm sm:text-base">Advanced</p>
          </div>
          <button className="flex items-center justify-center w-full sm:w-[127px] h-[44px] sm:h-[54px] rounded-[8px] py-2 px-4 bg-[#EB6753] text-sm sm:text-[15px] text-white">
            <IoSearch size={18} /> <span className="ml-1">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
