// app/natacao/page.tsx
import Image from "next/image";
import styles from "@/app/natacao/page.module.css";
import Layout from "../layoutGlobal/layoutGlobal";
import { produtosNatacao } from '@/app/natacao/produtosNatacao';
export default function Natacao() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Produtos de Natação</h1>

        <div className={styles.produtosContainer}>
          {produtosNatacao.map((produto) => (
            <div key={produto.id} className={styles.card}>
              <Image
                src={produto.imagem}
                alt={produto.nome}
                width={300}
                height={200}
                className={styles.imagemProduto}
              />
              <div className={styles.cardBody}>
                <h2 className={styles.nomeProduto}>{produto.nome}</h2>
                <p className={styles.descricaoProduto}>{produto.descricao}</p>
                <p className={styles.precoProduto}>{produto.preco}</p>
                <button className={styles.botaoAdicionar}>Adicionar ao Carrinho</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}