// src/components/PartnersMarquee.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Logos (same imports)
import axis from "../assets/logos/axis.png";
import bajaj from "../assets/logos/bajaj.png";
import bhel from "../assets/logos/bhel.png";
import godrej from "../assets/logos/godrej.png";
import icici from "../assets/logos/icici.png";
import lob from "../assets/logos/iob.png";
import whirlpool from "../assets/logos/whirpool.png";
import sbi from "../assets/logos/sbi.jpg";
import federalbank from "../assets/logos/federalbank.jpg";
import hpcl from "../assets/logos/hpcl.jpg";
import iocl from "../assets/logos/iocl.jpg";
import pnb from "../assets/logos/pnb2.jpg";
import wipro from "../assets/logos/wipro.jpg";
import bpcl from "../assets/logos/bpcl.jpg";
import bob from "../assets/logos/bob.jpg";
import ubi from "../assets/logos/ubi.jpg";

// Logo list
const logos = [
  godrej,
  sbi,
  icici,
  bajaj,
  hpcl,
  bhel,
  axis,
  iocl,
  wipro,
  bob,
  pnb,
  lob,
  bpcl,
  federalbank,
  whirlpool,
  ubi,
];

const colors = {
  blue: "#2196F3",
  darkBlue: "#0A1626",
  gray: "#E8E8E8",
  white: "#FFFFFF",
};

export default function PartnersMarquee() {
  const [duration, setDuration] = useState(40);

  // Adjust speed for screen size
  useEffect(() => {
    const handleResize = () => {
      setDuration(window.innerWidth < 768 ? 25 : 40);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-12 bg-[#F8FAFF] overflow-hidden relative">

      {/* ⭐ Heading */}
      <div className="max-w-7xl mx-auto text-center mb-10 px-6">
        <h2
          className="text-3xl md:text-4xl font-light tracking-wide"
          style={{ color: colors.darkBlue,  }}
        >
          Trusted by{" "}
          <span className="text-[#2196F3] font-light">Leading Brands</span>
        </h2>

        <p
          className="mt-3 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
          style={{
            color: "#444",
            fontFamily: "Orbitron, sans-serif",
          }}
        >
          MeTech Systems India proudly partners with{" "}
          <span className="text-[#2196F3] font-medium">
            India’s top industries, banks, manufacturers & institutions
          </span>{" "}
          delivering engineering excellence in every component we build.
        </p>
      </div>

      {/* 🚀 Marquee */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-10 items-center"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: duration,
          }}
          style={{ width: "max-content" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-28 md:w-32 h-16 md:h-20 bg-white rounded-xl 
              shadow-md hover:shadow-xl flex items-center justify-center 
              transition-transform duration-300 hover:scale-105"
            >
              <img
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className="max-h-12 md:max-h-16 object-contain opacity-80 hover:opacity-100"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* 💠 Premium Blue Glow Background Accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#2196F3]/10 blur-3xl rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0A1626]/10 blur-3xl rounded-full -z-10 animate-pulse"></div>
    </section>
  );
}
