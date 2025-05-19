import Link from "next/link";
import styles from "@/app/components/header/header.module.css";



export default function Header() {
  return (
    
    <header className={styles.header}>
      {/* Logo */}
      <h1 className={styles.logo}>ATLETA DIGITAL</h1>

      {/* Navegação */}
      <nav>
        <ul className={styles.navList}>
          <li><Link href="/sobreNos" className={styles.link}>Sobre Nós</Link></li>
          <li><Link href="/academia" className={styles.link}>Academia</Link></li>
          <li><Link href="/futebol" className={styles.link}>Futebol</Link></li>
          <li><Link href="/natacao" className={styles.link}>Natação</Link></li>
          <li><Link href="/realidadeAumentada" className={styles.link}>Realidade Aumentada</Link></li>
        </ul>
      </nav>

      {/* Buscador */}
      <input type="text" placeholder="Buscar..." className={styles.searchBox} />

      {/* Botões de autenticação */}
      <div className={styles.authButtons}>
        <Link href="/cadastroCliente" className={styles.link}>
          <button className={styles.authButton}>Cadastrar</button>
        </Link>
        <Link href="/login" className={styles.link}>
          <button className={styles.authButton}>Entrar</button>
        </Link>
      </div>
    </header>
  );
}
