// src/components/MeTechServicesSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

// Replace with real industrial images
import sample from "../assets/hero/main.jpg";

const services = [
  {
    title: "Residential Elevators",
    slug: "residential-elevators",
    description:
      "Safe and stylish elevators perfectly suited for villas and apartments. Our residential elevators offer a smooth, quiet ride with advanced safety features and customizable interiors.",  
    image: sample,
  },
  {
    title: "Commercial Elevators",
    slug: "commercial-elevators",
    description:
      "High-performance lifts built for malls, offices, and skyscrapers. Designed for maximum efficiency and durability with sleek looks and smart controls.",    
    image: sample,
  },
  {
    title: "Hospital Elevators",
    slug: "hospital-elevators",
    description:
      "Spacious lifts designed for patient care and emergencies. They offer reliable and safe transport for patients, stretchers, and medical staff across hospital floors.", 
    image: sample,
  },
  {
    title: "Freight Elevators",
    slug: "freight-elevators",
    description:
      "Heavy-duty elevators built for warehouses and factories. Strong, efficient, and safe — ideal for large loads and demanding environments.",
    image: sample,
  },
  {
    title: "Private Villas Elevator",
    slug: "private-villa-elevator",
    description:
      "Tailored luxury elevator solutions designed specifically for private villas, ensuring comfort, elegance, and seamless vertical mobility.",
    image: sample,
  },
  {
    title: "Maintenance & AMC",
    slug: "maintenance-amc",
    description:
      "We provide full maintenance support and AMC plans to keep your elevators running smoothly, safely, and reliably 24/7.", 
    image: sample,
  },

  // ⭐ New Service 7
  {
    title: "Escalators & Moving Walkways",
    slug: "escalators-walkways",
    description:
      "High-efficiency escalators and walkways designed for malls, airports, and commercial hubs. Engineered for heavy traffic, smooth movement, and long-term reliability.",
    image: sample,
  },

  // ⭐ New Service 8
  {
    title: "Modernization & Upgradation",
    slug: "modernization-upgradation",
    description:
      "Upgrade old elevators with modern controls, energy-efficient systems, new interiors, and advanced safety tech. Improve performance, comfort, and compliance standards.",
    image: sample,
  },
];



export default function MeTechServicesSection() {
  return (
    <> 
    <section className="relative bg-white py-8 overflow-hidden">

      {/* Tech Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#2196F3]/10 blur-2xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#0A1626]/10 blur-xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 relative z-10">
          <h2 className="font-light text-4xl md:text-5xl text-[#0A1626] tracking-wide">
            Our <span className="text-[#2196F3]">Core Manufacturing</span> Services
          </h2>
          <p className="mt-5 text-gray-600 leading-relaxed text-base md:text-lg">
            We deliver precision-engineered elevator and escalator components 
            that meet international quality standards. Each product is built 
            using advanced manufacturing processes and strict inspection control.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={3}
          autoplay={{
            delay: 2600,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Link to={`/services/${service.slug}`}>
                <div className="relative rounded-2xl overflow-hidden group shadow-xl bg-black/10 hover:bg-black/20 transition">

                  {/* Service Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Big Index Number */}
                  <div className="absolute top-8 left-8 text-white/30 text-6xl font-black">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  {/* Content */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl md:text-3xl font-medium text-white drop-shadow">
                      {service.title}
                    </h3>
                    <p className="text-sm text-black mt-2 leading-relaxed">
                      Built with precision engineering & advanced manufacturing.
                    </p>
                  </div>

                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Floating Animation */}
      <style>
        {`
          @keyframes floatPulse {
            0% { transform: translateY(0) scale(1); opacity: .8; }
            50% { transform: translateY(-15px) scale(1.05); opacity: 1; }
            100% { transform: translateY(0) scale(1); opacity: .8; }
          }
          .animate-tech {
            animation: floatPulse 5s infinite ease-in-out;
          }
        `}
      </style>

    </section>
        </>
  );
}
