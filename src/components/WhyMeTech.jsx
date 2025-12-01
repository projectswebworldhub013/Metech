// src/components/WhyChooseUs.jsx
import React from "react";
import { FaCogs, FaCertificate, FaUsersCog, FaTools, FaShieldAlt, FaIndustry, FaChartLine, FaCheckCircle } from "react-icons/fa";

const items = [
  {
    icon: <FaCogs />,
    title: "Precision Engineered Parts",
    desc: "Every component is built with micron-level accuracy for long-lasting performance."
  },
  {
    icon: <FaUsersCog />,
    title: "Skilled Engineering Team",
    desc: "A certified team ensuring technical excellence and consistent quality assurance."
  },
  {
    icon: <FaIndustry />,
    title: "Modern Manufacturing Units",
    desc: "State-of-the-art production with advanced machinery & global-grade workflow."
  },
  {
    icon: <FaCertificate />,
    title: "ISO-Grade Standards",
    desc: "Products tested rigorously for safety, durability, and reliability."
  },
  {
    icon: <FaTools />,
    title: "Custom Solutions Available",
    desc: "Tailor-made elevator parts built to match your engineering needs."
  },
  {
    icon: <FaShieldAlt />,
    title: "Enhanced Safety Assurance",
    desc: "All parts undergo multi-layer quality checks to ensure fail-safe operations."
  },
  {
    icon: <FaChartLine />,
    title: "10+ Years Industry Legacy",
    desc: "A decade of trust serving top elevator companies and installers across India."
  },
  {
    icon: <FaCheckCircle />,
    title: "Reliable After-Sales Support",
    desc: "Dedicated technical and installation support across major cities."
  },
];

export default function WhyMeTech() {
  return (
    <section className="w-full bg-white py-10 px-6 lg:px-28 relative overflow-hidden">

      {/* Dotted Wave Background */}
      <div className="absolute top-1/2 left-0 w-full h-1 opacity-50">
        <svg width="100%" height="10">
          <path
            d="M0 5 C 150 0, 300 10, 450 5 S 750 5, 1000 5"
            stroke="#2196F3"
            strokeWidth="2"
            strokeDasharray="6 10"
            fill="none"
          />
        </svg>
      </div>

      {/* Section Heading */}
      <div className="text-center mb-7">
        <h2 className="text-4xl md:text-5xl font-light text-[#0A1626]">
          Why Choose <span className="text-[#2196F3]">MeTech System India</span>
        </h2>
        <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto">
          Delivering high-precision elevator & escalator components trusted across India for over a decade.
        </p>
      </div>

      {/* Grid Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {items.map((item, index) => (
          <div key={index} className="text-center group">
            
            {/* Icon Circle */}
            <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-[#2196F3]/10 text-[#2196F3] text-2xl shadow-md group-hover:shadow-[0_0_20px_#2196F3] transition-all duration-300">
              {item.icon}
            </div>

            <h3 className="mt-4 text-lg font-semibold text-[#0A1626]">
              {item.title}
            </h3>

            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
