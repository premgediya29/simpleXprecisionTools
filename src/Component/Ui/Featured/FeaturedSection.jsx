import React from "react";
import img1 from "../../../assets/abt-us-img-min.png";
import { Link } from "react-router-dom";
import {
  FaThumbsUp, FaPuzzlePiece, FaUserCircle, FaListAlt,
  FaTools, FaHandHoldingUsd, FaTruck, FaHeadset
} from 'react-icons/fa';

export default function FeaturedSection() {
  const features = [
    { icon: <FaThumbsUp size={40} />, title: "Qualitative", subtitle: "products" },
    { icon: <FaPuzzlePiece size={40} />, title: "Dexterous team of", subtitle: "professionals" },
    { icon: <FaUserCircle size={40} />, title: "Client-centric", subtitle: "approach" },
    { icon: <FaListAlt size={40} />, title: "Wide range", subtitle: "of products" },
    { icon: <FaTools size={40} />, title: "Customized", subtitle: "product" },
    { icon: <FaHandHoldingUsd size={40} />, title: "CPC", subtitle: "focused" },
    { icon: <FaTruck size={40} />, title: "Prompt", subtitle: "delivery" },
    { icon: <FaHeadset size={40} />, title: "Customer", subtitle: "support" },
  ];

  return (
    <div className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full lg:w-1/2 overflow-hidden rounded-xl shadow-lg">
          <img
            src={img1}
            alt="Specific Polymers Building"
            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
           simpleXprecisionTools
          </h2>
          <p className="text-gray-800 font-semibold mb-4">
            We, simpleXprecisionTools LLP specialise in tools application engineering...
          </p>
          <p className="text-gray-600 mb-6">
            We strive to fill the gap between academic and industrial research by offering precision tools...
          </p>
          <a href="#about-us">
            <button className="bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300">
              LEARN MORE ABOUT US <span className="text-xl">➔</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
