// src/pages/MeTechProductDetail.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import productData from "../data/ProductData";
import { motion } from "framer-motion";
import { FaChevronDown, FaCogs, FaStar, FaPhoneAlt } from "react-icons/fa";
import MeTechProducts from "../components/Product";
import WeSecureBadge from "../components/Badge";

const colors = {
  blue: "#2196F3",
  dark: "#0A1626",
  gray: "#D9D9D9",
  white: "#FFFFFF",
};

const MeTechProductDetail = () => {
  const { slug } = useParams();

  // 🔥 FIXED — find product by slug from array
  const product = productData.find((p) => p.slug === slug);

  const [openFAQ, setOpenFAQ] = useState(null);

  if (!product)
    return (
      <div className="p-10 text-center text-xl text-red-600">
        ❌ Product Not Found
      </div>
    );

  return (
    <>
    <section className="w-full py-16 bg-[#f4f6fa] text-center relative overflow-hidden">
  <div className="absolute inset-0 opacity-30 pointer-events-none">
    <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#1C75BC] rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F7941D] rounded-full blur-3xl"></div>
  </div>

  <div className="relative z-10 max-w-4xl mx-auto px-6">
    <h1 className="text-4xl md:text-5xl font-light text-black leading-tight">
      Product <span className="text-[#1C75BC] font-light">Details</span>
    </h1>

    <p className="mt-3 text-gray-600 text-lg md:text-lg leading-relaxed">
      “Explore the complete breakdown of premium components engineered for  
      durability, precision, and maximum performance. Every product is  
      crafted to deliver unmatched reliability in real-world applications.”
    </p>
  </div>
</section>

      <div className="relative overflow-hidden bg-white">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
          <svg width="100%" height="100%">
            <circle cx="20%" cy="25%" r="180" stroke={colors.blue} strokeWidth="1" fill="none" />
            <circle cx="80%" cy="40%" r="260" stroke={colors.dark} strokeWidth="1" fill="none" />
            <circle cx="50%" cy="80%" r="220" stroke={colors.gray} strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          
          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-light text-[#0A1626] tracking-wide">
              {product.title}
            </h1>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
              {product.subtitle}
            </p>
          </div>

          {/* Image + Overview */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#2196F3] opacity-80 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>

              <img
                src={product.image}
                alt={product.title}
                className="rounded-2xl shadow-2xl object-cover w-full h-[350px] group-hover:scale-105 transition-all duration-500"
              />
            </motion.div>

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-light text-[#0A1626] mb-4">Product Overview</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.description}
              </p>
            </motion.div>
          </div>

          {/* Why Choose + Specifications */}
          <div className="grid md:grid-cols-2 gap-16 mb-8">

            {/* Why Choose */}
            <div>
              <h3 className="text-3xl font-light text-[#0A1626] mb-6 flex items-center gap-3">
                <FaStar className="text-[#2196F3]" />
                Feature of This Product
              </h3>

              <ul className="space-y-4">
                {product.features?.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300"
                  >
                    <span className="w-3 h-3 mt-2 rounded-full bg-[#2196F3]"></span>
                    <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Contact Card */}
          <div className="bg-[#2196F3]/10 px-10 py-8 rounded-3xl shadow-xl border border-[#2196F3]/20 mb-2">
            <h3 className="text-3xl font-light text-[#0A1626] mb-3">Need This Product?</h3>
            <p className="text-gray-700 mb-3 text-lg">
              Contact our technical team for pricing, installation, and expert guidance.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#2196F3] text-white px-8 py-3 rounded-full text-lg shadow-lg hover:bg-[#0A1626] transition-all"
            >
              <FaPhoneAlt /> Contact Us
            </Link>
          </div>
        </div>
      </div>
      <MeTechProducts />
      <WeSecureBadge />
    </>
  );
};

export default MeTechProductDetail;
