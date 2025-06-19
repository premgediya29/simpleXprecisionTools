import React from "react";
import visionMissionImage from "../../../assets/abut_2.png";
import {
  FaThumbsUp,
  FaPuzzlePiece,
  FaUserCircle,
  FaListAlt,
  FaTools,
  FaHandHoldingUsd,
  FaTruck,
  FaHeadset,
} from 'react-icons/fa';

const AboutUs = () => {
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
    <>
      {/* ✅ Vision and Mission Section */}
      <section id="about-us" className="bg-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={visionMissionImage}
              alt="Vision and Mission"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">simpleXprecisionTools LLP</h2>
            <p className="text-gray-700 leading-relaxed">
              We, simpleXprecisionTools LLP specialise in tools application engineering. We are mainly focused in solid carbide endmill & ballnose, carbide drills, carbide inserts, circular saw blade, Bi-metal band saw blade.
              We are one of the pioneers in Tool Engineering and with the practical experience in metal cutting tools & its various applications,
              we are in a position to render our technical services & bring down your tool cost per component.<br /><br />
              simpleXprecisionTools suggests & supplies the appropriate tool after studying your application, which can solve problems or maximise business productivity.<br /><br />
              simpleXprecisionTools LLP is bound to share their expertise and support with customers to build a greater INDIA.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Features Section */}
      <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto w-full text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">WHY CHOOSE US</h2>
          <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
            We are actively committed to offering premium quality range of products within the minimum time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-gray-600 mb-4 flex justify-center">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                <p className="text-gray-600">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
