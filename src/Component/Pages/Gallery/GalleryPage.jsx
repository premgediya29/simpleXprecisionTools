import React from 'react';
import event1 from '../../../assets/event1.jpeg';
import event2 from '../../../assets/event2.jpeg';
import exhibition1 from '../../../assets/exhibition1.jpeg';
import exhibition2 from '../../../assets/exhibition2.jpeg';
import pro1 from '../../../assets/pro1.jpeg';
import pro2 from '../../../assets/pro2.jpeg';

// ✅ Define Section
const Section = ({ title, images }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-semibold mb-4 text-gray-700">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`${title} ${index + 1}`} className="w-full h-auto rounded shadow" />
      ))}
    </div>
  </div>
);

const GalleryPage = () => {
  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Gallery</h1>

      <Section title="Events" images={[event1, event2, event1, event2]} />
      <Section title="Exhibitions" images={[exhibition1, exhibition2, exhibition1, exhibition2]} />
      <Section title="Products" images={[pro1, pro2, pro1, pro2]} />
    </div>
  );
};

export default GalleryPage;
