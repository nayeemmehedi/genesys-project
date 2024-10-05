"use client"

import { montserrat } from "@/lib/font";
import { useEffect, useRef } from "react";
import FramerMotion from "@/utlis/FormerMotion";

export default function BestSellingProducts() {


  return (
    <section id="id1" className="bg-gray-100 pt-12 pb-6 text-black  opacity-0"  >
      <FramerMotion>
      <div className="container mx-auto px-4">
        <div className={`${montserrat.className} `}>
          <div className="w-[88%] mx-auto">
            <h2 className="text-4xl font-semibold mb-6">BUY 1 GET 1 FREE</h2>
            <div className="text-4xl font-bold lg:leading-3">
              <span>ON</span><span className=" text-slate-50" style={{ textShadow: "0 0 2px #000000, 0 0 2px #111111" }}> BEST SELLING PRODUCTS</span>
              
            </div>
          </div>
        </div>
      </div>
      </FramerMotion>
    </section>
  );
}
