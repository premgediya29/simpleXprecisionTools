import React from "react";
import ProductDescription from "./ProductDescription";
import Navbar from "../Ui/Navbar";
import Footer from "../Ui/Footer";

export default function ProductDescriptionPage({img}) {
  return (
    <>
      <Navbar />
      <div className="text-black bg-white ">
        <ProductDescription img={img} />
      </div>
      <Footer />
    </>
  );
}
