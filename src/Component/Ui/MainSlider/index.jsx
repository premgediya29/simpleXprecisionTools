import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

import img1 from '../../../assets/images (1).jpeg'
import img2 from '../../../assets/abt-us-img-min.png'
import img3 from '../../../assets/images.jpeg'

export default function ResponsiveFadeZoomSlider() {
  const swiperRef = useRef(null);
  const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 }
  ];

  const resetZoomAnimation = () => {
    const activeSlide = document.querySelector('.swiper-slide-active .zoom-img');
    if (activeSlide) {
      activeSlide.classList.remove('animate-zoomSlow');
      void activeSlide.offsetWidth;
      activeSlide.classList.add('animate-zoomSlow');
    }
  };

  useEffect(() => {
    const timer = setTimeout(resetZoomAnimation, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full mx-auto relative">
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        onSlideChange={resetZoomAnimation}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]"
        breakpoints={{
          // when window width is >= 320px
          320: {
            pagination: {
              dynamicBullets: false
            }
          },
          // when window width is >= 640px
          640: {
            pagination: {
              dynamicBullets: true
            }
          }
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className="relative">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={image.src}
                alt={`Slide ${image.id}`}
                className="zoom-img w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Responsive Pagination */}
      <div className="swiper-pagination !bottom-2 sm:!bottom-4 md:!bottom-6"></div>

      {/* Responsive Navigation Arrows - Hidden on mobile */}
      {/* <div className="swiper-button-next hidden sm:!flex !text-white !bg-black/30 hover:!bg-black/50 !w-8 !h-8 md:!w-10 md:!h-10 after:!text-sm md:after:!text-base"></div>
      <div className="swiper-button-prev hidden sm:!flex !text-white !bg-black/30 hover:!bg-black/50 !w-8 !h-8 md:!w-10 md:!h-10 after:!text-sm md:after:!text-base"></div> */}

      <style jsx global>{`
        .swiper-slide-active .zoom-img {
          animation: zoomSlow 5s ease-in-out forwards;
        }
        @keyframes zoomSlow {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        /* Responsive pagination bullets */
        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.6);
          width: 8px;
          height: 8px;
          opacity: 1;
          transition: all 0.3s ease;
          margin: 0 4px !important;
        }
        @media (min-width: 640px) {
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            margin: 0 6px !important;
          }
        }
        .swiper-pagination-bullet-active {
          background: white;
          width: 20px;
          border-radius: 5px;
        }
        @media (min-width: 640px) {
          .swiper-pagination-bullet-active {
            width: 30px;
          }
        }
      `}</style>
    </div>
  );
}