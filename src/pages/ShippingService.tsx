import React from 'react';

const ShippingService = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8 md:p-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
          Shipping Services
        </h1>

        <p className="mb-4 sm:mb-6 text-gray-700 text-sm sm:text-base md:text-lg">
          We are committed to delivering your order in a timely manner and with utmost care. Below are the details regarding our shipping services, methods, and timeframes.
        </p>

        {/* Section: Shipping Methods */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 sm:mt-8 mb-4 text-gray-800">
          1. Shipping Methods
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          <li><strong>Standard Shipping:</strong> Delivery within 5-7 business days.</li>
          <li><strong>Express Shipping:</strong> Delivery within 2-3 business days.</li>
          <li><strong>Overnight Shipping:</strong> Next-business-day delivery for orders placed before [Time].</li>
          <li><strong>International Shipping:</strong> Delivery time varies (typically 7-14 business days).</li>
        </ul>

        {/* Section: Shipping Rates */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 sm:mt-8 mb-4 text-gray-800">
          2. Shipping Rates
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          Shipping rates are based on the weight and size of your package and your location. These rates will be displayed at checkout.
        </p>
        <p className="mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          Free standard shipping is available for orders above [Order Amount]. Express and overnight shipping options have additional charges.
        </p>

        {/* Section: Shipping Timeframes */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 sm:mt-8 mb-4 text-gray-800">
          3. Shipping Timeframes
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          <li><strong>Standard Shipping:</strong> 5-7 business days.</li>
          <li><strong>Express Shipping:</strong> 2-3 business days.</li>
          <li><strong>Overnight Shipping:</strong> 1 business day.</li>
          <li><strong>International Shipping:</strong> 7-14 business days.</li>
        </ul>

        {/* Section: International Shipping */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 sm:mt-8 mb-4 text-gray-800">
          4. International Shipping
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          We offer international shipping to select countries. Delivery times may vary based on customs processing in your country. Any customs duties or fees are the responsibility of the recipient.
        </p>

        {/* Section: Tracking */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 sm:mt-8 mb-4 text-gray-800">
          5. Tracking Your Order
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          Once your order is shipped, you will receive an email with tracking information to follow the shipment.
        </p>

        {/* Section: Shipping Delays */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 sm:mt-8 mb-4 text-gray-800">
          6. Shipping Delays
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          Occasional delays may occur due to factors beyond our control (e.g., weather or customs). Please contact us if your order is delayed.
        </p>

        {/* Section: Shipping Restrictions */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 sm:mt-8 mb-4 text-gray-800">
          7. Shipping Restrictions
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          Certain regions may have shipping restrictions. If shipping is unavailable for your location, it will be indicated at checkout.
        </p>

        {/* Section: Contact */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 sm:mt-8 mb-4 text-gray-800">
          8. Contact Us
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
          For any shipping inquiries, contact us at [Customer Service Email] or [Phone Number].
        </p>

        <p className="text-gray-600 text-xs sm:text-sm mt-8">Last updated: [Date]</p>
      </div>
    </div>
  );
};

export default ShippingService;