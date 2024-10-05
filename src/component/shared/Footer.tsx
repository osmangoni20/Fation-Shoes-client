import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
 
  <footer className="md:grid sm:grid-cols-1 md:grid-cols-4 justify-center items-center text-center flex flex-wrap p-6 bg-[#514F4D] text-white">
      {/* Company Info */}
      <nav className="mb-6 md:mb-0">
        <h6 className="text-white uppercase font-montserrat font-semibold">
          Fation Shoe
        </h6>
        <p>Shoe Fashion Bangladesh Limited</p>
        <ul className="mt-4">
          <li className="flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p className="text-sm md:text-base">
              House 10, Road 12, Academy Road, Feni Sodor, Chittagong,
              Bangladesh
            </p>
          </li>
          <li className="flex items-center justify-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                clip-rule="evenodd"
              />
            </svg>

            <p className="text-sm md:text-base">+8801878473789</p>
          </li>
          <li className="flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
              <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
            </svg>

            <p className="text-sm md:text-base">fationshoe@gmail.com</p>
          </li>
        </ul>
      </nav>

      {/* Company Links */}
      <nav className="mb-6 md:mb-0 text-center">
        <h6 className="footer-title text-white">Company</h6>
        <Link to="/about" className="link link-hover block mb-2">
          About Us
        </Link>
        <Link to="/contact" className="link link-hover block mb-2">
          Contact
        </Link>
        <Link to="/privacy_policy" className="link link-hover block mb-2">
          Privacy Policy
        </Link>
        <Link to="/cookie_policy" className="link link-hover block mb-2">
          Cookie Policy
        </Link>
        <Link to="/terms_condition" className="link link-hover block mb-2">
          Terms & Conditions
        </Link>
      </nav>

      {/* Help Links */}
      <nav className="mb-6 md:mb-0">
        <h6 className="footer-title text-white">Help</h6>
        <Link to="/payment_service" className="link link-hover block mb-2">
          Payment
        </Link>
        <Link to="/shipping_service" className="link link-hover block mb-2">
          Shipping
        </Link>
        <Link to="/return_replacement" className="link link-hover block mb-2">
          Return and Replacement
        </Link>
        <Link to="/contact" className="link link-hover block mb-2">
          Chat With Us
        </Link>
      </nav>

      {/* Social Links */}
      <nav>
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
