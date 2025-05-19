"use client"

import Image from "next/image";
import styles from "@/app/components/footballBanner/footballBanner.module.css";

export default function FootballBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.textContainer}>
        <h2 className={styles.h2}>Paixão pelo Futebol</h2>
        <p className={styles.p}>
          Jogue, treine e viva o futebol com intensidade! Entre para nossa equipe e 
          aprimore suas habilidades com os melhores treinadores e uma estrutura de ponta.
        </p>
      </div>
      <Image
        src="/images/futebol.jpg"
        alt="Futebol"
        className={styles.image}
        width={600}
        height={400}
        priority
      />
    </section>
  );
}
