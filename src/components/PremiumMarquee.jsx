// src/components/PremiumMarquee.jsx
import React from "react";
import {
  FaCouch,
  FaDraftingCompass,
  FaPalette,
  FaPaintBrush,
  FaLeaf,
  FaRulerCombined,
  FaTools,
  FaHardHat,
  FaBuilding,
  FaHammer,
  FaCity,
  FaPencilRuler,
  FaLayerGroup,
  FaCubes,
  FaDoorOpen,
  FaBath,
  FaHome,
  FaMountain,
  FaWarehouse,
} from "react-icons/fa";

// Interior (10) + Construction (10)
const marqueeItems = [
  // ---------- INTERIOR SERVICES ----------
  { icon: <FaCouch className="text-base text-[#D4A857]" />, text: "Luxury Interior Designing" },
  { icon: <FaPalette className="text-base text-[#F5E5CC]" />, text: "Color & Material Consultation" },
  { icon: <FaDraftingCompass className="text-base text-[#B8A58A]" />, text: "Space Planning & 3D Layouts" },
  { icon: <FaHome className="text-base text-[#D4A857]" />, text: "Modular Kitchen & Wardrobes" },
  { icon: <FaDoorOpen className="text-base text-[#C5A46D]" />, text: "Custom Furniture Manufacturing" },
  { icon: <FaPaintBrush className="text-base text-[#F5E5CC]" />, text: "Premium Wall Finishes" },
  { icon: <FaLeaf className="text-base text-[#D4A857]" />, text: "Eco-Friendly Interior Solutions" },
  { icon: <FaBath className="text-base text-[#B8A58A]" />, text: "Luxury Bathroom Interiors" },
  { icon: <FaRulerCombined className="text-base text-[#F5E5CC]" />, text: "Precision Measurements" },
  { icon: <FaLayerGroup className="text-base text-[#D4A857]" />, text: "False Ceiling & Lighting Design" },

  // ---------- CONSTRUCTION SERVICES ----------
  { icon: <FaHammer className="text-base text-[#D4A857]" />, text: "Residential Construction" },
  { icon: <FaBuilding className="text-base text-[#F5E5CC]" />, text: "Commercial Building Development" },
  { icon: <FaHardHat className="text-base text-[#C5A46D]" />, text: "Turnkey Construction Services" },
  { icon: <FaTools className="text-base text-[#D4A857]" />, text: "Renovation & Remodeling" },
  { icon: <FaCity className="text-base text-[#F5E5CC]" />, text: "Urban Structure Design" },
  { icon: <FaMountain className="text-base text-[#C5A46D]" />, text: "Exterior & Façade Construction" },
  { icon: <FaWarehouse className="text-base text-[#D4A857]" />, text: "Industrial Construction" },
  { icon: <FaCubes className="text-base text-[#F5E5CC]" />, text: "Structural Engineering" },
  { icon: <FaPencilRuler className="text-base text-[#D4A857]" />, text: "Architectural Planning" },
  { icon: <FaLayerGroup className="text-base text-[#C5A46D]" />, text: "Site Development & Layout" },
];

const PremiumMarquee = () => {
  return (
    <div className="w-full h-[38px] overflow-hidden bg-[#1C1C1C] text-[#F5E5CC] relative flex items-center">
      {/* Inline keyframes */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee {
            display: flex;
            width: max-content;
            animation: marquee 60s linear infinite;
          }
        `}
      </style>

      <div className="relative flex items-center">
        <div className="marquee">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 mx-8 text-sm font-light tracking-wide hover:scale-105 transition-transform duration-300 whitespace-nowrap"
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#1C1C1C] to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#1C1C1C] to-transparent pointer-events-none"></div>
    </div>
  );
};

export default PremiumMarquee;
