// src/components/Showcase.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GalleryHero from "../components/GalleryHero";

import img1 from "../assets/hero/main.jpg";

const colors = {
  primaryBlue: "#004AAD",
  gradientBlue: "linear-gradient(135deg, #1274FF, #00E0FF)",
  darkBlue: "#012A4A",
  gray: "#6B7280",
  white: "#FFFFFF",
  black: "#0A0A0A",
};

const images = [
  img1, img1, img1, img1, img1, img1, img1,
  img1, img1, img1, img1, img1, img1, img1,
  img1, img1, img1,
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev - 1 + images.length) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  const nextImage = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  return (
    <>
      <GalleryHero />

      {/* ⭐ GALLERY SECTION (White Premium Theme) */}
      <section className="relative px-6 md:px-16 lg:px-24 py-8 bg-white overflow-hidden">
        
        {/* Soft Blue Glow */}
        <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#1274FF]/20 blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#00E0FF]/20 blur-[120px]" />
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <p className="uppercase tracking-[6px] font-medium text-[#1274FF]">
            MeTech System India Showcase
          </p>

          <h2 className="text-4xl sm:text-5xl font-light mt-3 text-[#0A0A0A]">
            Our Premium{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1274FF] to-[#00E0FF]">
              Installation Gallery
            </span>
          </h2>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden cursor-pointer rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-white border border-gray-200"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              onClick={() => openImage(i)}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-[260px] object-cover transition-all duration-700 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-xl z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                key={selectedImage}
                className="relative w-full max-w-6xl mx-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Installation"
                  className="w-full max-h-[85vh] object-contain rounded-3xl bg-white p-4 shadow-[0_0_50px_rgba(0,0,0,0.3)]"
                />

                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-white bg-[#1274FF]/70 p-3 rounded-full hover:bg-[#00E0FF] hover:text-black transition"
                  onClick={closeModal}
                >
                  <FaTimes size={20} />
                </button>

                {/* Prev */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-[#1274FF]/80 p-3 rounded-full hover:bg-[#00E0FF] hover:text-black transition"
                  onClick={prevImage}
                >
                  <FaArrowLeft size={20} />
                </button>

                {/* Next */}
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-[#1274FF]/80 p-3 rounded-full hover:bg-[#00E0FF] hover:text-black transition"
                  onClick={nextImage}
                >
                  <FaArrowRight size={20} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Gallery;
