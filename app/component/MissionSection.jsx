import React from "react";
import quote from "@/public/Icon/quote.svg";
import man from "@/public/img/img5.png";
import Image from "next/image";
import { montserrat } from "@/lib/font";

function MissionSection() {
  return (
    <div>
      {/* Mission Section */}
      
      <section
        className={`${montserrat.className} bg-red-600 text-white font-bold`}
      >
        <div className="  w-[100%] sm:w-[80%] mx-auto relative z-50">
          <div className=" sm:h-[330px] h-[250px]   flex flex-col sm:flex-row items-center justify-between relative">
            {/* Text content */}

            <div className="text-left sm:z-0 z-20 ">
              {" "}
              {/* Added margin for better spacing on small screens */}
              <div className="relative ">
                <Image src={quote} alt="quote" height={150} width={150}></Image>
                <div className="text-sm sm:text-3xl px-4 sm:px-0 relative bottom-12 left-10">
                  {" "}
                  {/* Adjusted font size and padding for small devices */}
                  <p>OUR MISSION IS TO ENLIGHTEN,ENTERTAIN </p>
                  <p>AND EMPOWER CURRENT AND FUTURE</p>
                  <p>LEADERS AROUND THE WORLD.</p>
                </div>
              </div>
            </div>

            {/* Image on the right */}
            <div className="h-[250px] sm:h-[380px] w-auto  absolute bottom-1 left-auto sm:right-0 md:right-0 lg:right-20 sm:z-0 z-0 ">
              <Image
                src={man}
                alt="Man"
                className="w-full h-full object-cover rounded-md"
              />
              <div className="h-[2px] bg-zinc-500 w-[245px]"></div>
              <div className="h-[1px] bg-black w-[245px]"></div>
              <div className="h-[1px] bg-zinc-500 w-[245px]"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default MissionSection;
