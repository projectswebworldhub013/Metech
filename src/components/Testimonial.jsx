// src/components/MeTechTestimonials.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaUserCircle } from "react-icons/fa";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const testimonials = [
  {
    id: 1,
    text: "MeTech Systems delivers engineering precision that truly stands out. Their components are durable, reliable, and world-class.",
    name: "Amit Srivastava",
    role: "Lift Contractor, Delhi",
  },
  {
    id: 2,
    text: "The best elevator components we’ve used. Strong build, high safety standards, and excellent customer support.",
    name: "Simran Kaur",
    role: "Builder, Punjab",
  },
  {
    id: 3,
    text: "Their modernization solutions improved our entire building’s mobility experience. Highly recommended.",
    name: "Rahul Mehta",
    role: "Facility Manager, Noida",
  },
  {
    id: 4,
    text: "Exceptional engineering quality. MeTech’s precision and reliability are unmatched in the elevator industry.",
    name: "Priya Sharma",
    role: "Architect, Gurugram",
  },

  // ⭐ NEW 15+ TESTIMONIALS BELOW ⭐
  {
    id: 5,
    text: "MeTech products have significantly reduced breakdowns in our elevator systems. Truly dependable components.",
    name: "Suresh Pillai",
    role: "Maintenance Head, Kochi",
  },
  {
    id: 6,
    text: "Their motors and controllers are built with world-class precision. Installation was smooth and highly efficient.",
    name: "Mohammed Arif",
    role: "Elevator Technician, Hyderabad",
  },
  {
    id: 7,
    text: "Outstanding quality and timely delivery. MeTech is always our first choice for elevator components.",
    name: "Karan Patel",
    role: "Construction Consultant, Ahmedabad",
  },
  {
    id: 8,
    text: "Their engineering team understands real-world challenges and provides practical, long-lasting solutions.",
    name: "Neha Verma",
    role: "Project Manager, Mumbai",
  },
  {
    id: 9,
    text: "We have been sourcing from MeTech for years. Their reliability and precision manufacturing are unmatched.",
    name: "Vikas Sharma",
    role: "OEM Partner, Indore",
  },
  {
    id: 10,
    text: "Their escalator parts are built to perfection. Solid material quality and excellent performance.",
    name: "Santosh Mane",
    role: "Escalator Contractor, Pune",
  },
  {
    id: 11,
    text: "Amazing customer support and top-notch materials. MeTech has set a benchmark for elevator component quality.",
    name: "Ritika Sharma",
    role: "Interior Consultant, Bengaluru",
  },
  {
    id: 12,
    text: "Their modernization kit transformed our outdated lift into a smooth and silent system.",
    name: "Nitin Gupta",
    role: "Residential Building Owner, Jaipur",
  },
  {
    id: 13,
    text: "The safety features in their components are truly impressive. Reliable and compliant with standards.",
    name: "Anand Koduri",
    role: "Safety Auditor, Hyderabad",
  },
  {
    id: 14,
    text: "MeTech Systems consistently provides unbeatable precision at a competitive price point.",
    name: "Harpreet Singh",
    role: "Lift Contractor, Ludhiana",
  },
  {
    id: 15,
    text: "The detailing in their engineering shows their experience. The best supplier we’ve worked with.",
    name: "Swapna Nair",
    role: "Commercial Property Manager, Trivandrum",
  },
  {
    id: 16,
    text: "Reliable supply, premium build, and flawless functioning — MeTech is a trusted partner in every project.",
    name: "Raghav Arora",
    role: "Builder, Chandigarh",
  },
  {
    id: 17,
    text: "Their auto-door system is extremely smooth and durable. Clients love the performance.",
    name: "Chandan Kumar",
    role: "Lift Installer, Patna",
  },
  {
    id: 18,
    text: "We choose MeTech because their products last longer and require very little maintenance.",
    name: "Deepak Sharma",
    role: "Facility Supervisor, Surat",
  },
];


export default function MeTechTestimonials() {
  return (
    <section className="relative w-full py-8 px-6 md:px-16  overflow-hidden">

      {/* Futuristic Blue Glow Background */}
      {/* <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#2196F3] opacity-[0.12] blur-[200px]"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0E2A45] opacity-[0.4] blur-[180px]"></div> */}

      {/* Heading */}
      <div className="relative text-center mb-14 z-10">
        <h4 className="text-sm tracking-[0.3em] text-[#2196F3] font-semibold uppercase">
          Testimonials
        </h4>

        <h2 className="text-3xl md:text-5xl font-light text-black mt-2">
          What Our <span className="text-[#2196F3] font-normal">Clients Say</span>
        </h2>

        <p className="mt-3 text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
          Trusted by contractors, builders, and architects nationwide — here’s what industry leaders say about MeTech Systems India.
        </p>
      </div>

      {/* Swiper */}
      <div className="relative z-10 py-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          spaceBetween={40}
          speed={1000}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative  border border-[#1E3A5F] rounded-2xl h-[320px]
                px-8 py-6 shadow-[0_0_20px_rgba(33,150,243,0.25)]
                hover:border-[#2196F3]/70 hover:shadow-[0_0_40px_rgba(33,150,243,0.45)]
                transition-all duration-500 group backdrop-blur-md">

                {/* Icon */}
                <div className="flex items-center justify-between mb-5">
                  <FaUserCircle className="text-4xl text-[#2196F3]" />
                </div>

                {/* Text */}
                <p className="text-lg text-gray-800 font-light leading-relaxed italic">
                  “{item.text}”
                </p>

                {/* Footer */}
                <div className="mt-6">
                  <h4 className="text-md font-semibold text-[#2196F3]">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>

                {/* Glow Ring */}
                <div className="absolute inset-0 rounded-3xl border border-[#2196F3] opacity-0 
                  group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute -top-14 right-0 flex gap-4">
          <button className="testimonial-prev w-11 h-11 flex items-center justify-center 
            rounded-full bg-[#102033] border border-[#1E3A5F] text-[#2196F3]
            hover:bg-[#2196F3] hover:text-white hover:shadow-[0_0_30px_rgba(33,150,243,0.6)]
            transition-all">
            <MdOutlineArrowBackIos />
          </button>

          <button className="testimonial-next w-11 h-11 flex items-center justify-center
            rounded-full bg-[#102033] border border-[#1E3A5F] text-[#2196F3]
            hover:bg-[#2196F3] hover:text-white hover:shadow-[0_0_30px_rgba(33,150,243,0.6)]
            transition-all">
            <MdOutlineArrowForwardIos />
          </button>
        </div>
      </div>
    </section>
  );
}
