"use client"
import React from "react";
// import logo from "logo.svg.png"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
    const pathName = usePathname()
    const navLink = <>
    <Link href="/" className={`n-link   ${pathName === "/" && 'border-b-2 border-white  '}`}>Home <span className="n-s-link "> </span></Link>
    <Link href="/" className={`n-link  ${pathName === "#" && 'border-b-2 border-white  '}`}>Listing <span className="n-s-link "> </span></Link>
    <Link href="/" className={`n-link  ${pathName === "#" && 'border-b-2 border-white  '}`}>Members <span className="n-s-link "> </span></Link>
    <Link href="/" className={`n-link  ${pathName === "#" && 'border-b-2 border-white  '}`}>Blog <span className="n-s-link "> </span></Link>
    <Link href="/" className={`n-link  ${pathName === "#" && 'border-b-2 border-white  '}`}>Pages <span className="n-s-link "> </span></Link>
    
    
  
    </>
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><Image className="px-2 py-4" src="/logo.svg.png" width={138} height={44} alt="logo"/></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 -mb-5">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end ">
            <FaRegUserCircle size={19}/>
          <div className="ml-3 mr-[29.50px] font-semibold text-[#ffffff] text-[14px]"><Link href="#">LogIn</Link> / <Link href="#">Register</Link></div>
          <Link href="#" className="btn w-[173.14px] h-[46.59px] bg-[#ffffff] text-[#181A20] rounded-[12px]">Add Property <Image src="/arrow-Icon.png" width={14} height={14} alt="arrow-icon" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
