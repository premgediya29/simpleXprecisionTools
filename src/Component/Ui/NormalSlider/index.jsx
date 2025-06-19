import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

// Your images
import img1 from '../../../assets/slider1.jpg';
import img2 from '../../../assets/slider2.jpg';
import img3 from '../../../assets/Mslider1.jpg';
import img4 from '../../../assets/Mslider2.jpg';
import img5 from '../../../assets/Mslider3.jpg';

const Index = () => {
  const scrollerRef = useRef(null);
  const contentRef = useRef(null);

  const images = [img1, img2, img3, img4, img5];

  useEffect(() => {
    const content = contentRef.current;

    // Duplicate content until it overflows viewport
    const duplicateContent = () => {
      const totalWidth = content.scrollWidth;
      const parentWidth = content.parentElement.offsetWidth;

      while (content.scrollWidth < parentWidth * 2) {
        images.forEach((img, i) => {
          const clone = document.createElement('img');
          clone.src = img;
          clone.alt = `Slide clone ${i}`;
          clone.className = 'w-64 h-40 object-cover rounded-lg shadow-md flex-shrink-0';
          content.appendChild(clone);
        });
      }
    };

    duplicateContent();

    // GSAP animation
    const tween = gsap.fromTo(
      content,
      { x: 0 },
      {
        x: () => -content.scrollWidth / 2,
        duration: 20,
        ease: 'none',
        repeat: -1,
      }
    );

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-12 bg-white">
      <div ref={scrollerRef} className="mx-auto w-full overflow-hidden relative">
        <div
          ref={contentRef}
          className="scroller-content flex items-center space-x-8 w-max"
        >
          {images.map((img, i) => (
            <img
              key={`img-${i}`}
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-64 h-40 object-cover rounded-lg shadow-md flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
