"use client";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { HeroImages } from "../extra/Hero";

export default function Hero() {
  const plugin = useRef(Autoplay({ delay: 1500, stopOnInteraction: true }));

  return (
    <section className="bg-red-600 text-white py-4 overflow-hidden">
      <div className="container mx-auto max-w-full px-4">
        <div className="text-center mb-6">
          <h2
            style={{
              fontFamily: "Act of Rejection",
              color: "rgba(255, 255, 255, 0.4)",
            }}
            className=" text-6xl md:text-6xl lg:text-8xl"
          >
            FUTURE LOOKS BRIGHT!
          </h2>
        </div>

        <div className="relative bottom-16">
          <Carousel
            plugins={[plugin.current]}
            className="w-full overflow-hidden"
          >
            {" "}
            {/* Added overflow-hidden */}
            <CarouselContent className="flex gap-4 w-full">
              {HeroImages?.map((v, index) => (
                <CarouselItem
                  key={index}
                  className={`flex-shrink-0 ${
                    index === 0 || index === 3 ? "md:basis-1/3" : "md:basis-1/2"
                  } lg:basis-1/4`}
                >
                  <div className="rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl my-3">
                    <div className="relative h-64 w-full">
                      <Image
                        src={v?.img}
                        alt="hero"
                        layout="fill"
                        className="object-cover"
                      />
                    </div>

                    <div className="p-4 text-white text-center">
                      <p className="mb-4">{v?.name}</p>
                      <div>
                        {v?.price}{" "}
                        <span className="line-through">{v?.originalPrice}</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
