import React from "react";
import Navbar from "./Navbar";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <div
      className="max-w-[1920px] max-h-[900px] h-screen flex flex-col justify-between"
      style={{
        backgroundImage: "url('/banner-images.png')",
       
      }}
    >
      <Navbar />
      <div className="-mb-10">
        <BannerCard/>
      </div>
    </div>
  );
};

export default Banner;
