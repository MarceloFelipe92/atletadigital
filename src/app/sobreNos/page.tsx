import Footer from "../components/Footer/Footer";
import Header from "../components/header/header";
import styles from "./sobreNos.module.css";
 
export default function QuemSomos() {
  return (
    <>
    <Header />
    <main className={styles.quemSomosContainer}>
      <section className={styles.content}>
        <h1>Sobre Nós</h1>
        <p>
          Bem-vindo à <strong>Atleta Digital</strong>, onde a inovação e o estilo se encontram!
          Somos uma loja online especializada em roupas, acessórios e jogos de realidade aumentada voltados para academia, natação e musculação.
          Nossa missão é proporcionar a melhor experiência de compra para nossos clientes, oferecendo produtos de alta qualidade que combinam tecnologia e moda.
        </p>
 
        <h2>Nossa Missão</h2>
        <p>
          Acreditamos que a prática esportiva deve ser acessível, divertida e estilosa.
          Por isso, selecionamos cuidadosamente cada item do nosso catálogo para garantir que você tenha o melhor desempenho, seja na academia, na piscina ou no seu treino de musculação.
        </p>
        <p>
          Estamos na vanguarda da tecnologia com nossos <strong>jogos de realidade aumentada</strong>, que transformam sua rotina de exercícios em uma experiência imersiva e interativa.
          Com a realidade aumentada, você pode visualizar e experimentar nossos produtos de uma maneira totalmente nova, diretamente do conforto da sua casa.
        </p>
 
        <h2>Qualidade e Confiança</h2>
        <p>
          Nosso compromisso é com a <strong>qualidade</strong> e a <strong>satisfação</strong> dos nossos clientes.
          Trabalhamos com as melhores marcas e fornecedores para garantir que você receba produtos duráveis, confortáveis e com ótimo custo-benefício.
        </p>
        <p>
          Somos uma equipe apaixonada por esportes e tecnologia, dedicada a oferecer um atendimento personalizado e eficiente.
          Estamos sempre prontos para ajudar você a encontrar o produto ideal e tirar qualquer dúvida.
        </p>
      </section>
    </main>
    <Footer />
    </>
  );
}