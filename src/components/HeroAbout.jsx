import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import heroBg from "../assets/hero/ahero.jpg";

export default function AboutHero() {
  return (
    <section
      className="relative w-full h-[90vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK + BLUE LAYERED OVERLAY */}
      <div className="absolute inset-0 bg-[#0A1626]/70"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1626]/60 to-[#0A1626]"></div>

      {/* FUTURISTIC BLUE LINES / GLOWS */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-40 h-[2px] bg-[#2196F3] blur-[3px] animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-[2px] bg-[#2196F3]/70 blur-[4px] animate-ping"></div>
      </div>

      {/* MAIN CONTENT CENTERED */}
      <div className="relative z-10 text-center max-w-3xl px-6 mx-auto">

        {/* HEADING */}
        <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6 drop-shadow-xl">
          About{" "}
          <span className="text-[#2196F3] ">
            MeTech Systems India
          </span>
        </h1>

        {/* FIRST PARAGRAPH */}
        <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
          Engineering premium elevator components with precision, innovation, and world-class
          safety standards. Our solutions power vertical mobility across India with unmatched
          reliability and future-ready technology.
        </p>

        {/* CTA BUTTON */}
      <Link
  to="/contact"
  className="inline-block 
    px-6 py-2          /* mobile size */
    md:px-10 md:py-3   /* desktop size */
    mb-4 rounded-full 
    text-base md:text-lg  /* smaller text on mobile */
    font-medium 
    bg-[#2196F3] text-white 
    hover:bg-[#0A6CD5] 
    hover:shadow-[0_0_40px_rgba(33,150,243,0.65)]
    transition-all duration-300"
>
  Request a Quote
</Link>

        {/* SECOND PARAGRAPH */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8">
          With over a decade of engineering excellence, MeTech continues to build advanced
          elevator systems trusted by residential, commercial, and industrial clients nationwide.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center justify-center gap-5 mt-2">
          {[FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="p-3 rounded-full bg-white/10 border border-white/20 
              hover:bg-[#2196F3] hover:border-[#2196F3] 
              transition-all duration-300 backdrop-blur-md shadow-lg"
            >
              <Icon className="text-white text-lg" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
