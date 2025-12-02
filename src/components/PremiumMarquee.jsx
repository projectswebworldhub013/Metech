// src/components/PremiumMarquee.jsx
import React from "react";
import {
  FaTools,
  FaCogs,
  FaIndustry,
  FaTruckLoading,
  FaClinicMedical,
  FaBuilding,
  FaHome,
  FaArrowUp,
  FaExchangeAlt,
  FaWalking,
  FaFan,
  FaMicrochip,
  FaBox,
  FaPlug,
  FaThLarge,
  FaSitemap,
  FaLock,
  FaPuzzlePiece,
  FaCodeBranch,
  FaStream,
  FaWaveSquare,
} from "react-icons/fa";

// ✔ All MeTech System India Services + Products
const marqueeItems = [
  // ------------- MAIN SERVICES -------------
  { icon: <FaTools className="text-base text-[#D4A857]" />, text: "Maintenance & AMC" },
  { icon: <FaTruckLoading className="text-base text-[#F5E5CC]" />, text: "Freight Elevators" },
  { icon: <FaClinicMedical className="text-base text-[#D4A857]" />, text: "Hospital Elevators" },
  { icon: <FaBuilding className="text-base text-[#F5E5CC]" />, text: "Commercial Elevators" },
  { icon: <FaHome className="text-base text-[#D4A857]" />, text: "Residential Elevators" },
  { icon: <FaArrowUp className="text-base text-[#F5E5CC]" />, text: "Private Villa Elevators" },
  { icon: <FaExchangeAlt className="text-base text-[#D4A857]" />, text: "Modernization & Upgradation" },
  { icon: <FaWalking className="text-base text-[#F5E5CC]" />, text: "Escalators & Moving Walkways" },

  // ------------- PRODUCTS (SPARE PARTS) -------------
  { icon: <FaFan className="text-base text-[#D4A857]" />, text: "Fan" },
  { icon: <FaStream className="text-base text-[#F5E5CC]" />, text: "RCR" },
  { icon: <FaBox className="text-base text-[#D4A857]" />, text: "Truff" },
  { icon: <FaCogs className="text-base text-[#F5E5CC]" />, text: "Drive" },
  { icon: <FaIndustry className="text-base text-[#D4A857]" />, text: "Blower" },
  { icon: <FaMicrochip className="text-base text-[#F5E5CC]" />, text: "Sensor" },
  { icon: <FaThLarge className="text-base text-[#D4A857]" />, text: "LOP / COP" },
  { icon: <FaLock className="text-base text-[#F5E5CC]" />, text: "OSG Switch" },
  { icon: <FaSitemap className="text-base text-[#D4A857]" />, text: "ARD System" },
  { icon: <FaPuzzlePiece className="text-base text-[#F5E5CC]" />, text: "Pencil Reed" },
  { icon: <FaBox className="text-base text-[#D4A857]" />, text: "Junction Box" },
  { icon: <FaCodeBranch className="text-base text-[#F5E5CC]" />, text: "Limit Switch" },
  { icon: <FaStream className="text-base text-[#D4A857]" />, text: "Cable Hanger" },
  { icon: <FaWaveSquare className="text-base text-[#F5E5CC]" />, text: "Display Cable" },
  { icon: <FaPlug className="text-base text-[#D4A857]" />, text: "Control Panel" },
  { icon: <FaLock className="text-base text-[#F5E5CC]" />, text: "Excel Gate Lock" },
  { icon: <FaTools className="text-base text-[#D4A857]" />, text: "Maintenance Box" },
  { icon: <FaCogs className="text-base text-[#F5E5CC]" />, text: "Travelling Cable" },
  { icon: <FaLock className="text-base text-[#D4A857]" />, text: "OTIS Type Gate Lock" },
  { icon: <FaBox className="text-base text-[#F5E5CC]" />, text: "Complete Electrical Kit" },
  { icon: <FaStream className="text-base text-[#D4A857]" />, text: "Wire Bundle 0.5mm / 2.5mm / 4mm" },
];

const PremiumMarquee = () => {
  return (
    <div className="w-full h-[42px] overflow-hidden bg-[#0D0D0D] text-[#F5E5CC] relative flex items-center border-y border-[#2A2A2A]">
      {/* Keyframes */}
      <style>
        {`
          @keyframes marqueeSlide {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marqueeSlide 55s linear infinite;
          }
        `}
      </style>

      <div className="relative flex items-center">
        <div className="marquee-track">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 mx-8 text-[15px] font-light tracking-wide hover:scale-110 transition-all duration-300 whitespace-nowrap select-none"
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0D0D0D] to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0D0D0D] to-transparent pointer-events-none"></div>
    </div>
  );
};

export default PremiumMarquee;
