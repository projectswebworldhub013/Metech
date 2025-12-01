import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import curtainImg from "../assets/Hero/c1.jpg";
import smartHomeImg from "../assets/Hero/c2.avif";
import furnitureImg from "../assets/Hero/r1.jpg";
import Img from "../assets/Hero/r2.jpg";

const colors = {
  gold: "#C5A46D",
  white: "#FFFFFF",
  grayLight: "#F5F5F5",
  darkGray: "#2C2C2C",
};

const WhatWeDo = () => {
  return (
    <section className="relative py-6 px-6 md:px-16 overflow-hidden">
      
      {/* Grid Background */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M80 0 L0 0 0 80" fill="none" stroke={colors.gold} strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Branding */}
      <p 
        className="text-sm md:text-xl text-center mb-1"
        style={{ color: colors.darkGray,  }}
      >
        Horizon Projects
      </p>

      {/* Heading */}
      <h2
        className="text-4xl md:text-5xl text-center font-bold mb-3 leading-tight font-light"
        style={{ color: colors.darkGray, }}
      >
        Transforming Spaces with{" "}
        <span style={{ color: colors.gold }}>Premium Craftsmanship</span>
      </h2>
      <p
  className="text-center text-sm md:text-lg mb-8 tracking-wide"
  style={{ color: colors.darkGray, fontFamily: " sans-serif" }}
>
  Designing modern lifestyles with precision, elegance, and thoughtful innovation.
</p>


      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-12 items-start relative z-10">

        {/* 1 – PLANNING & CONSTRUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="overflow-hidden flex flex-col items-center"
        >
          <img src={curtainImg} alt="Construction" className="w-80 h-[50vh] object-cover" />

          <div className="p-6 text-center">
            <h3
              className="text-xl font-light mb-2"
              style={{ color: colors.gold,  }}
            >
              PLANNING & CONSTRUCTION
            </h3>
            <p
              className="text-sm md:text-base"
              style={{ color: colors.darkGray,  }}
            >
              From structural planning to on-site execution—our team ensures robust,
              high-quality civil construction with precision and durability.
            </p>
          </div>
        </motion.div>

        {/* 2 – INTERIOR DESIGN & EXECUTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="overflow-hidden flex flex-col items-center"
        >
          <img src={smartHomeImg} alt="Interior" className="w-full h-64 object-cover" />

          <div className="p-6 text-center">
            <h3
              className="text-xl font-light mb-2"
              style={{ color: colors.gold,  }}
            >
              INTERIOR DESIGN & EXECUTION
            </h3>
            <p
              className="text-sm md:text-base"
              style={{ color: colors.darkGray,  }}
            >
              Complete interior solutions—from concept design to final installation.
              Stylish, modern, and customised for your space.
            </p>
          </div>
        </motion.div>

        {/* 3 – RENOVATION & REMODELING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="overflow-hidden flex flex-col items-center"
        >
          <img src={furnitureImg} alt="Renovation" className="w-80 h-[50vh] object-cover" />

          <div className="p-6 text-center">
            <h3
              className="text-xl font-light mb-2"
              style={{ color: colors.gold, }}
            >
              RENOVATION & REMODELING
            </h3>
            <p
              className="text-sm md:text-base"
              style={{ color: colors.darkGray,  }}
            >
              Transform old spaces with smart upgrades—modern finishes, civil repairs,
              layout improvements, and complete makeovers.
            </p>
          </div>
        </motion.div>

        {/* 4 – SPACE-SAVING SOLUTIONS (SLIDE IN EXTRA CARD) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="overflow-hidden flex flex-col items-center md:col-span-3"
        >
          <img
            src={Img}
            alt="Space Saving"
            className="w-full h-72 object-cover"
          />

          <div className="p-6 text-center max-w-2xl mx-auto">
            <h3
              className="text-xl font-light mb-2"
              style={{ color: colors.gold, }}
            >
              SPACE-SAVING SOLUTIONS
            </h3>
            <p
              className="text-sm md:text-base"
              style={{ color: colors.darkGray,  }}
            >
              Premium modular storage, hidden units, convertible furniture, and
              intelligent layout planning—crafted to maximise space beautifully.
            </p>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-8">
        <Link
          to="/contact"
          className="text-center text-sm md:text-base leading-relaxed text-[#2C2C2C] hover:text-gold transition-colors duration-300 cursor-pointer"
        >
          Need expert help?{" "}
          <span className="text-gold font-semibold underline">Book Online</span>
        </Link>
      </div>

    </section>
  );
};

export default WhatWeDo;
