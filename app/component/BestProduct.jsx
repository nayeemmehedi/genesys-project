import React from "react";
import { capImages, HeroImages } from "../extra/Hero";
import { Card } from "@/components/ui/card";
import Image from "next/image";

function BestProduct() {
  return (
    <div>
      <div className="bg-gray-100 py-12">
        <div className="w-[85%] mx-auto">
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {capImages?.slice(0, 4)?.map((v, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 transition-all duration-300 transform hover:scale-105`}
                >
                  <Card className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="rounded-lg overflow-hidden">
                      <div className="relative h-64 w-full rounded-lg overflow-hidden">
                        <Image
                          src={v?.img}
                          alt="Malai Sweet"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="p-4 bg-white rounded-b-lg">
                        <div className="text-center">
                          <p className="text-gray-800 text-lg font-semibold">
                            {v?.name}
                          </p>
                        </div>
                        <div className="text-center mt-2">
                          <span className="text-green-600 font-bold">
                            {v?.price}
                          </span>
                          <span className="line-through text-gray-500 ml-2">
                            {v?.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestProduct;
