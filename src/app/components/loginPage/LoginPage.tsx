"use client";

import Link from "next/link";
import styles from "./LoginPage.module.css";
import Header from "../header/header";
import Footer from "../Footer/Footer";


export default function LoginPage() {
  return (
    <>
      <Header />
      <main className={styles.loginContainer}>
        <h1>Acesse sua Conta Atleta Digital</h1>
        <p>Faça login para continuar suas compras e aproveitar todas as funcionalidades.</p>

        <form className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" required />
          </div>

          <button type="submit" className={styles.loginButton}>
            Entrar
          </button>

          <p className={styles.naoTemConta}>
            Não tem uma conta? <Link href="/cadastro">Cadastre-se aqui</Link>.
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
}