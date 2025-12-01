import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="px-6 lg:px-28 py-20 bg-white text-gray-800">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-light text-[#2196F3] mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          At MeTech Systems India, we are committed to protecting your personal
          information and maintaining transparency regarding how we handle your
          data. This Privacy Policy outlines how we collect, use, and safeguard
          your information.
        </p>
      </div>

      {/* Content */}
      <div className="space-y-10 max-w-4xl">

        {/* 1. Introduction */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            MeTech Systems India (“we”, “our”, “us”) respects your privacy and is
            committed to safeguarding your personal data. This policy applies to
            all users visiting our website or interacting with us through emails,
            calls, or forms.
          </p>
        </div>

        {/* 2. Information We Collect */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">
            2. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We may collect the following information:
          </p>
          <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
            <li>Name and contact details (email, phone number)</li>
            <li>Business or company information</li>
            <li>Messages or queries submitted through our contact forms</li>
            <li>Technical data such as IP address, browser type, and device info</li>
            <li>Usage data including pages visited and time spent on the website</li>
          </ul>
        </div>

        {/* 3. How We Use Your Information */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Your information is used to:
          </p>
          <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
            <li>Respond to your inquiries or service requests</li>
            <li>Provide product or service information</li>
            <li>Improve our website and customer experience</li>
            <li>Send updates, offers, or technical notifications</li>
            <li>Maintain internal records for business operations</li>
          </ul>
        </div>

        {/* 4. Data Protection */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">
            4. Data Protection & Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use secure servers, encryption, and industry-standard security
            practices to protect your data from unauthorized access, loss, or
            misuse. However, no online transmission is 100% secure, and we
            cannot guarantee absolute protection.
          </p>
        </div>

        {/* 5. Sharing of Information */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">
            5. Sharing of Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do NOT sell or rent your information.  
            We may share data only with:
          </p>

          <ul className="list-disc ml-6 text-gray-700 leading-relaxed mt-3">
            <li>Trusted service providers assisting in operations</li>
            <li>Legal authorities when required by law</li>
            <li>Internal team members for order or service processing</li>
          </ul>
        </div>

        {/* 6. Cookies */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">
            6. Cookies & Tracking
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may use cookies to enhance user experience, analyze
            traffic, and improve functionality. You can disable cookies in your
            browser settings at any time.
          </p>
        </div>

        {/* 7. Your Rights */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">
            7. Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            You may request:
          </p>
          <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
            <li>Access to your personal data</li>
            <li>Correction or update of your information</li>
            <li>Deletion of your data from our systems</li>
            <li>Opt-out from marketing communications</li>
          </ul>
        </div>

        {/* 8. Contact Us */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">
            8. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For any questions regarding this Privacy Policy, feel free to reach
            us at:
          </p>

          <div className="mt-4 bg-[#E3F2FD] p-5 rounded-xl border-l-4 border-[#2196F3]">
            <p className="text-gray-800 font-medium">
              <strong>Email:</strong> Metechsystemsindia@gmail.com
            </p>
            <p className="text-gray-800 font-medium mt-2">
              <strong>Address:</strong>  
              Hs Mujtaba Apartments, House No. 9-3-58/D/39,  
              Ground Floor, Nearby Moti Darwaza, Ahmed Colony,  
              Baghdad Colony, Langar Houz, Hyderabad, Telangana 500008
            </p>
          </div>
        </div>

        {/* Last updated */}
        <p className="text-sm text-gray-500 mt-8">
          Last Updated: {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
