import React from "react";
import aboutImg from "../assets/hero/main6.jpg";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="relative w-full bg-[#F7F7F7] py-7 px-6 lg:px-20 overflow-hidden">

      {/* 🔵 Premium Industrial SVG Background */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
        <svg width="100%" height="100%">
          <circle cx="20%" cy="30%" r="180" stroke="#2196F3" strokeWidth="1.2" fill="none" />
          <circle cx="80%" cy="70%" r="220" stroke="#000" strokeWidth="0.7" fill="none" />
          <circle cx="50%" cy="50%" r="300" stroke="#2196F3" strokeWidth="0.8" fill="none" />
        </svg>
      </div>

      {/* Top Heading */}
      <div className="text-center mb-14 relative z-20">

        <p className="text-sm tracking-[0.3em] text-gray-600 uppercase">
          About Me Tech Systems India
        </p>

        <h2 className="text-4xl md:text-5xl font-light text-[#0A0A0A] mt-2">
          Engineering Reliability for Vertical Mobility
        </h2>

        {/* Blue Accent Line */}
        <div className="w-20 h-[3px] bg-[#2196F3] mx-auto mt-4 rounded-full shadow-[0_0_8px_#2196F3]"></div>

        <p className="text-gray-600 max-w-3xl mx-auto mt-3 text-lg leading-relaxed">
          As a trusted manufacturer of elevator & escalator components, 
          we deliver precision-engineered solutions built for safety, 
          durability, and long-term performance.
        </p>
      </div>

      {/* Content Wrapper */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-14 items-center z-20">

        {/* Image */}
        <div className="w-full">
          <img
            src={aboutImg}
            alt="Me Tech Systems India"
            className="rounded-2xl shadow-xl border border-[#dfe6ee]"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">

         <h2 className="text-4xl md:text-5xl font-light text-[#2196F3]">
  Engineering Excellence That Elevates India
</h2>


          {/* SHORTENED Premium Paragraph */}
         <p className="text-gray-700 leading-relaxed text-lg">
  For over a decade, we have engineered high-quality elevator and 
  escalator parts trusted across India over 10+ years.
  <br />
  Our products follow strict safety standards and undergo advanced 
  performance testing to ensure reliability in every installation.
  <br />
  Every component is manufactured using modern processes that ensure 
  precision, stability, and long-term durability.
  <br />
  We continue to elevate industry benchmarks through innovation, 
  superior engineering, and consistent quality assurance.
</p>


          {/* Button */}
          <Link to="/products">
            <button className="cursor-pointer  px-10 py-3 rounded-md bg-black text-white font-medium shadow-lg hover:bg-[#111] transition-all duration-300">
              Explore Products →
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;
