"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Feature = () => {
  const properties = [
    {
      id: 1,
      image: "https://i.ibb.co.com/XZdpyjsX/Link-1.png",
      title: "House on the Hollywood",
      price: "$4,600",
      beds: 6,
      baths: 2,
      area: 200,
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/7Jm5z7Dn/Link.png",
      title: "Comfortable Villa Green",
      price: "$5,800",
      beds: 9,
      baths: 3,
      area: 600,
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/LXz843Ht/Link-2.png",
      title: "Quality House For Sale",
      price: "$2,500",
      beds: 10,
      baths: 2,
      area: 500,
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/BK7qGQwp/house1.jpg",
      title: "Modern City Apartment",
      price: "$3,200",
      beds: 2,
      baths: 2,
      area: 150,
    },
    {
      id: 5,
      image: "https://i.ibb.co.com/3y5gS7JS/house2.jpg",
      title: "Luxury Hillside Mansion",
      price: "$8,900",
      beds: 8,
      baths: 6,
      area: 1200,
    },
  ];

  return (
    <div className="flex justify-center bg-[#F7F7F7] items-center py-[169px]">
      <div className="w-full max-w-[1170px] px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#181A20]">
              Discover Our Featured Listings
            </h1>
            <p className="text-[#717171] text-sm md:text-base">
              Aliquam lacinia diam quis lacus euismod
            </p>
          </div>
          <a
            href="#"
            className="flex items-center text-blue-500 font-semibold text-sm hover:underline"
          >
            See All Properties
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
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
                    className="w-full h-48 md:h-56 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-[#EB6753] text-white text-xs font-bold px-3 py-1 rounded">
                    FEATURED
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-base md:text-lg font-semibold text-[#181A20]">
                    {property.title}
                  </h3>
                  <div className="flex  justify-between">
                    <p className="text-[#EB6753] font-bold text-lg">
                      {property.price}
                    </p>
                    <div className="flex gap-7">
                      <div className="flex items-end">
                        <img src="/icon.png" width={35} alt="" />
                        <p className="text-black">{property.beds}</p>
                      </div>
                      <div className="flex items-end">
                        <img src="/icon.png" width={35} alt="" />
                        <p className="text-black">{property.baths}</p>
                      </div>
                      <div className="flex items-end">
                        <img src="/icon.png" width={35} alt="" />
                        <p className="text-black">{property.area}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feature;
