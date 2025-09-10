"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="#" className="btn btn-ghost text-xl -mt-2">
      <Image
        className="px-2 py-4"
        src="/logo.svg.png"
        width={138}
        height={44}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
