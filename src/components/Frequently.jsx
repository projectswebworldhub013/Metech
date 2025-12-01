import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqCategories = [
  { id: "general", title: "General" },
  { id: "products", title: "Products" },
  { id: "support", title: "Support" },
  { id: "warranty", title: "Warranty" }
];

const faqData = {
  general: [
    { q: "What is Me Tech Systems India?", a: "We manufacture precision-engineered elevator & escalator components designed for superior performance and long-term durability." },
    { q: "How long have you been in the industry?", a: "We have been trusted for over 10+ years, delivering high-quality solutions to clients across India." },
    { q: "Do you provide installation guidance?", a: "Yes, our technical team provides complete installation support and engineering assistance." },
  ],

  products: [
    { q: "What products do you manufacture?", a: "We supply elevator controllers, ARDs, panels, cabins, doors, indicators, wiring, and many other essential elevator components." },
    { q: "Can you manufacture custom parts?", a: "Absolutely. We create custom components based on client technical requirements." },
  ],

  support: [
    { q: "Do you offer after-sales support?", a: "Yes, we provide technical assistance, troubleshooting, and maintenance guidance." },
    { q: "How fast is your support response?", a: "Our support team responds within 24 hours for all technical and service-related queries." },
  ],

  warranty: [
    { q: "Do your products include warranty?", a: "Yes, warranty varies from 1–10 years depending on the product category." },
    { q: "Are replacement parts available?", a: "Yes, we maintain a strong inventory to ensure quick replacement availability." },
  ],
};

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("general");
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <section className="relative w-full py-10 px-6 md:px-12 lg:px-20 overflow-hidden">

      {/* --- PREMIUM BLUE TECHNICAL SVG BACKGROUND --- */}
      <svg
        className="absolute top-0 left-0 w-full opacity-20"
        height="300"
      >
        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="#2196F3" />
        </pattern>
        <rect width="100%" height="300" fill="url(#dots)" />
      </svg>

      {/* Decorative engineering line */}
      <div className="absolute top-16 right-0 w-1/2 opacity-10">
        <svg width="100%" height="10">
          <path
            d="M0 5 C 150 0, 300 10, 450 5 S 700 5, 1000 5"
            stroke="#2196F3"
            strokeWidth="2"
            strokeDasharray="10 8"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* ------------------ LEFT SIDEBAR ------------------ */}
        <div className="col-span-1">
          <h2 className="text-4xl md:text-4xl font-light text-[#0A1626] leading-tight mb-6">
            Frequently Asked <br />
            <span className="text-[#2196F3] font-normal">Questions</span>
          </h2>

          <div className="space-y-3">
            {faqCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  setOpenQuestion(null);
                }}
                className={`w-full text-left px-5 py-3 rounded-xl border backdrop-blur-sm transition-all duration-300
                  ${activeTab === cat.id
                    ? "border-[#2196F3] bg-[#E9F3FF] shadow-md text-black"
                    : "border-gray-300 text-gray-600 hover:border-[#2196F3] hover:text-black"}
                `}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* ------------------ FAQ RIGHT SECTION ------------------ */}
        <div className="col-span-3 space-y-6">

          <h3 className="text-2xl font-light text-[#2196F3] capitalize tracking-wide">
            {activeTab} FAQs
          </h3>

          {faqData[activeTab].map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 p-5 relative"
              style={{ borderLeft: "5px solid #2196F3" }}
            >
              <button
                className="w-full flex justify-between items-center py-1 text-left text-[16px] font-medium text-[#0A1626]"
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
              >
                <span>{item.q}</span>
                {openQuestion === index ? (
                  <FiMinus size={22} className="text-[#2196F3]" />
                ) : (
                  <FiPlus size={22} className="text-[#2196F3]" />
                )}
              </button>

              {openQuestion === index && (
                <p className="text-gray-600 text-sm leading-relaxed mt-2 pr-2 border-t border-gray-100 pt-3">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
