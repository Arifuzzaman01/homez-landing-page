import React from "react";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <div
      className="max-w-[1920px] max-h-[900px] h-screen"
      style={{
        backgroundImage: "url('/banner-images.png')",
       
      }}
    >
      <Navbar />
    </div>
  );
};

export default Banner;
