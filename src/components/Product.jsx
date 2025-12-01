// src/components/MeTechProducts.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const colors = {
  blue: "#2196F3",
  darkBlue: "#0A1626",
  yellow: "#FACC15",
};

import sample from "../assets/hero/main.jpg";

const products = [
  { 
    title: "Full Electrical Kit", 
    slug: "full-electrical-kit",
    image: sample, 
    desc: "Complete wiring and electrical setup kit." 
  },
  { 
    title: "Drive", 
    slug: "drive",
    image: sample, 
    desc: "Powerful and efficient motor drive system." 
  },
  { 
    title: "Limit Switch", 
    slug: "limit-switch",
    image: sample, 
    desc: "Safety switch ensuring accurate floor stopping." 
  },
  { 
    title: "Junction Box", 
    slug: "junction-box",
    image: sample, 
    desc: "High-quality elevator-grade wiring box." 
  },
  { 
    title: "Maintenance Box", 
    slug: "maintenance-box",
    image: sample, 
    desc: "Reliable control box for service operations." 
  },
  { 
    title: "OSG Switch", 
    slug: "osg-switch",
    image: sample, 
    desc: "Overspeed governor switch for safety." 
  },
  { 
    title: "Excel Gate Lock", 
    slug: "excel-gate-lock",
    image: sample, 
    desc: "Premium locking system for elevator gates." 
  },
  { 
    title: "Blower", 
    slug: "blower",
    image: sample, 
    desc: "Cabin ventilation blower with strong airflow." 
  },
  { 
    title: "Cable Hanger", 
    slug: "cable-hanger",
    image: sample, 
    desc: "Sturdy hangers for traveling cables." 
  },
  { 
    title: "Truff", 
    slug: "truff",
    image: sample, 
    desc: "Heavy duty truff for cable safety." 
  },
  { 
    title: "LOP COP", 
    slug: "lop-cop",
    image: sample, 
    desc: "Stylish and durable lift operating panel." 
  },
  { 
    title: "Control Panel", 
    slug: "control-panel",
    image: sample, 
    desc: "Smart controller with advanced logic." 
  },
  { 
    title: "Wire Bundle 0.5, 2.5mm, 4mm", 
    slug: "wire-bundle",
    image: sample, 
    desc: "Industrial grade elevator wiring bundle." 
  },
  { 
    title: "ARD System", 
    slug: "ard-system",
    image: sample, 
    desc: "Automatic rescue device for power failure." 
  },
  { 
    title: "Travelling Cable", 
    slug: "travelling-cable",
    image: sample, 
    desc: "Flexible and long-life traveling cable." 
  },
  { 
    title: "Display Cable", 
    slug: "display-cable",
    image: sample, 
    desc: "High-speed data cable for lift displays." 
  },
  { 
    title: "Pencil Reed", 
    slug: "pencil-reed",
    image: sample, 
    desc: "Accurate magnetic reed sensor." 
  },
  { 
    title: "OTIS Type Gate Lock", 
    slug: "otis-type-gate-lock",
    image: sample, 
    desc: "Trusted OTIS standard locking system." 
  },
  { 
    title: "RCR", 
    slug: "rcr",
    image: sample, 
    desc: "Reliable cabin control relay module." 
  },
  { 
    title: "Fan", 
    slug: "fan",
    image: sample, 
    desc: "Silent and durable cabin fan." 
  },
  { 
    title: "Sensor", 
    slug: "sensor",
    image: sample, 
    desc: "High-precision elevator door sensors." 
  },
];


export default function MeTechProducts() {
  const [visible, setVisible] = useState(6);

  const loadMore = () => setVisible(prev => prev + 6);

  return (
    <section className="relative py-7 bg-white overflow-hidden">

      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-10">
          <h3
            className="text-3xl sm:text-5xl font-light leading-snug"
            style={{ color: colors.darkBlue }}
          >
            Premium Elevator Components
            <br />
            <span style={{ color: colors.blue }}>MeTech Systems India</span>
          </h3>

          <p className="text-gray-700 max-w-2xl mx-auto mt-4">
            Explore our full range of high-precision, durable elevator components
            built for exceptional performance and long-term reliability.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
         {products.slice(0, visible).map((product, idx) => (
  <Link
    key={idx}
    to={`/products/${product.slug}`}
    className="group relative w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
  >
    <div className="h-60 w-full overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>

    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent"></div>

    <div className="absolute bottom-4 left-4">
      <h4 className="text-lg font-semibold text-white">{product.title}</h4>
      <p className="text-gray-200 text-sm mt-1">{product.desc}</p>

    <Link to={`/products/${product.slug}`}>
  <button>View Details</button>
</Link>

    </div>
  </Link>
))}

        </div>

        {/* LOAD MORE BUTTON */}
        {visible < products.length && (
          <button
            onClick={loadMore}
            className="mt-8 px-8 py-3 rounded-lg font-medium text-white shadow-lg transition bg-[#2196F3] hover:bg-[#0A6CD5]"
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
}
