"use client";
import { useEffect, useRef } from "react";
import { montserrat } from "@/lib/font";
import gsap from "gsap";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import FramerMotion from "@/utlis/FormerMotion";

export default function SignedCollection() {
  const iconRef = useRef(null);
  const iconRef2 = useRef(null);

  useEffect(() => {
    gsap.to(iconRef.current, {
      y: -14,
      x: 8,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.in",
    });
    gsap.to(iconRef2.current, {
      y: -10,
      x: 8,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.in",
    });
  }, []);

  return (
    <section className="relative bg-black text-white py-16 z-0 overflow-hidden">
      <section className="py-2">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:w-[90%]">
          <FramerMotion>
            <div
              className={`${montserrat.className} text-center lg:text-left lg:pr-6`}
            >
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
                  <span>
                    <FaArrowRight className="ml-2" />
                  </span>
                </button>
              </div>
              <div className="sm:w-[80%] md:w-[50%] lg:w-[80%] mx-auto mb-10">
                <Image
                  src={"/img/put.png"}
                  height={400}
                  width={400}
                  alt="signature"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </FramerMotion>

          {/* Right Section with Two Images */}
          <div className="flex items-center justify-center space-x-2">
            <div
              className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:bottom-10"
              ref={iconRef}
            >
              <Image
                src={"/img/red.png"}
                alt="Red Image"
                className="w-full h-full rounded-lg object-contain"
                height={32}
                width={32}
              />
            </div>
            <div
              className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-60 md:h-60 lg:bottom-10 lg:right-14"
              ref={iconRef2}
            >
              <Image
                src={"/img/white.png"}
                alt="White Image"
                className="w-full h-full rounded-lg object-contain"
                height={32}
                width={32}
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
