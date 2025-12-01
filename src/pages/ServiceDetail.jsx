// src/pages/MeTechServiceDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import serviceData from "../data/ServiceData"; 
import { motion } from "framer-motion";
import { FaChevronDown, FaDraftingCompass, FaCouch, FaTools, FaCheckCircle } from "react-icons/fa";
import WeSecureBadge from "../components/Badge";
import MeTechServicesSection from "../components/ServiceSection";

const colors = {
  blue: "#2196F3",
  dark: "#0A1626",
  gray: "#D9D9D9",
  white: "#FFFFFF",
};

const steps = [
  { id: 1, title: "Concept & Consultation", description: "We analyze your requirements, building type, traffic, and operational needs to design the perfect elevator or escalator solution.", icon: <FaDraftingCompass size={26} /> },
  { id: 2, title: "Design & Planning", description: "Our engineers create detailed layouts, technical drawings, and system specifications for your project.", icon: <FaCouch size={26} /> },
  { id: 3, title: "Build & Execution", description: "Precision manufacturing and installation using high-quality components and safety protocols for all elevators and escalators.", icon: <FaTools size={26} /> },
  { id: 4, title: "Final Handover", description: "Complete inspection, testing, and handover with operational training and documentation for a smooth start.", icon: <FaCheckCircle size={26} /> },
];

const MeTechServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug];

  const [openFAQ, setOpenFAQ] = useState(null);

  if (!service) return <div className="p-20 text-center text-xl">Service Not Found</div>;

  return (
    <>
      <div className="relative overflow-hidden bg-white">
        {/* Decorative Glow */}
        <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
          <svg width="100%" height="100%">
            <circle cx="20%" cy="25%" r="180" stroke={colors.blue} strokeWidth="1" fill="none" />
            <circle cx="80%" cy="40%" r="260" stroke={colors.dark} strokeWidth="1" fill="none" />
            <circle cx="50%" cy="80%" r="220" stroke={colors.gray} strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Container */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">

          {/* Title Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-light text-dark tracking-wide">{service.title}</h1>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">{service.subtitle}</p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-light text-blue mt-3"
            >
              {service.subHeading}
            </motion.h2>
          </div>

          {/* Image + Overview */}
          <div className="relative mb-20">
            <div className="absolute -top-10 -left-10 w-60 h-60 bg-blue/20 blur-[90px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-dark/10 blur-[120px] rounded-full"></div>

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              {/* Left Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue opacity-80 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-2xl object-cover w-full h-[350px] group-hover:scale-105 transition-all duration-500"
                />
              </motion.div>

              {/* Right Overview */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-2xl -z-10"></div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-5 h-5 bg-blue/20 rounded-full flex items-center justify-center text-blue text-xl">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <h3 className="text-2xl font-light tracking-wide text-dark uppercase">Overview</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{service.description}</p>
              </motion.div>
            </div>
          </div>

          {/* Why Choose Us & How We Work */}
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            {/* Left - Why Choose Us */}
            <div>
              <h3 className="text-3xl font-light text-dark mb-6 flex items-center gap-3">
                <span className="w-2 h-10 bg-blue rounded-full"></span>
                Why Choose Us
              </h3>
              <ul className="space-y-4">
                {service.whyChooseUs.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">
                    <div className="min-w-[12px] h-[12px] mt-1 flex items-center justify-center rounded-full bg-blue/20 text-blue text-sm shadow-md">
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - How We Work */}
            <div>
              <h3 className="text-3xl font-light text-blue mb-6 flex items-center gap-3">
                <span className="w-2 h-10 bg-dark rounded-full"></span>
                How We Work
              </h3>
              <div className="grid gap-6">
                {service.howWeWork.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue/20 text-blue font-semibold">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Superior Section */}
          <div className="grid md:grid-cols-2 gap-10 mb-2">
            {/* Left - placeholder for contact or blank */}
            <div></div>

          </div>

          {/* FAQ Section */}
          <div className="relative mb-10">
            <h3 className="text-center text-4xl font-light text-dark mb-6 relative z-10">
              Frequently Asked <span className="text-blue font-semibold">Questions</span>
            </h3>

            <div className="max-w-3xl mx-auto space-y-6 relative z-20">
              {service.faq.map((faq, index) => (
                <div
                  key={index}
                  className={`group rounded-2xl p-6 border cursor-pointer transition-all backdrop-blur-xl 
                    ${openFAQ === index 
                      ? "bg-white shadow-xl border-blue/40" 
                      : "bg-white/60 shadow-md border-gray-200 hover:shadow-xl hover:border-blue/30"
                    }`}
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue/20 text-blue shadow-md group-hover:bg-blue group-hover:text-white transition-all">
                        <i className="fa-solid fa-question"></i>
                      </div>
                      <h4 className="text-lg font-semibold text-dark">{faq.q}</h4>
                    </div>
                    <FaChevronDown
                      className={`text-gray-700 transition-transform duration-300 ${openFAQ === index ? "rotate-180 text-blue" : ""}`}
                      size={20}
                    />
                  </div>
                  <div className={`overflow-hidden transition-all duration-500 ${openFAQ === index ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-gray-700 leading-relaxed text-base bg-white/60 p-4 rounded-xl border border-gray-200">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <MeTechServicesSection/>
      <WeSecureBadge />
    </>
  );
};

export default MeTechServiceDetail;
