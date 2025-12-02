// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";

import img1 from "../assets/hero/main4.jpg";
import img2 from "../assets/hero/main5.jpg";
import img3 from "../assets/hero/main3.jpg";

const slides = [
  {
    title: "MeTech Systems India",
    subtitle: "Premium Elevator & Escalator Components",
    tagline: "Precision • Innovation • Engineering Excellence",
    info: "India’s trusted manufacturer of Lift & Escalator parts.",
    description:
      "We specialize in precision-engineered elevator and escalator components designed for maximum durability and performance.",
    image: img1,
  },
  {
    title: "10+ Years of Engineering Expertise",
    subtitle: "Reliable Components for Every Installation",
    tagline: "Built to outperform. Tested to endure.",
    info: "Trusted nationwide for durability, safety and next-generation standards.",
    description:
      "With a decade of excellence, we deliver components built for heavy-duty performance and long-term reliability.",
    image: img2,
  },
  {
    title: "Modern Elevator Technology",
    subtitle: "ISO-Grade Manufacturing Standards",
    tagline: "Quality that elevates India.",
    info: "High-precision systems designed for long-term safety & comfort.",
    description:
      "Manufactured using advanced technology to ensure smooth vertical mobility and global-quality performance.",
    image: img3,
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">

      {/* BACKGROUND SLIDER */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover md:scale-110 scale-100"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-[#2196F3]/10 mix-blend-overlay"></div>
        </motion.div>
      ))}

      {/* TOP RIGHT INFO */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="
          absolute top-6 right-6
          sm:top-10 sm:right-10
          max-w-[70%] sm:max-w-xs
          text-right z-30
        "
      >
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
          {slides[current].info}
        </p>
      </motion.div>

      {/* LEFT MAIN CONTENT */}
      <div
        className="
          absolute bottom-14 left-6
          sm:left-12 md:left-20
          z-30 max-w-[90%] sm:max-w-xl md:max-w-2xl
        "
      >
        {/* Subtitle */}
        <motion.span
          key={slides[current].subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#2196F3] tracking-wide text-xs sm:text-sm md:text-base font-medium"
        >
          {slides[current].subtitle}
        </motion.span>

        {/* Title */}
        <motion.h1
          key={slides[current].title}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-white font-light
            text-2xl sm:text-4xl md:text-6xl
            leading-snug sm:leading-tight
            mt-2
          "
        >
          {slides[current].title}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          key={slides[current].tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-blue-700 mt-2 sm:mt-4 text-sm sm:text-lg font-bold"
        >
          {slides[current].tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          key={slides[current].description}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-gray-200 mt-3 sm:mt-4
            text-sm sm:text-base md:text-lg
            max-w-lg md:max-w-xl
            leading-relaxed
          "
        >
          {slides[current].description}
        </motion.p>

        {/* Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "150px" }}
          transition={{ duration: 1 }}
          className="h-[2px] bg-[#2196F3] mt-3 shadow-[0_0_12px_#2196F3]"
        />

        {/* BUTTONS */}
        <div className="mt-5 flex gap-4 sm:gap-6">
          <a
            href="/products"
            className="
              px-4 py-2 sm:px-6 sm:py-3
              bg-[#2196F3] rounded-full text-white text-xs sm:text-sm md:text-base
              font-medium shadow-lg 
              hover:shadow-[0_0_22px_#2196F3]
              transition
            "
          >
            View Products
          </a>

          <a
            href="/contact"
            className="
              px-6 py-2 sm:px-8 sm:py-3
              border border-gray-400
              text-white rounded-full
              text-xs sm:text-sm md:text-base
              font-medium 
              hover:bg-white/10 transition
              backdrop-blur
            "
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* BOTTOM RIGHT SOCIAL ICONS */}
      <div
        className="
          absolute bottom-6 right-6 sm:bottom-10 sm:right-10
          z-30 flex gap-4 sm:gap-6 text-gray-300
        "
      >
        {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter].map(
          (Icon, idx) => (
            <motion.a
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              href="#"
              className="hover:text-[#2196F3] transition"
            >
              <Icon size={16} className="sm:size-20 md:size-5" />
            </motion.a>
          )
        )}
      </div>
    </section>
  );
}
