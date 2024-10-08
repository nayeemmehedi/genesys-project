import React from "react";
import Image from "next/image";
import { montserrat } from "@/lib/font";

function MissionSection() {
  return (
    <div>
      <section
        className={`${montserrat.className} bg-red-600 text-white font-bold max-w-full`}
      >
        <div className="max-w-full sm:w-[80%] mx-auto relative z-50">
          <div className=" sm:h-[330px] h-[210px]   flex flex-col sm:flex-row items-center justify-between relative">
            <div className="text-left sm:z-0 z-20 ">
              {" "}
              <div className="relative ">
                <Image
                  src={"/Icon/quote.svg"}
                  alt="quote"
                  height={150}
                  width={150}
                ></Image>
                <div className="text-sm sm:text-2xl px-4 sm:px-0 relative bottom-12 left-10 max-w-fit w-[80%] sm:w-full">
                  {" "}
                  <p>OUR MISSION IS TO ENLIGHTEN,ENTERTAIN </p>
                  <p>AND EMPOWER CURRENT AND FUTURE</p>
                  <p>LEADERS AROUND THE WORLD.</p>
                </div>
              </div>
            </div>

            <div className="h-[210px] sm:h-[380px] w-auto  absolute bottom-1 left-auto sm:right-0 md:right-0 lg:right-20 sm:z-0 z-0 ">
              <Image
                src={"/img/img5.png"}
                alt="Man"
                className="w-full h-full object-cover rounded-md"
                width={300}
                height={300}
              />
              <div className="h-[2px] bg-zinc-500 lg:w-[245px]"></div>
              <div className="h-[1px] bg-black lg:w-[245px]"></div>
              <div className="h-[1px] bg-zinc-500 lg:w-[245px]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MissionSection;
