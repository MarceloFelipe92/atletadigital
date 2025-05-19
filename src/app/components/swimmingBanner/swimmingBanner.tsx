"use client";

import Image from "next/image";
import styles from "@/app/components/swimmingBanner/swimmingBanner.module.css";

export default function SwimmingBanner() {
  return (
    <section className={styles.banner}>
      <Image
        src="/images/natacao.jpg"
        alt="Natação"
        className={styles.image}
        width={800}
        height={400}
        priority
      />
      <div className={styles.textContainer}>
        <h2 className={styles.h2}>Mergulhe na Experiência</h2>
        <p className={styles.p}>
          Venha praticar natação com os melhores profissionais e uma estrutura 
          completa para seu desenvolvimento. Saúde, diversão e alta performance na água!
        </p>
      </div>
    </section>
  );
}
