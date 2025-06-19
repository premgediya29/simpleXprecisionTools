import React, { useEffect } from "react";
import HomeDashboard from "./Home/HomeDashboard";
import Nav from "../Ui/Navbar";
import FeaturedSection from "../Ui/Featured/FeaturedSection";
import NormalSlider from "../Ui/NormalSlider";

import Footer from "../Ui/Footer";
import ProductCard from "../Ui/ProductCard";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import { useLocation } from "react-router-dom";

export default function HomePage() {

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "about-us") {
      const el = document.getElementById("about-us");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    if (location.state?.scrollTo === "contact-us") {
      const el = document.getElementById("contact-us");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
      <Nav />
      <div className="bg-gray-800 pt-16">
        <HomeDashboard />
        <FeaturedSection />
        <AboutUs />
        
        {/* <NormalSlider/> */}
        <ProductCard Heading={"Featured Product"} />

      </div>
      <ContactUs />
      <Footer />
    </>
  );
}
