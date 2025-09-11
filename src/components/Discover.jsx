"use client";
import Image from "next/image";
import React, { useState } from "react";

// Mock data for the properties.
const properties = [
  {
    id: 1,
    title: "Luxury Family Home",
    price: "$5,800",
    beds: 6,
    baths: 2,
    sqft: 400,
    imageUrl: "https://i.ibb.co.com/qFX5XgZ0/Link-7.png",
    type: "sale",
  },
  {
    id: 2,
    title: "Gorgeous Villa Bay",
    price: "$4,800",
    beds: 8,
    baths: 2,
    sqft: 300,
    imageUrl: "https://i.ibb.co.com/GbXLyZn/Link-6.png",
    type: "sale",
  },
  {
    id: 3,
    title: "Skyper Pool Apartment",
    price: "$2,850",
    beds: 4,
    baths: 1,
    sqft: 200,
    imageUrl: "https://i.ibb.co.com/Fkt1G20K/Link-5.png",
    type: "rent",
  },
  {
    id: 4,
    title: "Diamond Manor Apartment",
    price: "$3,500",
    beds: 3,
    baths: 1,
    sqft: 200,
    imageUrl: "https://i.ibb.co.com/pBNCKcNF/Link-4.png",
    type: "rent",
  },
  {
    id: 5,
    title: "Modern Loft",
    price: "$2,100",
    beds: 2,
    baths: 2,
    sqft: 150,
    imageUrl: "https://i.ibb.co.com/63sL9vD/h4.jpg",
    type: "rent",
  },
  {
    id: 6,
    title: "Suburban House",
    price: "$4,500",
    beds: 5,
    baths: 3,
    sqft: 350,
    imageUrl: "https://i.ibb.co.com/Hf3Wf47t/h3.jpg",
    type: "sale",
  },
  {
    id: 7,
    title: "Cozy City Apartment",
    price: "$1,900",
    beds: 1,
    baths: 1,
    sqft: 100,
    imageUrl: "https://i.ibb.co.com/Jj3HcLQX/h2.jpg",
    type: "rent",
  },
  {
    id: 8,
    title: "Lakeside Retreat",
    price: "$7,200",
    beds: 4,
    baths: 3,
    sqft: 500,
    imageUrl: "https://i.ibb.co.com/6RdcfM6C/h1.jpg",
    type: "sale",
  },
];

const Discover = () => {
  const [filter, setFilter] = useState("sale");

  // Filter properties based on the selected type
  const filteredProperties = properties.filter((p) => p.type === filter);

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-20"
      style={{ backgroundColor: "#EB6753" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Title and Filter Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Discover Our Best Deals
            </h2>
            <p className="text-white opacity-80 max-w-xl mx-auto sm:mx-0">
              Aliquam lacinia lacinia diam quis lacus euismod
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setFilter("sale")}
              className={`py-3 px-6 rounded-lg text-lg font-semibold transition-colors duration-300 ${
                filter === "sale"
                  ? "bg-white text-orange-500"
                  : "bg-transparent text-white border-2 border-white"
              }`}
            >
              For Sale
            </button>
            <button
              onClick={() => setFilter("rent")}
              className={`py-3 px-6 rounded-lg text-lg font-semibold transition-colors duration-300 ${
                filter === "rent"
                  ? "bg-white text-orange-500"
                  : "bg-transparent text-white border-2 border-white"
              }`}
            >
              For Rent
            </button>
          </div>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-[12px]   overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full h-48">
                <Image
                  src={property.imageUrl}
                  fill
                  className="object-cover "
                  alt={property.title}
                />
              </div>
              <div className="px-5 py-2 flex flex-col justify-between ">
                <h3 className="text-[17px] font-bold grow mb-2 text-gray-800">
                  {property.title}
                </h3>
                <div className="flex  justify-between items-center text-gray-500 text-sm">
                  <p className="text-orange-500 font-bold ">{property.price}</p>
                  <div className="flex items-center">
                    <span className="mr-1">🛏️</span> {property.beds}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1">🛁</span> {property.baths}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1">📏</span> {property.sqft}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
