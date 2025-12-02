import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const colors = {
  blue: "#004AAD",
  lightBlue: "#2196F3",
  dark: "#0A0A0A",
  gray: "#5B5B5B",
  white: "#FFFFFF",
};

export default function MapSection() {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-white">

      {/* Glow Background */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[110px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">

        {/* LEFT SIDE — CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-sm tracking-widest text-[#004AAD] mb-3 font-medium">
            Reach MeTech System India
          </p>

          <h2 className="text-4xl md:text-5xl font-light text-black leading-tight">
            Find Us on the{" "}
            <span className="text-[#004AAD] font-semibold">Map</span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-lg">
            We are always available to assist with CCTV, Biometric,
            Networking, Alarm Systems, Automation, and Security Solutions.
            Visit our office or contact us anytime for premium service.
          </p>

          {/* Contact Card */}
          <div className="mt-10 space-y-5 bg-white/60 backdrop-blur-lg border border-gray-200 p-6 rounded-2xl shadow-xl">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#004AAD] text-2xl mt-1" />
              <p className="text-gray-700 leading-relaxed">
                Ground Floor, HS Mujtaba Apartments, House No. 9,  
                3-58/D/39, Nearby Moti Darwaza, Ahmed Colony,  
                Langar Houz, Hyderabad, Telangana 500008
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#004AAD] text-xl" />
              <a
                href="tel:+91 81254 63992"
                className="text-gray-700 hover:text-[#004AAD] transition"
              >
                +91 81254 63992
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#004AAD] text-xl" />
              <a
                href="mailto:metechsystemsindia@gmail.com"
                className="text-gray-700 hover:text-[#004AAD] transition"
              >
                metechsystemsindia@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — MAP */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-300"
          style={{ boxShadow: "0 0 40px rgba(0,74,173,0.15)" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d203356.6254996703!2d78.40804555!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bcb978385c333f3%3A0xe06b3a5eebe1ae95!2sGround%20Floor%2C%20Hs%20Mujtaba%20Apartments%20House%20No.%209%2C%203-58%2FD%2F39%2C%20nearby%20Moti%20Darwaza%2C%20Ahmed%20Colony%2C%20Baghdad%20Colony%2C%20Langar%20Houz%2C%20Hyderabad%2C%20Telangana%20500008!3m2!1d17.3843462!2d78.41382999999999!5e1!3m2!1sen!2sin!4v1764655213209!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[420px]"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
