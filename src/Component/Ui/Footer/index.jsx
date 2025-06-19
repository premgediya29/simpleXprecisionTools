import React from "react";
import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-router-dom";
// import logo from "../../../assets/h-logo-min.png";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-700 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo and Branding */}
        <div>
          <Link to="/">
            {/* <img
              src={logo}
              alt="Ishit Polymers Logo"
              className="h-16 w-auto mb-4"
            /> */}
            <h1>simpleXprecisionTools</h1>
          </Link>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT INFO</h3>
          <p className="mb-2">+91-99413 13499</p>
          <p className="mb-2">+91-93286 82413</p>
          <p className="mb-2">sales@simpleXprecisionTools.com</p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-bold mb-4">OFFICE ADDRESS</h3>
          <p className="mb-2">
            5th floor, Everest enclave,<br />
            Sadhuvasvani Main Road, Rajkot<br />
            360005, Gujarat – India
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/#about-us" className="hover:text-gray-300">About Us</Link>
            </li>
            <li>
              <Link to="/#contact-us" className="hover:text-gray-300">Contact Us</Link>
            </li>
            <li>
              <Link to="/Products" className="hover:text-gray-300">Product</Link>
            </li>
          </ul>
        </div>

        {/* Google Map Embed */}
        <div>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.1576518057634!2d70.7839!3d22.758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca339d52b3c3%3A0x329f6f5f04a42c96!2sAsphalt%20Syndicate%20LLP!5e0!3m2!1sen!2sin!4v1718700000000!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <div>
          &copy; {new Date().getFullYear()} simpleXprecisionTools LLP, All Rights Reserved.
        </div>
        <div className="mt-3 md:mt-0">
          Managed by <span className="font-semibold text-white">Infix Technology</span>
        </div>
      </div>
    </footer>
  );
}
