// src/components/ContactHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import bg from "../assets/hero/1.jpg"; // MeTech Background Image

// MeTech Colors
const colors = {
  blue: "#1C75BC",
  orange: "#F7941D",
  white: "#FFFFFF",
  black: "#000000",
};

export default function ContactHero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={bg}
        alt="MeTech System India Contact"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Layered Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(28,117,188,0.35), transparent 70%)",
        }}
      />

      {/* Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 leading-tight"
          style={{ color: colors.white }}
        >
          Get in Touch with{" "}
          <span
            className="font-light"
            style={{ color: colors.blue }}
          >
            MeTech System India
          </span>
        </motion.h1>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-200 mb-10"
        >
          We provide advanced technology solutions designed for efficiency,
          precision, and industrial excellence.  
          Let’s discuss how MeTech can enhance your business.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {/* Call Button */}
          <a
            href="tel:+918125463992"
            className="flex items-center gap-3 px-8 py-3 rounded-full font-medium bg-[#1C75BC] text-white shadow-lg hover:shadow-[#1C75BC]/50 transition-transform hover:scale-105"
          >
            <FaPhoneAlt className="text-lg" />
            Call us
          </a>

          {/* Email Button */}
          <a
            href="mailto:Metechsystemsindia@gmail.com"
            className="flex items-center gap-3 px-8 py-3 rounded-full font-medium border-2 border-[#1C75BC] text-[#1C75BC] hover:bg-[#F7941D]/10 transition-all hover:scale-105"
          >
            <FaEnvelope className="text-lg" />
         Email us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
