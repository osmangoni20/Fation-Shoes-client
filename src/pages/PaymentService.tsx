import React from 'react';

const PaymentService = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8 md:p-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
          Payment Services
        </h1>

        <p className="mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          Our e-commerce platform supports a variety of secure payment methods to make your shopping experience as seamless and safe as possible. Below are the details of the available payment options.
        </p>

        {/* Section: Accepted Payment Methods */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          1. Accepted Payment Methods
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          We accept the following payment methods:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          <li>Credit Cards (Visa, MasterCard, American Express, Discover)</li>
          <li>Debit Cards</li>
          <li>PayPal</li>
          <li>Apple Pay and Google Pay</li>
          <li>Bank Transfers (where applicable)</li>
        </ul>

        {/* Section: How We Protect Your Payments */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          2. How We Protect Your Payments
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          We prioritize your security. Our platform uses industry-leading encryption protocols (SSL) to ensure that your personal and financial information is protected during payment transactions. Additionally:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          <li>We do not store your full card details on our servers.</li>
          <li>We are PCI DSS compliant, ensuring a secure payment environment.</li>
          <li>All third-party payment processors we use are fully secured and certified.</li>
        </ul>

        {/* Section: Payment Processing Times */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          3. Payment Processing Times
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          The payment process will begin once you confirm your order. Payment processing times may vary depending on the payment method:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          <li><strong>Credit/Debit Cards:</strong> Immediate authorization and charge upon checkout.</li>
          <li><strong>PayPal:</strong> Immediate payment.</li>
          <li><strong>Bank Transfer:</strong> Payments may take up to 3-5 business days to process.</li>
        </ul>

        {/* Section: Payment Issues */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          4. Payment Issues
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          In case of any issues during the payment process, please follow these steps:
        </p>
        <ul className="list-decimal list-inside mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          <li>Ensure your payment details are correct and up to date.</li>
          <li>Check if your card has sufficient funds or if your PayPal account is linked properly.</li>
          <li>Contact your bank or payment provider for any transaction issues.</li>
          <li>If the problem persists, contact our customer service at [Customer Service Email] or [Phone Number].</li>
        </ul>

        {/* Section: Currency & Conversion Fees */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          5. Currency & Conversion Fees
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          All prices listed on our platform are in [Currency]. If you are making a purchase from a different country or region, your payment method provider may charge currency conversion fees. Please check with your bank or payment provider for any additional fees.
        </p>

        {/* Section: Refunds & Cancellations */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          6. Refunds & Cancellations
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          If you request a refund or cancel your order, the refund will be processed to the original payment method used for the purchase. Refund processing times may vary depending on the payment method:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          <li><strong>Credit/Debit Cards:</strong> Refunds may take 5-10 business days to reflect in your account.</li>
          <li><strong>PayPal:</strong> Refunds are typically processed within 1-2 business days.</li>
          <li><strong>Bank Transfers:</strong> Refunds may take up to 7-14 business days, depending on your bank.</li>
        </ul>

        {/* Section: Contact Us */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          7. Contact Us
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          If you have any questions regarding payment services, please contact us at [Customer Service Email] or call us at [Phone Number].
        </p>

        <p className="text-gray-600 text-xs sm:text-sm mt-8">Last updated: [Date]</p>
      </div>
    </div>
  );
};

export default PaymentService;
