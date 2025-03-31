"use client"; // 🔹 Importante para evitar erro no Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image"; // Importando o componente <Image />
import styles from "@/app/components/centerBanner.tsx/centerBanner.module.css";

export default function CenterBanner() {
  return (
    <div className={styles.bannerContainer}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <Image
            src="/images/slide1.jpg"
            alt="Slide 1"
            width={500}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image
            src="/images/slide2.jpg"
            alt="Slide 2"
            width={500}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image
            src="/images/slide3.jpg"
            alt="Slide 3"
            width={500}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image
            src="/images/slide4.jpg"
            alt="Slide 4"
            width={500}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image
            src="/images/slide5.jpg"
            alt="Slide 5"
            width={500}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image
            src="/images/slide6.jpg"
            alt="Slide 6"
            width={500}
            height={300}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}