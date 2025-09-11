import React from "react";
import Navbar from "./Navbar";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <div
      className=" max-h-[900px] h-screen relative "
      style={{
        backgroundImage: "url('/banner-images.png')",
      }}
    >
      <div className="max-w-[1200px] mx-auto ">
        <Navbar />
        <div className=" absolute -bottom-12 ">
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
