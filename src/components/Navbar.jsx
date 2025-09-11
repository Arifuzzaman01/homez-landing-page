"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
  const pathName = usePathname();

  const navLink = (
    <>
      <Link
        href="/"
        className={`n-link ${pathName === "/" && "border-b-2 border-white"}`}
      >
        Home <span className="n-s-link "> </span>
      </Link>
      <Link
        href="#"
        className={`n-link ${pathName === "#" && "border-b-2 border-white"}`}
      >
        Listing <span className="n-s-link "> </span>
      </Link>
      <Link
        href="#"
        className={`n-link ${pathName === "#" && "border-b-2 border-white"}`}
      >
        Members <span className="n-s-link "> </span>
      </Link>
      <Link
        href="#"
        className={`n-link ${pathName === "#" && "border-b-2 border-white"}`}
      >
        Blog <span className="n-s-link "> </span>
      </Link>
      <Link
        href=""
        className={`n-link ${pathName === "#" && "border-b-2 border-white"}`}
      >
        Pages <span className="n-s-link "> </span>
      </Link>
    </>
  );

  return (
    <div className="max-w-[1200px] mx-auto px-4 static top-0">
      <div className="flex justify-between items-center gap-7 py-3">
        {/* Left: Logo & Dropdown */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost p-2">
              <IoMdMenu size={22} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navLink}
              <Link
                href="#"
                className="sm:hidden btn mt-2 w-[173px] h-[46px] bg-[#ffffff] text-[#181A20] rounded-[12px]"
              >
                Add Property
                <Image
                  src="/arrow-Icon.png"
                  width={14}
                  height={14}
                  alt="arrow-icon"
                />
              </Link>
            </ul>
          </div>

          <Logo />
        </div>

        {/* Center: Nav Links (hidden on mobile) */}
        <div className="hidden lg:flex items-center ">{navLink}</div>

        {/* Right: User & Button */}
        <div className="flex items-center gap-2 text-[#ffffff] text-[14px] ml-5">
          <FaRegUserCircle size={18} />
          <Link href="#">LogIn</Link> <span>/</span>
          <Link href="#">Register</Link>
          <Link
            href="#"
            className="hidden sm:flex btn-gradient ml-2  text-[#181A20] rounded-[12px] justify-center items-center"
          >
           <Button btnDes=" Add Property" nav={true}/>
           
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
