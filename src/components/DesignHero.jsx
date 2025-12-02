// src/components/DesignHero.jsx
import React from "react";
import img from "../assets/hero/main7.avif"; // replace with MeTech hero image

const colors = {
  primary: "#1C75BC", // MeTech Blue
  secondary: "#F7941D", // MeTech Orange
  lightGray: "#F5F5F5",
  darkOverlay: "rgba(0,0,0,0.6)",
};

const DesignHero = () => {
  return (
    <section
      className="relative h-[90vh] w-full flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: colors.darkOverlay }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center gap-6">
        
        {/* Top Label */}
        <p className="uppercase tracking-widest text-sm text-gray-300">
          MeTech System India – Technology & Innovation
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-[#2196F3]">
          Driving Innovation With{" "}
          <span className="bg-gradient-to-r from-[#1C75BC] to-[#F7941D] bg-clip-text text-transparent">
            Smart Solutions
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-gray-200 text-base sm:text-lg md:text-xl mt-3 max-w-3xl leading-relaxed">
          Explore MeTech System India’s cutting-edge technology solutions—engineered to deliver
          efficiency, precision, and reliability for modern businesses and industrial systems.
        </p>

        {/* Indicators / Features */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm sm:text-base text-gray-300 uppercase tracking-wide w-full max-w-3xl">
          <div className="hover:text-white cursor-pointer transition border-b border-gray-400/40 pb-2">
            <span className="text-[#1C75BC] mr-2">01.</span>
            Cutting-edge technology
          </div>

          <div className="hover:text-white cursor-pointer transition border-b border-gray-400/40 pb-2">
            <span className="text-[#F7941D] mr-2">02.</span>
            Industrial automation excellence
          </div>

          <div className="hover:text-white cursor-pointer transition border-b border-gray-400/40 pb-2">
            <span className="text-[#1C75BC] mr-2">03.</span>
            Scalable smart solutions
          </div>
        </div>

      </div>
    </section>
  );
};

export default DesignHero;
