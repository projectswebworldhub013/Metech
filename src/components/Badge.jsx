import React from "react";
import { Link } from "react-router-dom";

export default function WeSecureBadge() {
  return (
    <section className="w-full bg-[#0A1626] py-10 px-6 md:px-16 font-[Poppins]">
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between
        bg-[#0D1B2A]/70 border border-[#2196F3]/30 
        
        rounded-2xl px-8 md:px-12 py-8 backdrop-blur-md"
      >
        {/* Left Side Content */}
        <div className="text-center md:text-left max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-light tracking-wide text-[#2196F3]">
            Precision • Engineering • Vertical Mobility
          </h3>

          <p className="mt-3 text-gray-300 text-sm md:text-base leading-relaxed">
            At{" "}
            <span className="text-[#2196F3] font-medium">
              MeTech Systems India
            </span>
            , we engineer premium elevator and escalator solutions built for
            performance, safety, and long-term durability. From residential to
            commercial & industrial applications, our systems deliver{" "}
            <span className="text-[#FACC15] font-medium">
              unmatched reliability
            </span>{" "}
            and smooth vertical mobility trusted across India.
          </p>
        </div>

        {/* Right Button */}
        <div className="mt-6 md:mt-0">
          <Link
            to="/contact"
            className="px-10 py-3 text-lg rounded-full bg-[#2196F3] text-white 
              font-medium tracking-wide shadow-lg hover:bg-[#0A6CD5] 
              hover:shadow-[0_0_20px_rgba(33,150,243,0.35)] 
              transition-all duration-300"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
