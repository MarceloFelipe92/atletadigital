"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "@/app/components/cardCarousel/cardCarousel.module.css";
import Image from "next/image";
import images from "@/constants/images"; 

export default function CardCarousel() {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={15} 
        slidesPerView={6}
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        navigation 
        loop
      >
        {Object.entries(images.cards).map(([key, cardImage], index) => (
          <SwiperSlide key={key}>
            <div className={styles.card}>
              <Image 
                src={cardImage} 
                alt={`Card ${index + 1}`} 
                width={300} 
                height={200} 
                // layout="responsive" // Tenta tornar a imagem responsiva
                className={styles.image} 
                // priority
              />
              <h3 className={styles.title}>Card {index + 1}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
