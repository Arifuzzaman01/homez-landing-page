"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaHome, FaKey, FaBullhorn } from "react-icons/fa";

export default function Help() {
  const cards = [
    {
      id: 1,
      img: "https://i.ibb.co.com/LXGxvcqP/icon1-svg-fill.png",
      title: "Buy a property",
      desc: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      button: "Find a home",
      outline: true,
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/mFNfbwYR/icon2-svg.png",
      title: "Sell a property",
      desc: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      button: "Place an ad",
      outline: false,
    },
    {
      id: 3,
      img: "https://i.ibb.co.com/Ngm4KCsb/icon3-svg-fill.png",
      title: "Rent a property",
      desc: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      button: "Find a rental",
      outline: true,
    },
  ];

  return (
    <section className="bg-[#EB67531A] pt-[115px] pb-[100px]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#181A20]">
          See How Realtor Can Help
        </h2>
        <p className="text-gray-600 mt-2 mb-10">
          Aliquam lacinia diam quis lacus euismod
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              animate={{
                y: index === 1 ? [0, 20, 0] : [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 hover:bg-gradient-to-br from-[#EB6753] to-white"
            >
              <Image src={card.img} width={90} height={90} alt="abc" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800 ">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6">{card.desc}</p>
              <button
                className={`px-6 py-2 rounded-lg font-medium transition flex gap-1 items-center ${
                  card.outline
                    ? "border border-[#EB6753] text-[#181A20] hover:bg-[#EB6753] hover:text-white"
                    : "bg-[#EB6753] text-white hover:bg-[#d85d4a]"
                }`}
              >
                {card.button}{" "}
                <img className="w-4 h-4" src="/arrow-Icon.png" alt="" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
