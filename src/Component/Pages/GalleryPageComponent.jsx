import React from 'react'
import Footer from '../Ui/Footer'
import Navbar from '../Ui/Navbar'
import GalleryPage from './Gallery/GalleryPage'


export default function GalleryPageComponent() {
    return (
        <div className="bg-white">
            <Navbar />
            <GalleryPage />
            <Footer />
        </div>
    )
}
