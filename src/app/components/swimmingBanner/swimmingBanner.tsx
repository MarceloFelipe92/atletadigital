"use client";

import styles from "@/app/components/swimmingBanner/swimmingBanner.module.css";

export default function SwimmingBanner() {
  return (
    <section className={styles.banner}>
      <img src="/images/natacao.jpg" alt="Natação" className={styles.image} />
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
