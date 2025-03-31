"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/app/components/bannerPrincipal/banner.module.css";
import images from "@/constants/images";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        {Object.values(images.banners).map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} alt={`Slide ${index + 1}`} width={2800} height={800} priority />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
