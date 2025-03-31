"use client"

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/components/menuLateral/menuLateral.module.css";

const MenuLateral = () => {
  const [menuAberto, setMenuAberto] = useState(false); // Estado para alternar a visibilidade

  const toggleMenu = () => {
    setMenuAberto(!menuAberto); // Alterna o estado do menu
  };

  return (
    <div>
      {/* Ícone do Menu Lateral */}
      <button onClick={toggleMenu} className={styles.menuIcon}>
        ☰ {/* Ícone de Menu (Hamburger) */}
      </button>

      {/* Menu Lateral */}
      <div className={`${styles.menuLateral} ${menuAberto ? styles.abrir : styles.fechar}`}>
        <div className={styles.logo}>
          <h2>ATLETA DIGITAL</h2>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/academia" className={styles.link}>
                Academia
              </Link>
            </li>
            <li>
              <Link href="/futebol" className={styles.link}>
                Futebol
              </Link>
            </li>
            <li>
              <Link href="/natacao" className={styles.link}>
                Natação
              </Link>
            </li>
            <li>
              <Link href="/realidadeAumentada" className={styles.link}>
                Realidade Aumentada
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.authButtons}>
          <button className={styles.authButton}>Cadastrar</button>
          <button className={styles.authButton}>Entrar</button>
        </div>
      </div>
    </div>
  );
};

export default MenuLateral;
