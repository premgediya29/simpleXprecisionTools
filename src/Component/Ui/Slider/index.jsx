import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export default function Testimonials() {
  return (
    <div className="w-[95%] tv:w-[80%] m-auto mt-[50px] tv:mt-0">
      {/* <h1 className="text-[20px] lg:text-3xl sm:text-xl md:text-2xl small:text-[22px] sp:text-[25px] tv:text-[35px] th:text-[38px] font-bold leading-[120%]">
        Featured Product
      </h1> */}

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
          1280: {
            slidesPerView: 1,
          },
        }}
        className="mt-[30px]"
      >
        {[1, 2, 3, 4].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card lg:card-side bg-white shadow-sm h-full mb-[45px]">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}