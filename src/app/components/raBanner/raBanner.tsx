"use client";

import Image from "next/image";
import styles from "@/app/components/raBanner/raBanner.module.css";

export default function ARBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.textContainer}>
        <h2 className={styles.h2}>Explore a Realidade Aumentada</h2>
        <p className={styles.p}>
          Mergulhe em novas dimensões com a tecnologia de Realidade Aumentada. 
          Experimente inovação, interatividade e possibilidades infinitas!
        </p>
      </div>
      <Image
        src="/images/realidade-aumentada.jpg"
        alt="Realidade Aumentada"
        className={styles.image}
        width={600}
        height={400}
      />
    </section>
  );
}
