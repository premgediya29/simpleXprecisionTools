import React from 'react'
import Footer from '../Ui/Footer'
import Navbar from '../Ui/Navbar'
import AboutUs from './AboutUs'

export default function AboutUsPage() {
  return (
    <div className="bg-white">
        <Navbar />
        <AboutUs/>
        <Footer/>
      </div>
  )
}
