"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const TrustedClients = () => {
  const clients = [
    { id: 1, name: "Amazon", logoUrl: "https://i.ibb.co.com/fz0cCNJV/0543ad1993926380319a79a891b6dcba85c621ec.jpg" },
    { id: 2, name: "AMD", logoUrl: "https://i.ibb.co.com/q35cTJSz/50f25ddd1c8497b7edc1931ac79b02ab7c4ed54c.jpg" },
    { id: 3, name: "Cisco", logoUrl: "https://i.ibb.co.com/M5g5fpm5/b13ed1bf178f4e39e8cae9d607c906f7ba19d543.jpg" },
    { id: 4, name: "Dropcam", logoUrl: "https://i.ibb.co.com/d45K3q5Q/9b08f71cf9c632849cb2ed696db70386cb15cf87.jpg" },
    { id: 5, name: "Logitech", logoUrl: "https://i.ibb.co.com/1tXhh2Kd/4f5860e9db08b8670314f1aa8ed92e3235891cf0.jpg" },
    { id: 6, name: "Spotify", logoUrl: "https://i.ibb.co.com/hpPzwRF/a5d7bb0bf3eb1ee711a3140680216612151107f9.jpg" },
    { id: 7, name: "Microsoft", logoUrl: "https://i.ibb.co.com/fz0cCNJV/0543ad1993926380319a79a891b6dcba85c621ec.jpg" },
    { id: 8, name: "Apple", logoUrl: "https://i.ibb.co.com/M5g5fpm5/b13ed1bf178f4e39e8cae9d607c906f7ba19d543.jpg" },
  ];

  return (
    <section className="">
      <div className=" mt-28 mx-auto text-center mb-8">
        <p className="text-gray-500 text-sm">Trusted by the world's best</p>
      </div>

      {/* Marquee */}
      <Marquee 
        gradient={false} 
        speed={50} 
        pauseOnHover={true}
        className="space-x-12"
      >
        {clients.map((client) => (
          <div 
            key={client.id} 
            className="mx-8 flex items-center justify-center"
          >
            <img
              src={client.logoUrl}
              alt={client.name}
              className="h-9 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default TrustedClients;
