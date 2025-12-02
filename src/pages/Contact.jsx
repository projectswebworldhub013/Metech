// src/pages/Contact.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactHero from "../components/ContactHero";
import bg from "../assets/hero/1.jpg";
import MapSection from "../components/MapSection";

const colors = {
  primaryBlue: "#1C75BC",
  accentOrange: "#F7941D",
  darkGray: "#1C1C1C",
  softWhite: "#F9F9F9",
  lightGray: "#E8E8E8",
};

const allServices = [
  "Maintenance & AMC",
  "Freight Elevators",
  "Hospital Elevators",
  "Commercial Elevators",
  "Residential Elevators",
  "Private Villas Elevator",
  "Modernization & Upgradation",
  "Escalators & Moving Walkways",

  "Fan",
  "RCR",
  "Truff",
  "Drive",
  "Blower",
  "Sensor",
  "LOP COP",
  "OSG Switch",
  "ARD System",
  "Pencil Reed",
  "Junction Box",
  "Limit Switch",
  "Cable Hanger",
  "Display Cable",
  "Control Panel",
  "Excel Gate Lock",
  "Maintenance Box",
  "Travelling Cable",
  "OTIS Type Gate Lock",
  "Full Electrical Kit",
  "Wire Bundle 0.5, 2.5mm, 4mm",
];

const Contact = () => {
  return (
    <>
      <ContactHero />

      {/* Main Section */}
      <section className="w-full min-h-screen flex flex-col lg:flex-row bg-white text-[#1C1C1C]">
        {/* LEFT SIDE INFO PANEL */}
        <div className="w-full lg:w-1/2 px-10 py-16 relative overflow-hidden flex flex-col justify-center">
          {/* Background Glows */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute -top-10 -left-16 w-80 h-80 bg-[#1C75BC] rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F7941D] rounded-full blur-[140px]"></div>
          </div>

          <div className="relative z-10">
            <h2
              className="text-5xl font-bold mb-6 pb-3 inline-block font-[Poppins]"
              style={{
                borderBottom: `4px solid ${colors.accentOrange}`,
                color: colors.primaryBlue,
              }}
            >
              Contact Us
            </h2>

            <p className="text-lg mb-6 font-light leading-relaxed text-[#444]">
              Welcome to{" "}
              <span className="font-semibold text-[#F7941D]">
                MeTech Systems India
              </span>
              — your trusted partner for advanced security solutions, CCTV
              systems, IT networking, access control systems, and surveillance
              services. We provide end-to-end technical solutions with unmatched
              reliability.
            </p>

            <div className="space-y-5 text-base">
              <div className="flex items-start gap-3">
                <FaPhoneAlt size={22} style={{ color: colors.accentOrange }} />
                <p>+91 81254 63992</p>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope size={22} style={{ color: colors.accentOrange }} />
                <p>metechsystemsindia@gmail.com</p>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt
                  size={22}
                  style={{ color: colors.accentOrange }}
                />
                <p>
                  Ground Floor, HS Mujtaba Apartments, House No. 9, 3-58/D/39,
                  Near Moti Darwaza, Ahmed Colony, Baghdad Colony, Langar Houz,
                  Hyderabad, Telangana 500008
                </p>
              </div>

              <p className="mt-4 text-sm text-[#1C75BC] font-semibold">
                Company Name: MeTech Systems India • Owner: Mirza
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex space-x-5 text-2xl">
              {[FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube].map(
                (Icon, i) => (
                  <Icon
                    key={i}
                    className="hover:scale-125 transition transform duration-300 cursor-pointer"
                    style={{ color: colors.primaryBlue }}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* RIGHT FORM PANEL */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center shadow-xl">
          {/* BG Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
          />

          {/* Dark Overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0,0,0,0.78)" }}
          />

          {/* FORM */}
          <form
            action="https://formsubmit.co/metechsystemsindia@gmail.com"
            method="POST"
            className="relative z-10 w-full max-w-lg px-8 py-12"
          >
            <h3
              className="text-2xl font-bold mb-6 border-b-2 inline-block font-[Poppins]"
              style={{
                borderColor: colors.accentOrange,
                color: colors.accentOrange,
              }}
            >
              Send Us a Message
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-3 focus:border-[#F7941D] outline-none transition duration-200"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-3 focus:border-[#F7941D] outline-none transition duration-200"
              />

              <input
                type="text"
                name="phone"
                placeholder="Mobile Number"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-3 focus:border-[#F7941D] outline-none transition duration-200"
              />

              <input
                type="text"
                name="address"
                placeholder="Your Address"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-3 focus:border-[#F7941D] outline-none transition duration-200"
              />

              <select
                name="service"
                required
                className="bg-transparent border-b border-gray-400 text-white py-3 focus:border-[#F7941D] outline-none transition duration-200"
              >
                <option value="" disabled selected className="text-gray-400">
                  Select a Service
                </option>

                {allServices.map((s, i) => (
                  <option key={i} value={s} className="text-black">
                    {s}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="col-span-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-3 focus:border-[#F7941D] outline-none transition duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300"
              style={{
                backgroundColor: colors.accentOrange,
                color: colors.darkGray,
              }}
            >
              Send Message
            </button>

            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://metechsystemsindia.in/"
            />
          </form>
        </div>
      </section>
      <MapSection/>
    </>
  );
};

export default Contact;
