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
    info: "India’s trusted manufacturer of Lift & Escalator parts. Reliability engineered for vertical mobility.",
    description:
      "Me Tech Systems India specializes in precision-engineered elevator and escalator components designed for maximum durability and performance. Our products follow strict safety norms and advanced manufacturing standards.",
    image: img1,
  },
  {
    title: "10+ Years of Engineering Expertise",
    subtitle: "Reliable Components for Every Installation",
    tagline: "Built to outperform. Tested to endure.",
    info: "Our parts are trusted nationwide for durability, safety and next-generation design standards.",
    description:
      "With over a decade of engineering excellence, we deliver components built for heavy-duty performance and long-term reliability. Each product is tested for maximum safety and efficiency.",
    image: img2,
  },
  {
    title: "Modern Elevator Technology",
    subtitle: "ISO-Grade Manufacturing Standards",
    tagline: "Quality that elevates India.",
    info: "We develop high-precision lift systems designed for long-term safety, performance and comfort.",
    description:
      "Our products are manufactured using cutting-edge technology, ensuring smooth vertical mobility and superior ride comfort. Designed to meet Indian as well as global quality benchmarks.",
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

      {/* SLIDER BACKGROUND */}
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
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-[#2196F3]/10 mix-blend-overlay"></div>
        </motion.div>
      ))}

      {/* TOP RIGHT INFO */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-10 right-10 max-w-xs text-right z-30"
      >
        <p className="text-gray-300 text-sm leading-relaxed font-light">
          {slides[current].info}
        </p>
      </motion.div>

      {/* LEFT BOTTOM CONTENT */}
      <div className="absolute bottom-16 left-10 sm:left-20 z-30 max-w-2xl">

        {/* Subtitle */}
        <motion.span
          key={slides[current].subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#2196F3] tracking-widest text-sm font-medium"
        >
          {slides[current].subtitle}
        </motion.span>

        {/* Title */}
        <motion.h1
          key={slides[current].title}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-light text-4xl sm:text-4xl md:text-6xl leading-tight"
        >
          {slides[current].title}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          key={slides[current].tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-blue-800 mt-4 text-lg font-bold"
        >
          {slides[current].tagline}
        </motion.p>

        {/* EXTRA DESCRIPTION BELOW HEADING */}
        <motion.p
          key={slides[current].description}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-200 mt-4 text-base sm:text-lg max-w-xl leading-relaxed"
        >
          {slides[current].description}
        </motion.p>

        {/* Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "180px" }}
          transition={{ duration: 1 }}
          className="h-[2px] bg-[#2196F3] mt-3 shadow-[0_0_12px_#2196F3]"
        />

        {/* Buttons */}
        <div className="mt-4 flex gap-5">
          <a
            href="/products"
            className="px-6 py-3 bg-[#2196F3] rounded-full text-white font-medium shadow-lg hover:shadow-[0_0_22px_#2196F3] transition"
          >
            View Products
          </a>

          <a
            href="/contact"
            className="px-8 py-3 border border-gray-400 text-white rounded-full font-medium hover:bg-white/10 transition backdrop-blur"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* BOTTOM RIGHT — SOCIAL ICONS ROW */}
      <div className="absolute bottom-10 right-10 z-30 flex gap-6 text-gray-300 text-lg">
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
              <Icon size={20} />
            </motion.a>
          )
        )}
      </div>
    </section>
  );
}
