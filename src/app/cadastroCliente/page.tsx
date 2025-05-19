"use client";

import Link from "next/link";
import styles from "./cadastrocliente.module.css";
import Header from "../components/header/header";
import Footer from "../components/Footer/Footer";

export default function CadastroPage() {
  return (
    <>
      <Header />
      <main className={styles.cadastroContainer}>
        <h1>Cadastre-se para Acessar a Atleta Digital</h1>
        <p>Crie sua conta para aproveitar a melhor experiência em compras de artigos esportivos.</p>

        <form className={styles.cadastroForm}>
          <div className={styles.formGroup}>
            <label htmlFor="nome">Nome Completo:</label>
            <input type="text" id="nome" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="telefone" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="logradouro">Logradouro:</label>
            <input type="text" id="logradouro" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="numero">Número:</label>
            <input type="text" id="numero" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cidade">Cidade:</label>
            <input type="text" id="cidade" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="estado">Estado:</label>
            <input type="text" id="estado" required />
          </div>

          <button type="submit" className={styles.cadastrarButton}>
            Cadastrar
          </button>

          <p className={styles.jaTemConta}>
            Já tem uma conta? <Link href="/login">Faça login aqui</Link>.
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
}