// src/components/WhyChooseUs.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import leftImg from "../assets/hero/main3.jpg";

const colors = {
  black: "#0A1626",
  white: "#FFFFFF",
  gray: "#F5F5F5",
  blue: "#2196F3",
};

export default function FeaturedSection() {
  return (
    <section className="relative w-full py-10 px-6 md:px-16 bg-[#F5F5F5] text-black overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-[#2196F3]/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-black/10 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Image Section */}
        <div className="relative w-full max-w-md group">
          <img
            src={leftImg}
            alt="Interior Design"
            className="rounded-2xl h-[480px] md:h-[420px] shadow-2xl object-cover w-full transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-semibold text-[#0A1626]">
            <FaCheckCircle className="text-[#2196F3]" />
            <span>Premium Quality</span>
          </div>
        </div>

        {/* Center Text */}
        <div className="text-center lg:text-left max-w-xl">

         <p className="text-sm tracking-widest text-gray-500 uppercase mb-1">
  Get Your Quote
</p>

<h2 className="text-2xl md:text-3xl font-light mb-6 leading-snug">
  Prefer to Know More?{" "}
  <span className="text-[#2196F3] font-light text-4xl">Contact MeTech Systems India</span>
</h2>

<p className="text-base md:text-lg leading-relaxed tracking-wide text-gray-700 mb-5">
  Looking for reliable elevator solutions or need expert guidance before making a
  decision? MeTech Systems India provides complete assistance to help you choose
  the right product based on your space, usage, and budget.
  <br />
  <br />
  Share your requirements with us, and our team will provide a tailored quotation,
  technical details, and professional recommendations to ensure you get the best
  vertical mobility solution.
</p>


        </div>

        {/* Right Side – Enquiry Form */}
        <div className="relative w-full max-w-sm bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
          
          <h3 className="text-xl font-light text-[#0A1626] mb-4 text-center">
            Get a Quick Quote
          </h3>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#2196F3] focus:ring-1 focus:ring-[#2196F3] outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#2196F3] focus:ring-1 focus:ring-[#2196F3] outline-none"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#2196F3] focus:ring-1 focus:ring-[#2196F3] outline-none"
            />

            <select
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-600 focus:border-[#2196F3] focus:ring-1 focus:ring-[#2196F3] outline-none"
            >
              <option>Select Service</option>
              <option>Residential Elevator</option>
              <option>Commercial Elevator</option>
              <option>Hospital Elevator</option>
              <option>Freight Elevator</option>
              <option>Escalator Parts</option>
              <option>Modernization & Upgrades</option>
            </select>

            <textarea
              placeholder="Message"
              rows="3"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#2196F3] focus:ring-1 focus:ring-[#2196F3] outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-2 rounded-full bg-[#2196F3] text-white font-light hover:opacity-90 transition-all"
            >
              Submit Request
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}
