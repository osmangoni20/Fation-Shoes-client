import React from 'react';

const ReturnAndReplacement = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8 lg:p-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center text-gray-800">
          Return & Replacement Policy
        </h1>

        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          We want you to be completely satisfied with your purchase. If you're not happy with your product, you may be eligible for a return or replacement in accordance with the terms below.
        </p>

        {/* Section: Eligibility for Return */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          1. Eligibility for Return
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          Products may be eligible for return if they meet the following conditions:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          <li>The product is unused, unworn, and in its original packaging.</li>
          <li>The return is initiated within [Number of Days] days of receiving the product.</li>
          <li>Proof of purchase (e.g., receipt, order confirmation) is provided.</li>
          <li>Items are not marked as "Final Sale" or "Non-returnable" at the time of purchase.</li>
        </ul>

        {/* Section: Return Process */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          2. Return Process
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          To initiate a return, please follow these steps:
        </p>
        <ul className="list-decimal list-inside mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          <li>Contact our customer service team at [Customer Service Email] or [Phone Number].</li>
          <li>Provide your order number and the reason for return.</li>
          <li>Ship the product back to us using the instructions provided by customer service.</li>
          <li>Once we receive the product and verify its condition, we will issue a refund or replacement as per your preference.</li>
        </ul>

        {/* Section: Refund Policy */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          3. Refund Policy
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          Refunds will be processed to the original method of payment within [Number of Days] business days after we receive and inspect the returned product. Please note that shipping fees are non-refundable.
        </p>

        {/* Section: Replacement Policy */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          4. Replacement Policy
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          If you receive a defective or damaged product, you are eligible for a replacement. To request a replacement:
        </p>
        <ul className="list-decimal list-inside mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          <li>Contact our customer support within [Number of Days] days of receiving the product.</li>
          <li>Provide images of the defective or damaged product for verification.</li>
          <li>Once verified, we will ship a replacement product at no additional cost to you.</li>
        </ul>

        {/* Section: Non-Returnable Items */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          5. Non-Returnable Items
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          The following items are non-returnable:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          <li>Items marked as "Final Sale" or "Non-returnable".</li>
          <li>Personalized or custom-made items.</li>
          <li>Perishable goods such as food or flowers.</li>
          <li>Gift cards.</li>
          <li>Underwear or swimwear (for hygiene reasons).</li>
        </ul>

        {/* Section: Shipping Costs for Returns */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          6. Shipping Costs for Returns
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          You are responsible for paying the shipping costs for returning an item unless the item is defective or the return is due to our error. If you receive a refund, the cost of return shipping may be deducted from your refund.
        </p>

        {/* Section: Contact Us */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          7. Contact Us
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          If you have any questions or need further assistance, please contact our customer service team at [Customer Service Email] or call us at [Phone Number].
        </p>

        <p className="text-gray-600 text-xs sm:text-sm mt-8">Last updated: [Date]</p>
      </div>
    </div>
  );
};

export default ReturnAndReplacement;
