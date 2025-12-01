// src/components/OurProjects.jsx
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { saveAs } from "file-saver";

import img1 from "../assets/Hero/h1.jpg";
import img2 from "../assets/Hero/h2.jpg";
import img3 from "../assets/Hero/h3.avif";
import img4 from "../assets/Hero/vm2.jpg";

import pdf1 from "../assets/pdf/1.pdf"
import pdf2 from "../assets/pdf/2.pdf"
import pdf3 from "../assets/pdf/3.pdf"
import pdf4 from "../assets/pdf/4.pdf"

const projects = [
  {
    title: "Entire House Project 1",
    desc: "Elegant kitchen design crafted with premium finishes and modern fittings.",
    img: img1,
    tags: ["Interior", "Modular"],
    pdf: pdf1
  },
  {
    title: "Entire House Project 2",
    desc: "A timeless living room concept blending comfort and luxury.",
    img: img2,
    tags: ["Interior", "Design"],
    pdf: pdf2
  },
  {
    title: "Entire House Project 3",
    desc: "Artistic ceiling work with built-in lighting elements enhancing ambiance.",
    img: img3,
    tags: ["Construction", "Ceiling"],
    pdf: pdf3
  },
  {
    title: "Entire House Project 4",
    desc: "A sleek and highly functional office environment built by Horizon Projects.",
    img: img4,
    tags: ["Interior", "Workspace"],
    pdf: pdf4
  },
];


export default function OurProjects() {
  const downloadPDF = (file) => {
    saveAs(file, "HorizonProject.pdf");
  };

  return (
    <section className="relative py-6 bg-[#f5f5f5] overflow-hidden">

      {/* PREMIUM BACKGROUND SVG */}
      <div className="absolute inset-0 opacity-40">
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="gold" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8d6d1f" />
            </linearGradient>
          </defs>

          <circle cx="20%" cy="30%" r="180" fill="url(#gold)" opacity="0.35" />
          <circle cx="80%" cy="70%" r="220" fill="url(#gold)" opacity="0.25" />
        </svg>
      </div>

      {/* Heading Row */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 mb-14 relative z-10">
        
        {/* Left Heading */}
        <div>
          <h2 className="text-[42px] md:text-[56px] font-light text-black leading-tight">
            Our <span className="text-[#D4AF37]">Projects</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg mt-3 leading-relaxed max-w-lg">
            A showcase of our finest craftsmanship — from luxury interiors to
            modern structural engineering.
          </p>
        </div>

        {/* Right Paragraph */}
        <div className="flex items-center">
          <p className="text-gray-600 text-base md:text-sm leading-relaxed">
            Horizon Projects is known for delivering timeless designs and durable
            structures, ensuring that every space we build reflects elegance,
            innovation, and unparalleled attention to detail.
          </p>
        </div>
      </div>

      {/* Grid Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden relative group cursor-pointer"
          >
            {/* SERIAL NUMBER */}
            <div className="absolute top-4 left-4 text-white px-3 py-1 rounded-full text-xs font-semibold z-20">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </div>

            {/* Image */}
            <div
              className="h-[350px] bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: `url(${project.img})` }}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl flex flex-col justify-end p-6 text-white backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-200 mb-4">{project.desc}</p>

              <div className="flex gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-white/20 backdrop-blur-lg rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* PDF DOWNLOAD BUTTON */}
              <button
                onClick={() => downloadPDF(project.pdf)}
                className="mt-4 ml-auto flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/30 rounded-full text-sm hover:bg-white/30 transition"
              >
                View PDF <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
