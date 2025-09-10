import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";

const BannerCard = () => {
  return (
    <div className="w-[1100px] mx-auto shadow-2xl">
      <div className="w-[300px] h-[54px] bg-[#ffffff] rounded-t-[12px] flex justify-between p-2 text-center text-[#181A20]">
        <div>
          <p className="px-2 py-4 ">All</p>
        </div>
        <div>
          <p className="px-2 py-4 ">For Sales</p>
        </div>
        <div>
          {" "}
          <p className="px-2 py-4 ">For Rent</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-x-4 w-full mx-auto h-[99px] bg-[#ffffff] rounded-b-[12px] rounded-tr-[12px] text-[#181A20] px-5 py-[22px]">
        <div className="px-2 py-4 space-y-1 col-span-2">
          <p className="font-semibold">Search</p>
          <input
            type="text"
            placeholder="enter Keywords"
            className="text-[#6C757D] placeholder-[#6C757D] placeholder-opacity-100"
          />
        </div>

        <div className="px-2 py-4 space-y-1">
          <p className="font-semibold">Looking For</p>
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="type"
              className="placeholder-[#181A20] placeholder-opacity-100 placeholder:text-sm"
            />
            <span className="w-2 h-[5px] bg-black block right-0"></span>
          </div>
        </div>

        <div className="px-2 py-4 space-y-1">
          <p className="font-semibold">Location</p>
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Location"
              className="placeholder-[#181A20] placeholder-opacity-100 placeholder:text-sm"
            />
            <span className="w-2 h-[5px] bg-black block right-0"></span>
          </div>
        </div>

        <div className="px-2 py-4 space-y-1">
          <p className="font-semibold">Price</p>
          <div className="flex justify-between items-center">
            <h6 className="text-[#181A20]">$0</h6>
            <span className="w-2 h-0.5 bg-black block right-0"></span>
            <h6 className="text-[#181A20]">$5,800</h6>
          </div>
        </div>

        <div className="flex justify-end items-center gap-6 col-span-2">
          <div className="flex gap-2">
            <Image src="/vector.png" width={16} height={0} alt="vector" />
            <p>Advanced</p>
          </div>
          <button className="flex items-center w-[127px] h-[54px] rounded-[8px] btn py-3 px-4 bg-[#EB6753] text-[15px] text-white">
            <IoSearch size={18} /> <span> Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
