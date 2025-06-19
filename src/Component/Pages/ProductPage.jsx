import React from "react";
import Navbar from "../Ui/Navbar";
import Footer from "../Ui/Footer";
import Product from "./Product/"
import img from '../../assets/screw1.jpeg'

export default function ProductPage() {
  return (
    <>
    <Navbar/>
      <Product link={'../product/1'} img={img}/>
    <Footer/>
    </>
  );
}
