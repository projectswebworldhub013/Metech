// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaTruckMoving,
  FaCertificate,
  FaContao,
  FaOldRepublic,
  FaTerminal,
} from "react-icons/fa";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import logo from "../assets/logo.png"
import { FaServicestack, FaSquareVirus } from "react-icons/fa6";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
  softGray: "#D9D9D9",
};

const services = [
  { title: "Residential Elevators", slug: "residential-elevators" },
  { title: "Commercial Elevators", slug: "commercial-elevators" },
  { title: "Hospital Elevators", slug: "hospital-elevators" },
  { title: "Freight Elevators", slug: "freight-elevators" },
  { title: "Private Villas Elevator", slug: "private-villa-elevator" },
  { title: "Maintenance & AMC", slug: "maintenance-amc" },
  { title: "Escalators & Walkways", slug: "escalators-walkways" },
  { title: "Modernization & Upgradation", slug: "modernization-upgradation" },
];

export default function Footer() {
  useEffect(() => {}, []);

  return (
    <footer className="relative pt-8 pb-8 px-6 md:px-16 font-[Zen Dots] overflow-hidden text-whitePure">

      {/* Background overlay */}
      <div className="absolute inset-0 bg-blackPure/95 z-0" />
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        <div className="flex flex-col space-y-4">
      <div className="flex items-center  flex-col">
        <img
          src={logo}
          alt="MeTech Systems India Logo"
          className="w-auto h-auto object-contain drop-shadow-xl"
        />
    <p
      className="text-3xl md:text-3xl font-light tracking-wide pr-30 md:pr-14"
      style={{ color: colors.deepBlue, }} >
     About MeTech
    </p>
  </div>

          <p
            className="leading-relaxed text-lg text-gray-700"
          
          >
            A leading provider of advanced elevator & mobility solutions.  
            From premium residential lifts to heavy-duty commercial elevators —  
            we engineer innovation, comfort, and safety at every level.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-4">
            {[
              ["https://www.instagram.com", FaInstagram],
              ["https://www.facebook.com", FaFacebookF],
            ].map(([url, Icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-leafGreen hover:bg-orangeGold text-blackPure transition duration-300 shadow-lg"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Webmail Button */}
          <div className="mt-4">
            <a
              href="https://webmail.metechsystems.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-leafGreen text-blackPure px-4 py-2 rounded-lg font-semibold hover:bg-orangeGold transition duration-300 shadow-md"
            >
              <FaEnvelope /> Webmail
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="text-3xl font-light mb-4"
            style={{ color: colors.deepBlue, }}
          >
            Quick Links
          </h4>

          <ul className="space-y-3">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Services", "/services", <FaTruckMoving />],
              ["Showcase", "/showcase", <FaCertificate />],
              ["Contact Us", "/contact", <FaContao />],
              ["Privacy & Policy", "/privacy&policy", <FaOldRepublic />],
              ["Terms & Condition", "/term&condition", <FaTerminal />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 text-whitePure hover:text-leafGreen transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* <h4
            className="text-3xl font-semibold mt-6 mb-2"
            style={{ color: colors.deepBlue, fontFamily: "'Italiana', serif" }}
          >
            Business Info
          </h4>

          <ul className="space-y-2 text-whitePure">
            <li>GST: —</li>
            <li>Reg. No: —</li>
          </ul> */}
            {/* Emails */}
          <div className="mt-6">
            <h5
              className="text-3xl font-light mb-2"
              style={{
                color: colors.orangeGold,
                
              }}
            >
              Email
            </h5>

            {[
              "metechsystemsindia@gmail.com",
              "info@metechsystems.co.in",
            ].map((email, i) => (
              <p key={i} className="text-sm mb-2 flex items-center gap-2">
                <FaEnvelope style={{ color: colors.leafGreen }} />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-leafGreen transition duration-300"
                >
                  {email}
                </a>
              </p>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h4
            className="text-3xl font-light mb-4"
            style={{ color: colors.deepBlue,  }}
          >
            Services
          </h4>

          <ul className="space-y-3">
            {services.map(({ title, slug }, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaSquareVirus style={{ color: colors.deepBlue}} />
                <Link
                  to={`/services/${slug}`}
                  className="text-whitePure hover:text-leafGreen transition duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

        
        </div>

        {/* Contact Info */}
        <div>
          <h4
            className="text-3xl font-light mb-4"
            style={{ color: colors.deepBlue,  }}
          >
            Contact Info
          </h4>

          <address className="not-italic leading-relaxed mb-4">
          Hs Mujtaba Apartments House No. 9-3-58/D/39 Ground Floor Nearby Moti Darwaza Ahmed Colony Baghdad Colony Langar Houz Hyderabad Telangana 500008
          </address>

          {["+91 81254 63992"].map((num, i) => (
            <p key={i} className="text-sm mb-2 flex items-center gap-2">
              <FaPhoneAlt style={{ color: colors.leafGreen }} />
              <a
                href={`tel:${num}`}
                className="hover:text-leafGreen transition duration-300"
              >
                {num}
              </a>
            </p>
          ))}

          <p className="text-sm mb-2 flex items-center gap-2">
            <FaPhoneAlt style={{ color: colors.leafGreen }} /> Owner: Mirza
          </p>

          <div className="mb-4 flex justify-start items-center">
            <Translator />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-xs text-whitePure border-t border-gray-400 pt-6 space-y-2 relative z-10">
        <VisitorCounter />

        <p>
          © {new Date().getFullYear()} MeTech Systems India. All rights
          reserved.
        </p>

        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-leafGreen transition duration-300"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </footer>
  );
}
