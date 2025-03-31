// app/components/loginPage/LoginPage.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando dados de login:", { email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.logo}>
          <h2>ATLETA DIGITAL</h2>
        </div>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputField}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
              required
            />
          </div>
          <button type="submit" className={styles.loginButton}>
            Entrar
          </button>
        </form>
        <div className={styles.signUpLink}>
          Não tem uma conta?{" "}
          <Link href="/cadastrar" className={styles.link}>
            Cadastrar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
