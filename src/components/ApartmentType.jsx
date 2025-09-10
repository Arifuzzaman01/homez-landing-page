"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const ApartmentType = () => {
  const properties = [
    {
      id: 1,
      image: "https://i.ibb.co.com/XZdpyjsX/Link-1.png",
      title: "House ",
      price: "$4,600",
      proper: "7"
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/7Jm5z7Dn/Link.png",
      title: "Apartment",
      price: "$5,800",
      proper: "3",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/LXz843Ht/Link-2.png",
      title: "Office",
      price: "$2,500",
      proper: "4",
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/BK7qGQwp/house1.jpg",
      title: "Villa",
      price: "$3,200",
    proper: "4",
    },
    {
      id: 5,
      image: "https://i.ibb.co.com/3y5gS7JS/house2.jpg",
      title: "Townhome",
      price: "$8,900",
      proper: "2",
    },
    
    {
      id: 6,
      image: "https://i.ibb.co.com/7Jm5z7Dn/Link.png",
      title: "Apartment",
      price: "$5,800",
      proper: "3",
    }
  ];

  return (
    <div className="flex justify-center bg-[#F7F7F7] items-center pt-[105px] pb-[70]">
      <div className="w-full max-w-[1200px] px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#181A20]">
              Explore Apartment Types
            </h1>
            <p className="text-[#717171] text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center text-blue-500 font-semibold text-sm hover:underline"
          >
            All Type
            <img src="/arrow-Icon.png" alt="" />
          </a>
        </div>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-[210px] h-[190px]  object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-[#EB6753] text-white text-xs font-bold px-3 py-1 rounded">
                    FEATURED
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-base md:text-lg font-semibold text-[#181A20]">
                    {property.title}
                  </h3>
                  <h5 className="text-gray-700">{property.proper} Properties</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ApartmentType;
