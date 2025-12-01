import React from "react";
import MeTechProducts from "../components/Product";
import WeSecureBadge from "../components/Badge";

const Products = () => {
  return (
    <>
      {/* Premium Quote / Intro Section */}
      <section className="w-full py-16 bg-[#f4f6fa] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#1C75BC] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F7941D] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light text-black leading-tight">
            Our <span className="text-[#1C75BC] font-light">Products</span>
          </h1>
          <p className="mt-3 text-gray-600 text-lg md:text-lg leading-relaxed">
            “Delivering engineered products built for precision, reliability,  
            and performance — designed to empower industries with smarter  
            and stronger technology.”
          </p>
        </div>
      </section>
      <MeTechProducts />
      <WeSecureBadge />
    </>
  );
};

export default Products;
