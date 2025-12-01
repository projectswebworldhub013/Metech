import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="px-6 lg:px-28 py-20 bg-white text-gray-800">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-light text-[#2196F3] mb-4">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          These Terms & Conditions (“Terms”) govern your use of the MeTech Systems
          India website, products, and services. By accessing our website or
          interacting with our company, you agree to comply with these Terms.
        </p>
      </div>

      <div className="space-y-10 max-w-4xl">

        {/* 1. Agreement */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By using our website, submitting inquiries, or purchasing products
            from MeTech Systems India (“we”, “our”, “us”), you acknowledge that you
            have read, understood, and agreed to these Terms.
          </p>
        </div>

        {/* 2. Products */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">
            2. Products & Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            MeTech Systems India manufactures and supplies elevator and escalator
            components engineered with safety, precision, and durability. All
            product specifications, images, descriptions, and technical details are
            subject to change without notice as part of our continuous improvement.
          </p>
        </div>

        {/* 3. Orders */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">
            3. Orders & Pricing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            All orders placed with us are subject to availability and approval.
            Pricing may vary based on:
          </p>
          <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
            <li>Product type and specifications</li>
            <li>Quantity and customization</li>
            <li>Shipping or logistics requirements</li>
            <li>Market fluctuations or material costs</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Any quotation provided by us is valid only for the duration mentioned
            in the quote.
          </p>
        </div>

        {/* 4. Payments */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">
            4. Payment Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Payments must be made through the modes accepted and communicated by
            MeTech Systems India. Orders will be processed only after confirmation
            of payment unless otherwise agreed. Partial payments are allowed only
            if explicitly approved.
          </p>
        </div>

        {/* 5. Warranty */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">
            5. Warranty & Quality Assurance
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All our components undergo strict quality checks. Warranty coverage,
            if applicable, varies by product and will be communicated at the time
            of purchase. Misuse, incorrect installation, or unauthorized
            modifications void the warranty.
          </p>
        </div>

        {/* 6. Liability */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            MeTech Systems India is not liable for any indirect, incidental,
            special, or consequential damages arising from the use or inability to
            use our products or website. Installation, operation, and maintenance
            must be performed by trained professionals.
          </p>
        </div>

        {/* 7. Website Usage */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">
            7. Website Usage Rules
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            You agree not to:
          </p>
          <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
            <li>Copy or misuse our website content</li>
            <li>Attempt to hack, disrupt, or damage the website</li>
            <li>Use our brand name for unauthorized commercial purposes</li>
            <li>Submit false or misleading information</li>
          </ul>
        </div>

        {/* 8. Intellectual Property */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">
            8. Intellectual Property Rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All content, logos, product names, photos, and designs on the MeTech
            Systems India website are protected intellectual property. No material
            may be reproduced, distributed, or reused without written permission.
          </p>
        </div>

        {/* 9. Termination */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">
            9. Termination of Access
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may restrict or terminate access to our website or services
            without prior notice if any misuse or violation of these Terms is
            detected.
          </p>
        </div>

        {/* 10. Changes */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">
            10. Updates to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            MeTech Systems India reserves the right to modify, update, or change
            these Terms at any time without prior notice. Continued use of our
            website indicates acceptance of the updated Terms.
          </p>
        </div>

        {/* 11. Contact */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0A6CD5] mb-3">
            11. Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For questions or concerns regarding these Terms & Conditions, you may
            contact us at:
          </p>

          <div className="mt-4 bg-[#E3F2FD] p-5 rounded-xl border-l-4 border-[#2196F3]">
            <p className="text-gray-800 font-medium">
              <strong>Email:</strong> Metechsystemsindia@gmail.com
            </p>
            <p className="text-gray-800 font-medium mt-2">
              <strong>Address:</strong><br />
              Hs Mujtaba Apartments, House No. 9-3-58/D/39,<br />
              Ground Floor, Nearby Moti Darwaza, Ahmed Colony,<br />
              Baghdad Colony, Langar Houz,<br />
              Hyderabad, Telangana 500008
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

export default TermsAndConditions;
