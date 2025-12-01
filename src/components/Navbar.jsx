// src/pages/MeTech/Components/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaBoxOpen,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Showcase", path: "/showcase", icon: <FaBoxOpen /> },
    { name: "Engineering", path: "/engineering", icon: <FaCogs /> },
    { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
  ];

  return (
    <header className="w-full shadow">
      {/* TOP INFO BAR */}
      <div className="bg-[#1E40AF] text-white text-sm md:text-base overflow-hidden">
        <div className="relative w-full overflow-hidden h-10 flex items-center">
          <div className="marquee-track flex whitespace-nowrap">

            {/* LINE 1 */}
            <p className="flex items-center gap-6 px-10">
              ⚙️
              Welcome to{" "}
              <span className="font-semibold text-[#93C5FD]">
                Me Tech Systems India
              </span>
              <span className="text-gray-200">|</span>
              📞 <span className="text-white font-medium">+91 81254 63992</span>
              <span className="text-gray-200">|</span>
              ✉️{" "}
              <span className="text-white font-medium">
                metechsystemsindia@gmail.com
              </span>
              <span className="text-gray-200">|</span>
              Premium • Precision • Engineering
            </p>

            {/* LINE 2 */}
            <p className="flex items-center gap-6 px-10">
              🏗️
              Trusted Manufacturer of{" "}
              <span className="font-semibold text-[#93C5FD]">
                Elevator & Escalator Components
              </span>
              <span className="text-gray-200">|</span>
              📞 Support:{" "}
              <span className="text-white font-medium">+91 81254 63992</span>
              <span className="text-gray-200">|</span>
              ✉️ metechsystemsindia@gmail.com
            </p>

          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-white shadow-md w-full">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 md:px-8 py-1">

          {/* LOGO */}
          <div className="flex justify-center items-center">
            <Link to="/" className="block">
              <img
                src={logo} // <-- Add your logo here
                alt="Me Tech Systems India Logo"
                className="h-16 w-auto object-contain transition-all duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 font-medium text-black">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="flex items-center gap-1 transition-colors hover:text-[#1E40AF]"
                >
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* SOCIAL ICONS */}
          <div className="hidden md:flex gap-5 text-black text-lg">
            <a href="#" className="hover:text-[#1E40AF] transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#1E40AF] transition"><FaInstagram /></a>
            <a href="#" className="hover:text-[#1E40AF] transition"><FaLinkedinIn /></a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <FaBars className="text-black" size={26} />
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 rounded-l-xl transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-300">
          <h2 className="text-[#1E40AF] text-xl font-bold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <FaTimes className="text-black" size={22} />
          </button>
        </div>

        <div className="px-4 mt-4">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="flex items-center gap-2 py-3 border-b border-gray-200 text-black hover:text-[#1E40AF] transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE SOCIAL ICONS */}
        <div className="px-4 mt-6 flex gap-5 text-black text-xl">
          <a href="#" className="hover:text-[#1E40AF] transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-[#1E40AF] transition"><FaInstagram /></a>
          <a href="#" className="hover:text-[#1E40AF] transition"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* MARQUEE ANIMATION */}
      <style>
        {`
          .marquee-track {
            display: flex;
            animation: marquee 25s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </header>
  );
}
