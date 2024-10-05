"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "@/public/Logo/Valuetainment_logo.svg";
import Image from "next/image";

export default function Navbar() {
  const iconRef = useRef(null);

  useEffect(() => {
    gsap.to(iconRef.current, {
      y: -5,
      x:3,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.in",
    });
  }, []);

  return (
    <header className="bg-red-600 p-4">
      <div className="container mx-auto flex justify-between items-center h-16">
        <div className="text-white text-3xl font-bold flex items-center">
          <span className="mr-2" ref={iconRef}>
            <Image src={logo} alt="Sonne Icon" height={40} width={40} />
          </span>
          <span className="h-10 leading-none">VTMERCH</span>
        </div>
        <button className="text-white text-xl lg:mr-16 lg:mb-5">☰</button>
      </div>
    </header>
  );
}
