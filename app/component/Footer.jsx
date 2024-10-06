"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
// import { SiVisa, SiApplepay, SiPaypal, SiMastercard } from "react-icons/si";
import { FiPhone } from "react-icons/fi";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import logo1 from "./nav_logo2.png";
import { customerService, ProductsService } from "../extra/Hero";

export default function Footer() {
  const iconRef = useRef(null);

  useEffect(() => {
    gsap.to(iconRef.current, {
      y: -5,
      x: -3,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <footer className="bg-black text-white py-12">
      <div className="w-full sm:w-[90%] mx-auto p-4">
        <div className="flex items-center h-16">
          <div className="text-white text-3xl font-bold flex items-center">
            <span className="mr-2">
              <Image src={logo1} alt="Sonne Icon" height={40} width={40} />
            </span>
            <span className="h-10 leading-none">VTMERCH</span>
          </div>
        </div>
      </div>

      <div>
        <footer className="bg-black text-white py-12">
          <div className="container mx-auto px-4">
            {/* Grid layout with 5 columns */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
              {/* First column spanning 2 columns */}
              <div className="md:col-span-2 w-full">
                <h4 className="text-lg font-bold mb-4">
                  Subscribe and be the first to receive notifications about our
                  upcoming releases and the latest news.
                </h4>
                <form className="space-y-4 w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 rounded-xl bg-black text-white focus:outline-none border-2 border-white text-center"
                  />
                  <button className="w-full bg-white text-black px-4 py-3 rounded-xl">
                    Subscribe
                  </button>
                </form>
              </div>

              <div className="md:col-span-1 w-full">
                <h5 className="font-bold mb-4">Customer Services</h5>
                <ul className="space-y-2">
                  {customerService.map((v, id) => (
                    <li key={id}>
                      <a href="#" className="hover:text-gray-400">
                        {v.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-1 w-full">
                <h5 className="font-bold mb-4">Products</h5>
                <ul className="space-y-2">
                <ul className="space-y-2">
                  {ProductsService.map((v, id) => (
                    <li key={id}>
                      <a href="#" className="hover:text-gray-400">
                        {v.name}
                      </a>
                    </li>
                  ))}
                </ul>
                </ul>
              </div>

              <div className="md:col-span-1 w-full">
                <h5 className="font-bold mb-4">Contact Us</h5>
                <ul className="space-y-2">
                  <li className="hover:text-gray-400">Available: 8AM - 8PM</li>
                  <li className="hover:text-gray-400">
                    {" "}
                    <div className="flex items-center space-x-2" ref={iconRef}>
                      <FiPhone size={24} className="text-red-600 " />
                      <span className="text-white">01740147945</span>
                    </div>
                  </li>
                  <li className="hover:text-gray-400">
                    ✉️ store@valuetainment.com
                  </li>
                  <div className="flex space-x-4 mt-4">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="hover:text-gray-400"
                    >
                      <FaFacebookF size={24} />
                    </a>
                    <a
                      href="#"
                      aria-label="Twitter"
                      className="hover:text-gray-400"
                    >
                      <FaTwitter size={24} />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="hover:text-gray-400"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="hover:text-gray-400"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  </div>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-center md:text-left">
                &copy; 2024 Valuetainment Store. All rights reserved.
              </p>
              <div className="flex space-x-4 justify-center items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                  alt="Visa"
                  className="h-3"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                  alt="Mastercard"
                  className="h-3"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1000px-American_Express_logo_%282018%29.svg.png"
                  alt="American Express"
                  className="h-8"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                  className="h-3"
                />
                <img
                  src="https://logowik.com/content/uploads/images/amex-card1708.jpg"
                  alt="amex"
                  className="h-3"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </footer>
  );
}
