"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-16 px-4 md:px-20 ">
      <div className="max-w-[1200px] mx-auto">
        <section className="max-w-xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
          Subscribe Our Newsletter
        </h2>
        <p className="text-white text-opacity-80 mb-6">
          We don't send spam so don't worry.
        </p>
        <div className=" relative max-w-[520px]">
          <input
            type="email"
            placeholder="Your email"
            className="w-full py-[25px] pl-[30px] pr-[168px] rounded-[12px] bg-[#FFFFFF] text-black text-sm"
          />
          <button className="absolute top-1 right-1 bg-[#EB6753] py-[18px] px-[31px] rounded-[12px] text-white">
            Subscribe
          </button>
        </div>
      </section>
      <section className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 py-[50px]">
        <nav className="text-white">
          <header className="footer-title">
            <div className="flex items-center">
              <Image
                src="/logo.svg.png" // Replace with your logo path
                alt="Homez Logo"
                width={138}
                height={44}
              />
            </div>
          </header>
          <div className="mt-10">
            <p className="font-semibold">Address</p>
            <p>
              789 Queensberry Street, North
              <br />
              Melbourne VIC 3051, Australia.
            </p>
          </div>
          <div className="mt-8">
            <p className="font-semibold">Total Free Customer Care</p>
            <p className="pt-3">+(088) 123 456 789</p>
          </div>
          <div className="mt-9">
            <p className="font-semibold">Live Support?</p>
            <p className="pt-3">hi@homez.com</p>
          </div>
        </nav>

        {/* Popular Search Section */}
        <nav className="flex flex-col gap-3">
          <header className="text-[18px]font-bold text-white">
            Popular Search
          </header>
          <a className="link link-hover">Apartment for Sale</a>
          <a className="link link-hover">Apartment for Rent</a>
          <a className="link link-hover">Offices for Sale</a>
          <a className="link link-hover">Offices for Rent</a>
        </nav>

        {/* Quick Links Section */}
        <nav className="flex flex-col gap-3">
          <header className="text-[18px]font-bold text-white">
            Quick Links
          </header>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Pricing Plans</a>
          <a className="link link-hover">Our Services</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">FAQs</a>
        </nav>

        {/* Apps Section */}
        <nav>
          <header className="text-[18px]font-bold text-white">Apps</header>
          <a
            href="#"
            className="flex items-center gap-2 p-4 rounded-lg bg-[#272B31] my-5"
          >
            <FaApple size={24} className="text-white" />
            <div className="text-sm">
              <p>Download on the</p>
              <p className="font-bold">Apple Store</p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 mt-4 p-4 rounded-lg bg-[#272B31]"
          >
            <FaGooglePlay size={24} className="text-white" />
            <div className="text-sm">
              <p>Get in on</p>
              <p className="font-bold">Google Play</p>
            </div>
          </a>
        </nav>
      </section>
      <section className="flex justify-between items-center">
        <aside className="text-white">
          <p>© Homez - All right reserved</p>
        </aside>
        <aside className="text-white flex gap-8">
            <h4 className="text-white font-semibold text-[15px]">Follow Us</h4>
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaTwitter /> </Link>
            <Link href="#"><FaInstagramSquare /></Link>
            <Link href="#"><FaLinkedinIn /></Link>
        </aside>
      </section>
      </div>
    </footer>
  );
};

export default Footer;
