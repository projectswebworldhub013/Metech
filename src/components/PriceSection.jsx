import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MeTechShowcase = () => {
  return (
    <section className="w-full bg-white py-8 font-light relative overflow-hidden">

      {/* Light Blue Tech Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#2196F3]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#2196F3]/10 blur-2xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-14">

        {/* LEFT Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="col-span-1 flex flex-col justify-center relative"
        >
        

          <h2 className="text-3xl md:text-4xl font-light leading-tight text-[#0A1626]">
            Engineering Excellence<br />
            Built with <span className="text-[#2196F3]">Precision</span>
          </h2>

          <p className="text-gray-600 text-lg mt-5 leading-relaxed">
            MeTech Systems India is a trusted manufacturer of
            elevator & escalator components designed for reliability,
            long-term performance, and safety excellence.
          </p>

          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 text-[#0A1626] hover:text-[#2196F3] font-medium transition"
          >
            Learn More <span>›</span>
          </Link>
        </motion.div>

        {/* RIGHT Side – Stacked Cards Section */}
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-3">

          {/* 1️⃣ Installed Units */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition p-8 rounded-xl text-center"
          >
            <h3 className="text-base text-[#0A1626] font-medium">Installed Units</h3>
            <p className="text-4xl font-light text-[#2196F3] mt-2">1500+</p>
            <p className="text-gray-500 text-xs mt-1">Across India</p>
            <p className="text-gray-700 text-xs mt-2">
              Trusted by top elevator<br />companies nationwide.
            </p>
          </motion.div>

          {/* 2️⃣ Manufacturing Experience */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-[#2196F3] text-white shadow-xl p-10  text-center scale-105"
          >
            <h3 className="text-base font-medium">Years of Expertise</h3>
            <p className="text-4xl font-light mt-2">10+</p>
            <p className="text-white/80 text-xs mt-1">Manufacturing Excellence</p>
            <p className="text-white text-xs mt-2">
              Delivering precision-engineered<br />elevator components.
            </p>
          </motion.div>

          {/* 3️⃣ Client Network */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition p-8 rounded-xl text-center"
          >
            <h3 className="text-base text-[#0A1626] font-medium">Client Network</h3>
            <p className="text-4xl font-light text-[#2196F3] mt-2">500+</p>
            <p className="text-gray-500 text-xs mt-1">Happy Clients</p>
            <p className="text-gray-700 text-xs mt-2">
              Built on trust, quality<br />and long-term reliability.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default MeTechShowcase;
