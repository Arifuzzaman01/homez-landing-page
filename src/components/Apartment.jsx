"use client";
import React from "react";
import Image from "next/image";

const Apartment = () => {
  const types = [
    {
      id: 1,
      title: "Houses",
      properties: "7 Properties",
      image: "https://i.ibb.co.com/8DMQMHvJ/type1-jpg.png",
      span: "col-span-2", // বড় করার জন্য
    },
    {
      id: 2,
      title: "Apartments",
      properties: "3 Properties",
      image: "https://i.ibb.co.com/QjpZj4XB/type2-jpg.png",
    },
    {
      id: 3,
      title: "Office",
      properties: "4 Properties",
      image: "https://i.ibb.co.com/Lz1ySWZH/type3-jpg.png",
    },
    {
      id: 4,
      title: "Townhome",
      properties: "2 Properties",
      image: "https://i.ibb.co.com/35k5j2W6/type4-jpg.png",
    },
    {
      id: 5,
      title: "Villa",
      properties: "4 Properties",
      image: "https://i.ibb.co.com/rRPKVk39/type5-jpg.png",
    },
    {
      id: 6,
      title: "Bungalow",
      properties: "1 Property",
      image: "https://i.ibb.co.com/VWgKRXBy/type6-jpg.png",
      span: "col-span-2", 
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto py-[100px]  px-4 ">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#181A20]">
          Explore Apartment Types
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          Aliquam lacinia diam quis lacus euismod
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {types.map((type) => (
          <div
            key={type.id}
            className={`relative rounded-xl overflow-hidden group md:${type.span || ""}`}
          >
            <Image
              src={type.image}
              alt={type.title}
              width={600}
              height={400}
              className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>

            {/* Text */}
            <div className="absolute top-4 left-4 text-white">
              <h3 className="text-lg font-semibold">{type.title}</h3>
              <p className="text-sm opacity-90">{type.properties}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apartment;
