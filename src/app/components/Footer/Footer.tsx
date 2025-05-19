"use client";

import styles from "@/app/components/Footer/Footer.module.css";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Seção Sobre */}
        <div className={styles.section}>
          <h3>Sobre</h3>
          <p>Seu e-commerce de confiança! Produtos de qualidade, entrega rápida e suporte dedicado.</p>
        </div>

        {/* Seção Links Rápidos */}
        <div className={styles.section}>
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="/sobreNos">Sobre Nós</a></li>
            <li><a href="/contato">Contato</a></li>
            <li><a href="/politicaPrivacidade">Política de Privacidade</a></li>
            <li><a href="/termosUso">Termos de Uso</a></li>
          </ul>
        </div>

        {/* Seção Contato */}
        <div className={styles.section}>
          <h3>Contato</h3>
          <ul>
            <li>Email: suporte@seuecommerce.com</li>
            <li>Telefone: (11) 99999-9999</li>
            <li>Endereço: Rua do E-commerce, 123 - São Paulo, SP</li>
          </ul>
        </div>

        {/* Seção Redes Sociais */}
        <div className={styles.social}>
          <h3>Nos siga</h3>
          <div className={styles.icons}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.icon} />
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className={styles.icon} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className={styles.icon} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} Seu E-commerce. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
