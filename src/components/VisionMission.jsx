// src/components/VisionMission.jsx
import React from "react";
import { motion } from "framer-motion";

const colors = {
  blue: "#2196F3",
  darkBlue: "#0A1626",
  lightBlue: "#63B3F9",
  white: "#FFFFFF",
};

export default function VisionMission() {
  return (
    <section className="relative w-full py-10 px-6 md:px-12 overflow-hidden">

      {/* 🔷 Floating Futuristic Rings Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-50 -z-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke={colors.lightBlue} strokeWidth="1.2">
          <circle cx="20%" cy="30%" r="120" className="animate-bounce-slow" strokeOpacity="0.4" />
          <circle cx="80%" cy="50%" r="90" className="animate-bounce-delay" strokeOpacity="0.25" />
          <circle cx="50%" cy="85%" r="160" className="animate-bounce-slow" strokeOpacity="0.2" />
        </g>
      </svg>

      {/* ⭐ Section Header */}
      <div className="relative text-center mb-10 z-10">
        <h2
          className="text-3xl md:text-5xl font-light tracking-wide text-black"
         
        >
          Our <span className="text-[#2196F3]">Vision & Mission</span>
        </h2>

        <p
          className="mt-5 max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-gray-700"
         
        >
          At <span className="text-[#2196F3]">MeTech Systems India</span>, we
          engineer next-generation elevator components built on precision,
          durability, and world-class safety standards.
        </p>
      </div>

      {/* 🌟 Vision & Mission Cards */}
      <div className="relative grid md:grid-cols-2 gap-12 max-w-7xl mx-auto z-10">

        {/* 🔭 Vision Card */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white/5 backdrop-blur-xl border border-white/20 
          rounded-3xl p-12 shadow-[0_0_25px_rgba(33,150,243,0.2)] 
          transition-all duration-500"
        >
          {/* Tag */}
          <div
            className="absolute -top-5 left-6 px-6 py-2 rounded-full text-sm font-bold shadow-md tracking-wide"
            style={{
              backgroundColor: colors.blue,
              color: colors.white,
              
            }}
          >
            🔭 Vision
          </div>

          <h3
            className="text-2xl md:text-3xl font-light mb-6 text-[#2196F3]"
           
          >
            Engineering the Future of Mobility
          </h3>

          <p
            className="leading-relaxed text-gray-800 text-base md:text-lg"
           
          >
            Our vision is to establish MeTech as India’s most trusted and
            advanced elevator component manufacturer — delivering unmatched
            precision, safety, and reliability.
            <br />
            We aim to power modern buildings with:
            <br />
            • Smooth and safe vertical mobility <br />
            • Global-standard engineering <br />
            • Energy-efficient smart technology <br />
            • Durable performance for every environment
            <br />
            We envision a future where every movement inside a building is
            powered by flawless MeTech engineering.
          </p>
        </motion.div>

        {/* 🚀 Mission Card */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white/5 backdrop-blur-xl border border-white/20
          rounded-3xl p-12 shadow-[0_0_25px_rgba(33,150,243,0.2)]
          transition-all duration-500"
        >
          <div
            className="absolute -top-5 left-6 px-6 py-2 rounded-full text-sm font-bold shadow-md tracking-wide"
            style={{
              backgroundColor: colors.darkBlue,
              color: colors.white,
              
            }}
          >
            🚀 Mission
          </div>

          <h3
            className="text-2xl md:text-3xl font-light mb-3 text-[#2196F3]"
        
          >
            Precision Manufacturing With Purpose
          </h3>

          <p
            className="leading-relaxed text-gray-800 text-base md:text-lg"
          
          >
            Our mission is to design and manufacture world-class elevator &
            escalator components that deliver consistent, long-lasting
            performance.
            <br />
            We focus on:
            <br />
            • Zero-defect production <br />
            • Industry-aligned safety engineering <br />
            • Technology-driven systems and components <br />
            • Reliable pan-India support and supply <br />
            • Durability that exceeds industry expectations
            <br />
            Every MeTech product represents innovation, structural strength,
            and long-term customer trust.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

/* Animations */
<style>
{`
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
@keyframes bounce-delay {
  0%, 100% { transform: translateY(15px); }
  50% { transform: translateY(-10px); }
}
.animate-bounce-slow { animation: bounce-slow 7s ease-in-out infinite; }
.animate-bounce-delay { animation: bounce-delay 9s ease-in-out infinite; }
`}
</style>
