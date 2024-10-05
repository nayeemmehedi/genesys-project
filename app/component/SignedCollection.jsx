"use client"
import { useEffect, useRef } from "react";
import { montserrat } from "@/lib/font";
import gsap from "gsap";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import FramerMotion from "@/utlis/FormerMotion";

export default function SignedCollection() {

  const iconRef = useRef(null);
  const iconRef2 = useRef(null);
  const iconRef3 = useRef(null);



  useEffect(() => {
    gsap.to(iconRef.current, {
      y: -14,
      x:8,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.in",
    });
    gsap.to(iconRef2.current, {
      y: -10,
      x:8,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.in",
    });
    gsap.to(iconRef3.current, {
      // y: -10,
      x:5,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.in",
    });
  }, []);


  


  return (
    <section className="relative  bg-black text-white py-16 z-0">
      {/* Main container for text and images */}
      <section className="pt-6 pb-16">
        
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:w-[90%]">
          {/* Left Section with Text */}
          <FramerMotion>
          <div className={`${montserrat.className} text-center lg:text-left`}>
            <div className="w-[85%] lg:w-[70%] mx-auto">
              <p className="text-3xl sm:text-2xl my-2 font-bold">
                PATRICK BET-DAVID'S
              </p>
              <p className="text-4xl sm:text-3xl text-red-600 font-bold">
                SIGNED{" "}
              </p>
              <p className="text-4xl sm:text-3xl text-red-600 font-bold">
                COLLECTION
              </p>
              <button className="bg-white text-black px-4 py-2 rounded-lg flex items-center justify-center mx-auto lg:mx-0 my-4">
                Shop Now
               <span > <FaArrowRight className="ml-2" /></span>
              </button>
            </div>
            <div className="sm:w-[80%]  md:w-[50%]  lg:w-[80%] mx-auto mb-10">
              <Image src={"/img/put.png"} height={400} width={400} alt="signature" />
            </div>
          </div>
          </FramerMotion>

          {/* Right Section with Two Images */}
          <div className="flex items-center justify-center space-x-2">
            <div className="relative w-72 h-72 lg:bottom-10" ref={iconRef}>
              <Image
                src={"/img/red.png"}
                alt="Red Image"
                className="w-full h-full rounded-lg object-contain"
                layout="fill"
              />
            </div>
            <div className="relative w-60 h-60 lg:bottom-10 lg:right-14" ref={iconRef2}>
              <Image
                src={"/img/white.png"}
                alt="White Image"
                className="w-full h-full rounded-lg object-contain"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </section>

      
    </section>
  );
}
