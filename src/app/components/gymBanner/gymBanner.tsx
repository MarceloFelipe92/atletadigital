"use client"

import Image from "next/image";
import styles from "@/app/components/gymBanner/gymBanner.module.css";

export default function GymBanner() {
  return (
    <section className={styles.banner}>
      <Image
        src="/images/academia.jpg"
        alt="Academia"
        className={styles.image}
        width={800}
        height={400}
        priority
      />
      <div className={styles.textContainer}>
        <h2 className={styles.h2}>Transforme seu Corpo</h2>
        <p className={styles.p}>
          Venha treinar na melhor academia da região! Equipamentos modernos, 
          treinadores qualificados e um ambiente motivador para você alcançar seus objetivos.
        </p>
      </div>
    </section>
  );
}
