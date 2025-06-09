import gsap from "gsap";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay,  Navigation } from "swiper/modules";

const Section01 = () => {
  useEffect(() => {
    const overlayText = gsap.timeline();
    overlayText
      .fromTo(
        ".main-bg-overlay-text p",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }
      )
      .fromTo(
        ".main-bg-overlay-text span",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }
      );
  }, []);

  return (
    <section className="section-main-bg section01" >
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false, 
        }}
        navigation={true}
        loop={true} 
        className="mySwiper" 
      >
        <SwiperSlide className="main-bg01"></SwiperSlide>
        <SwiperSlide className="main-bg02"></SwiperSlide>
        <SwiperSlide className="main-bg03"></SwiperSlide>

      </Swiper>
      <div className="main-bg-overlay-text">
        <p>
          무한한 상상력, 빛으로 펼쳐지는 시각적 서정 <br />
          <span>Visual Poetry</span>에서 경험하세요.
        </p>
      </div>
    </section>
  );
};
export default Section01;
