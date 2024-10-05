import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8 lg:p-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center text-gray-800">
          Privacy Policy
        </h1>

        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          This Privacy Policy describes how we handle your personal information when you use our e-commerce platform. We are committed to ensuring that your privacy is protected.
        </p>

        {/* Section: Information We Collect */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          1. Information We Collect
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">We may collect the following types of information:</p>
        <ul className="list-disc list-inside mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          <li>Personal Identification Information: such as your name, email address, phone number, and shipping details.</li>
          <li>Payment Information: payment card details or other payment information necessary for transactions.</li>
          <li>Usage Data: such as IP addresses, browser type, and activity on our platform.</li>
        </ul>

        {/* Section: How We Use Your Information */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          2. How We Use Your Information
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">The information we collect is used for:</p>
        <ul className="list-disc list-inside mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          <li>Processing transactions</li>
          <li>Managing your orders and deliveries</li>
          <li>Improving our services and user experience</li>
          <li>Sending promotional emails or offers (if you opted in)</li>
          <li>Responding to customer service requests</li>
        </ul>

        {/* Section: Sharing Your Information */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          3. Sharing Your Information
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          We do not sell, trade, or rent your personal information. However, we may share your data with:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          <li>Third-party service providers for payment processing, shipping, or customer service</li>
          <li>Law enforcement if required by law or to protect our legal rights</li>
        </ul>

        {/* Section: Security of Your Data */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          4. Security of Your Data
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          We are committed to ensuring that your information is secure. We use encryption and other security measures to protect your personal data from unauthorized access or disclosure.
        </p>

        {/* Section: Cookies */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          5. Cookies
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          Our website uses cookies to improve your browsing experience. You can control the use of cookies in your browser settings. Disabling cookies may affect the functionality of our site.
        </p>

        {/* Section: Data Retention */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          6. Data Retention
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          We will retain your personal information only as long as necessary to fulfill the purposes for which we collected it, including any legal or accounting requirements.
        </p>

        {/* Section: Your Rights */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          7. Your Rights
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          You have the right to request access to, correction of, or deletion of your personal data. If you wish to exercise these rights, please contact us using the details provided below.
        </p>

        {/* Section: Changes to This Privacy Policy */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          8. Changes to This Privacy Policy
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          We reserve the right to update this privacy policy at any time. Any changes will be posted on this page, and the updated date will be noted.
        </p>

        {/* Section: Contact Us */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          9. Contact Us
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          If you have any questions about this privacy policy, please contact us at: [Your Contact Information].
        </p>

        <p className="text-gray-600 text-sm mt-8">Last updated: [Date]</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
