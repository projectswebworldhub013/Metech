// src/components/GalleryHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// Brand Colors (MeTech)
const colors = {
  deepBlue: "#234A8A",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

import bg from "../assets/hero/main.jpg";

export default function GalleryHero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <img
        src={bg}
        alt="MeTech Showcase"
        className="absolute inset-0 w-full h-full object-cover scale-110"
        style={{
          filter: "brightness(0.65) contrast(1.2) saturate(1.1)",
        }}
      />

      {/* Dark Premium Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/95" />

      {/* Blue Glow Overlay */}
      <div
        className="absolute inset-0"
        // "radial-gradient(circle at 50% 80%, rgba(35,74,138,0.35), transparent 60%)",
    
      />

      {/* Floating Blue Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[#234A8A]/30 blur-[3px]"
            style={{
              width: `${Math.random() * 10 + 8}px`,
              height: `${Math.random() * 10 + 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* CENTERED TEXT CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl mb-6 font-light"
          style={{
           
            color: colors.whitePure,
            letterSpacing: "1px",
            textShadow: "0px 6px 25px rgba(0,0,0,0.6)",
          }}
        >
          MeTech Systems India  
          <span className="block text-[#234A8A] font-light">
            Showcase Excellence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl leading-relaxed mb-8"
          style={{
            color: colors.whitePure,
          }}
        >
          Explore our finest installations, cutting-edge elevator engineering,  
          and premium mobility solutions — crafted with precision, innovation,  
          and unmatched technical expertise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-3 rounded-full font-light text-lg transition-all duration-500 bg-[#234A8A] text- hover:bg-white hover:text-black hover:scale-105 shadow-xl"
            style={{
              fontFamily: "Zen Dots, sans-serif",
            }}
          >
            Contact Us <FaArrowRight className="text-xl" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
