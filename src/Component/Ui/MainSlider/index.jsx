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
              {/* Gradient Overlay with Different Colors */}
              <div
                className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-blue-500/60 to-cyan-500/50"
                // style={{
                //   background:
                //     'linear-gradient(135deg, rgba(58, 123, 213, 0.65) 0%, rgba(0, 210, 255, 0.55) 60%, rgba(58, 255, 217, 0.45) 100%)'
                // }}
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h1 className="text-white text-center font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-lg px-4">
                  Welcome to SimpleXprecisionTools
                </h1>
              </div>
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={image.src}
                  alt={`Slide ${image.id}`}
                  className="zoom-img w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              </SwiperSlide>))}
      {/* <div className="swiper-button-next hidden sm:!flex !text-white !bg-black/30 hover:!bg-black/50 !w-8 !h-8 md:!w-10 md:!h-10 after:!text-sm md:after:!text-base"></div>
      <div className="swiper-button-prev hidden sm:!flex !text-white !bg-black/30 hover:!bg-black/50 !w-8 !h-8 md:!w-10 md:!h-10 after:!text-sm md:after:!text-base"></div> */}
      </Swiper>
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