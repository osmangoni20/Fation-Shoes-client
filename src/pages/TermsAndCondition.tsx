import React from 'react';

const TermsAndCondition = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8 lg:p-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center text-gray-800">
          Terms and Conditions
        </h1>

        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          Welcome to our e-commerce application. These terms and conditions outline the rules and regulations for the use of our website.
        </p>

        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          By accessing this website, we assume you accept these terms and conditions. Do not continue to use the website if you do not agree to all of the terms and conditions stated on this page.
        </p>

        {/* Section: License */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          1. License
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          Unless otherwise stated, we own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from the website for your own personal use, subject to restrictions set in these terms and conditions.
        </p>

        {/* Section: User Responsibilities */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          2. User Responsibilities
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">You must not:</p>
        <ul className="list-disc list-inside mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          <li>Republish material from our website</li>
          <li>Sell, rent, or sub-license material from our website</li>
          <li>Reproduce, duplicate, or copy material from our website</li>
          <li>Redistribute content from our website without permission</li>
        </ul>

        {/* Section: Products and Services */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          3. Products and Services
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          We reserve the right to limit the sales of our products or services to any person, geographic region, or jurisdiction. All descriptions of products or product pricing are subject to change at any time without notice.
        </p>

        {/* Section: Payment and Billing */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          4. Payment and Billing
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          You agree to provide current, complete, and accurate purchase and account information for all purchases made via our website. We reserve the right to refuse any order you place with us.
        </p>

        {/* Section: Limitation of Liability */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          5. Limitation of Liability
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          In no event shall we or our suppliers be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use or inability to use our services or products.
        </p>

        {/* Section: Termination */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          6. Termination
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          We may terminate or suspend your access to our services immediately, without prior notice, for any reason whatsoever, including without limitation if you breach these terms and conditions.
        </p>

        {/* Section: Governing Law */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          7. Governing Law
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          These terms and conditions are governed by and construed in accordance with the laws of [Country/State]. You agree to submit to the exclusive jurisdiction of the courts located in [City, Country/State].
        </p>

        {/* Section: Changes to Terms and Conditions */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          8. Changes to Terms and Conditions
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          We reserve the right to modify these terms at any time. It is your responsibility to review these terms periodically for any changes.
        </p>

        <p className="mt-8 text-gray-700 text-sm sm:text-base lg:text-lg">
          Last updated: [Date]
        </p>
      </div>
    </div>
  );
};

export default TermsAndCondition;
