import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section id="contact-us" className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Contact Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-red-500 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Address</h4>
            <p className="text-gray-600">
              123 Industrial Park, Phase 4<br />
              Pune, Maharashtra, India
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
            <FaPhoneAlt className="text-green-500 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Phone</h4>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
            <FaEnvelope className="text-blue-500 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Email</h4>
            <p className="text-gray-600">info@simpleXprecisionTools.com</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
            <FaClock className="text-yellow-500 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Working Hours</h4>
            <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
