import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
 
  <footer className="px-10 lg:grid sm:grid-cols-1 md:flex md:flex-wrap md:justify-between 
  lg:grid-cols-4    p-6 bg-[#514F4D] text-white">
      {/* Company Info */}
      <nav className="mb-6 lg:mb-0 md:min-w-full ">
        <h6 className="uppercase text-[#FFFFF4] font-montserrat font-semibold">
          Fation Shoe
        </h6>
        <p>Shoe Fashion Bangladesh Limited</p>
        <ul className="md:mt-4">
        <li className="flex items-center gap-2 mb-2">
            <p className="text-sm font-bold font-montserrat">Address: </p>
            <p className="text-sm lg:text-base text-gray-200">
              House 10, Road 12, Academy Road, Feni Sodor, Chittagong,
              Bangladesh
            </p>
          </li>
          <li className="flex items-center justify-start gap-2">
           <p className="text-sm font-bold font-montserrat">Hotline:</p>

            <p className="text-sm lg:text-base text-gray-200">7722</p>
          </li>
          <li className="flex items-center  gap-2 mb-2">
            <p className="text-sm font-bold font-montserrat">Phone: </p>

            <p className="text-sm lg:text-base text-gray-200">+8801878473789</p>
          </li>
          <li className="flex items-center justify-start gap-2">
           <p className="text-sm font-bold font-montserrat">Email:</p>

            <p className="text-sm lg:text-base text-gray-300">fationshoe@gmail.com</p>
          </li>
          
        </ul>
      </nav>

      {/* Company Links */}
      <nav className="mb-6 lg:mb-0 lg:mx-auto">
        <h6 className="footer-title text-white">Company</h6>
        <a href="/about" className="link link-hover block mb-2">
          About Us
        </a>
        <a href="/contact" className="link link-hover block mb-2">
          Contact
        </a>
        <a href="/privacy_policy" className="link link-hover block mb-2">
          Privacy Policy
        </a>
        <a href="/cookie_policy" className="link link-hover block mb-2">
          Cookie Policy
        </a>
        <a href="/terms_condition" className="link link-hover block mb-2">
          Terms & Conditions
        </a>
      </nav>

      {/* Help Links */}
      <nav className="mb-6 lg:mb-0 lg:mx-auto">
        <h6 className="footer-title text-white">Help</h6>
        <a href="/payment_service" className="link link-hover block mb-2">
          Payment
        </a>
        <a href="/shipping_service" className="link link-hover block mb-2">
          Shipping
        </a>
        <a href="/return_replacement" className="link link-hover block mb-2">
          Return and Replacement
        </a>
        <a href="/contact" className="link link-hover block mb-2">
          Chat With Us
        </a>
      </nav>

      {/* Social Links */}
      <nav className="mb-6 lg:mb-0 lg:mx-auto">
        <h6 className="footer-title text-white">Social</h6>
        <Link
          target="_blank"
          to="https://facebook.com"
          className="link link-hover block mb-2"
        >
          Facebook
        </Link>
        <Link
          target="_blank"
          to="https://linkedin.com"
          className="link link-hover block mb-2"
        >
          LinkedIn
        </Link>
        <Link
          target="_blank"
          to="https://youtube.com"
          className="link link-hover block mb-2"
        >
          YouTube
        </Link>
        <Link
          target="_blank"
          to="https://instagram.com"
          className="link link-hover block mb-2"
        >
          Instagram
        </Link>
        <Link
          target="_blank"
          to="https://twitter.com"
          className="link link-hover block mb-2"
        >
          Twitter
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
