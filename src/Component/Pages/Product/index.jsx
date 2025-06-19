import React from 'react'
import bgImage from "../../../assets/bg.jpg";
import ProductCard from "../../Ui/ProductCard";

export default function index({link,img}) {
  return (
    <div className="bg-white text-gray-800 pt-16">
    {/* Banner Section */}
    <div className="relative">
      <div
        className="h-50 ld:h-[300px] md:h-[300px] bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <h1 className="text-4xl font-bold">Products</h1>
        <div className="mt-2 border-b-2 border-sky-400 w-16"></div>
      </div>
    </div>

    {/* 🔹 Global Presence Section */}
    <div className="bg-gradient-to-b from-sky-50 to-white py-16 relative z-0">

      <ProductCard  link={link} img={img}/>
      </div>
  </div>
  )
}
