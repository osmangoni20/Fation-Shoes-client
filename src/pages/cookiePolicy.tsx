import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8 lg:p-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center text-gray-800">
          Cookie Policy
        </h1>

        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          This Cookie Policy explains how we use cookies and similar tracking technologies on our e-commerce platform. By using our site, you agree to the use of cookies in accordance with this policy.
        </p>

        {/* Section: What Are Cookies */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          1. What Are Cookies?
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          Cookies are small text files stored on your device by your web browser. They help us recognize your device and remember information about your visit, such as your preferences or actions taken on the site.
        </p>

        {/* Section: How We Use Cookies */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          2. How We Use Cookies
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">We use cookies for the following purposes:</p>
        <ul className="list-disc list-inside mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          <li>
            <strong>Essential Cookies:</strong> These cookies are necessary for the operation of our website, enabling you to navigate and use features like shopping carts and secure areas.
          </li>
          <li>
            <strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our site by collecting information about page views, traffic sources, and other metrics.
          </li>
          <li>
            <strong>Functionality Cookies:</strong> These cookies allow us to remember choices you make (like your username or language preferences) to improve your experience.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> We may use these cookies to show you relevant advertisements based on your interests and browsing activity.
          </li>
        </ul>

        {/* Section: Third-Party Cookies */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          3. Third-Party Cookies
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          We may allow third-party services, such as analytics providers or advertisers, to place cookies on your device to help us deliver content or ads that are more relevant to you. These third parties may collect information about your online activities across different websites.
        </p>

        {/* Section: Managing Cookies */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          4. Managing Cookies
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          You can control the use of cookies through your browser settings. Most browsers allow you to delete or block cookies, and some browsers can notify you before cookies are stored. However, disabling cookies may affect the functionality of our website and limit your access to certain features.
        </p>

        {/* Section: Cookie Preferences */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          5. Cookie Preferences
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          You can manage your cookie preferences directly on our website through the cookie banner that appears on your first visit. This allows you to accept or reject non-essential cookies.
        </p>

        {/* Section: Changes to This Cookie Policy */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          6. Changes to This Cookie Policy
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          We may update this Cookie Policy from time to time. Any changes will be posted on this page, and we encourage you to review this policy periodically to stay informed about how we are using cookies.
        </p>

        {/* Section: Contact Us */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          7. Contact Us
        </h2>
        <p className="mb-4 text-gray-700 text-sm sm:text-base lg:text-lg">
          If you have any questions about our use of cookies, please contact us at: [Your Contact Information].
        </p>

        <p className="text-gray-600 text-sm mt-8">Last updated: [Date]</p>
      </div>
    </div>
  );
};

export default CookiePolicy;
