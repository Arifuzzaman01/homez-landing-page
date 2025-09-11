"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";

const PeopleRelator = () => {
  const peoples = [
    {
      id: 1,
      image: "/profile1.jpg",
      name: "Ali Tufan",
      title: "Developer",
      price: "$4,600",
      des: "“At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti ”",
    },
    {
      id: 2,
      image: "/profile2.jpg",
      name: "Albert Flores",
      title: "Designer",
      price: "$5,800",
      des: "“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae”",
    },
    {
      id: 3,
      image: "/profile3.jpg",
      name: "Robert Fox",
      title: "Marketing",
      price: "$2,500",
      des: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
    },
    {
      id: 4,
      image: "/profile2.jpg",
      name: "Albert Flores",
      title: "Developer",
      price: "$3,200",
      des: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti ",
    },
    {
      id: 5,
      image: "/profile1.jpg",
      name: "Ali Tufan",
      title: "Designer",
      price: "$8,900",
      des: "“Sed ut perspiciatis unde omnis iste natus error sitvoluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae”",
    },

    {
      id: 6,
      image: "/profile3.jpg",
      name: "Robert Fox",
      title: "Marketing",
      price: "$5,800",
      des: " Et harum quidem rerum facilis est et expeditadistinctio. Nam libero tempore, cum soluta nobis esteligendi optio cumque nihil impedit",
    },
  ];

  return (
    <div className="flex justify-center  items-center pt-[105px] pb-[70]">
      <div className="w-full max-w-[1200px] px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-[50px]">
          <h1 className="text-2xl md:text-3xl text-center font-bold text-[#181A20] p-4">
            People Love Living with Realtor
          </h1>
          <p className="text-[#181A20] text-[14px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          //   slidesPerView={5}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // 3s delay
            disableOnInteraction: false, // keeps autoplay running after interaction
          }}
          breakpoints={{
            0: { slidesPerView: 1 },

            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {peoples.map((people) => (
            <SwiperSlide key={people.id}>
              <div className="card relative border border-[#E9E9E9]  w-full text-black">
                <div className="card-body">
                  <div className="flex gap-5 items-center">
                    <div className="avatar lg:w-14 lg:h-14 w-10 h-10 rounded-b-full">
                      <img src={people.image} className="rounded-full" />
                    </div>
                    <div>
                      <h5 className="text-[14px] text-[#181A20] font-semibold">
                        {people.name}
                      </h5>
                      <p className="text-[13px] text-[#717171]">
                        {people.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#181A20] text-[15px]">{people.des}</p>
                </div>
                <img
                  src="/SVG.png"
                  className="absolute top-5 right-5 w-[37px]"
                  alt="avh"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PeopleRelator;
