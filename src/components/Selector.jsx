// src/components/Selector.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import servicesImg from "../assets/hero/main.jpg"; // Replace with MeTech services image
import productsImg from "../assets/hero/1.jpg"; // Replace with MeTech products image
import WeSecureBadge from "./Badge";

const colors = {
  primary: "#1C75BC", // MeTech Blue
  secondary: "#F7941D", // MeTech Orange
  darkOverlay: "rgba(0,0,0,0.6)",
};

export default function Selector() {
  const navigate = useNavigate();

  return (
    <>
    <section className="w-full py-8 bg-[#f5f5f5] relative overflow-hidden">

      {/* Premium Background SVG Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="300" stroke={colors.primary} strokeWidth="0.5" fill="none" />
          <circle cx="400" cy="400" r="200" stroke={colors.primary} strokeWidth="0.5" fill="none" />
          <circle cx="400" cy="400" r="100" stroke={colors.primary} strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      {/* Top Heading */}
      <div className="text-center mb-12 px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extralight text-black">
          Our <span className="text-[#1C75BC] font-normal">Expertise & Products</span>
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-lg leading-relaxed">
          "Delivering cutting-edge technology solutions and premium products — engineered for efficiency, reliability, and modern business needs."
        </p>
      </div>

      {/* Two Premium Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 relative z-10">

        {/* LEFT CARD: SERVICES */}
        <div
          onClick={() => navigate("/services")}
          className="group cursor-pointer h-[460px] rounded-3xl overflow-hidden relative shadow-2xl transform hover:scale-105 transition-all duration-500"
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-100 transition-transform duration-500"
            style={{ backgroundImage: `url(${servicesImg})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>

          {/* Content */}
          <div className="absolute bottom-8 left-8 text-white max-w-xs">
            <h3 className="text-4xl font-extralight mb-2">Services</h3>
            <p className="text-gray-200 transition-opacity duration-300 text-sm md:text-base">
              Innovative technology services designed for modern industrial and business applications.
            </p>
            <FaArrowRight className="mt-4 text-xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* RIGHT CARD: PRODUCTS */}
        <div
          onClick={() => navigate("/products")}
          className="group cursor-pointer h-[460px] rounded-3xl overflow-hidden relative shadow-2xl transform hover:scale-105 transition-all duration-500"
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-100 transition-transform duration-500"
            style={{ backgroundImage: `url(${productsImg})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>

          {/* Content */}
          <div className="absolute bottom-8 left-8 text-white max-w-xs">
            <h3 className="text-4xl font-extralight mb-2">Products</h3>
            <p className="text-gray-200 transition-opacity duration-300 text-sm md:text-base">
              Premium, reliable products engineered to drive efficiency and innovation across industries.
            </p>
            <FaArrowRight className="mt-4 text-xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

      </div>
    </section>
    <WeSecureBadge/>
    </>
  );
}
