"use client";

import styles from './termosUso.module.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/header/header';

export default function TermosUso() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1>Termos de Uso - Atleta Digital</h1>

        <p>Bem-vindo(a) à <strong>Atleta Digital</strong>! Ao acessar e utilizar nosso site e serviços, você concorda com os seguintes termos e condições. Leia atentamente este documento.</p>

        <h2>1. Aceitação dos Termos</h2>
        <p>Ao acessar ou usar qualquer parte deste site ou nossos serviços, você concorda em ficar vinculado por estes Termos de Uso. Se você não concordar com todos os termos e condições deste acordo, então você não pode acessar o site ou usar quaisquer serviços.</p>

        <h2>2. Descrição dos Serviços</h2>
        <p>A <strong>Atleta Digital</strong> é uma loja online especializada em roupas, acessórios e jogos de realidade aumentada voltados para praticantes de musculação, natação, futebol e realidade virtual. Oferecemos uma plataforma para que você possa navegar, selecionar e adquirir nossos produtos.</p>

        <h2>3. Uso do Site</h2>
        <ul>
          <li>Você concorda em usar o site apenas para fins legais e de maneira que não infrinja os direitos de terceiros ou restrinja ou iniba o uso e o aproveitamento do site por qualquer outra pessoa.</li>
          <li>Você não deve usar o site para transmitir ou distribuir material que seja difamatório, obsceno, ameaçador, fraudulento, infrator, ou de qualquer forma ilegal ou prejudicial.</li>
          <li>Você é responsável por manter a confidencialidade das suas informações de login e por todas as atividades que ocorrerem sob a sua conta.</li>
          <li>Reservamo-nos o direito de modificar, suspender ou descontinuar o site (ou qualquer parte dele) a qualquer momento, com ou sem aviso prévio.</li>
        </ul>

        <h2>4. Produtos e Preços</h2>
        <ul>
          <li>Todos os produtos exibidos no site estão sujeitos à disponibilidade.</li>
          <li>Reservamo-nos o direito de alterar os preços dos produtos a qualquer momento, sem aviso prévio.</li>
          <li>Faremos todos os esforços para exibir as cores e imagens dos nossos produtos com a maior precisão possível. No entanto, não podemos garantir que a exibição das cores no seu monitor seja precisa.</li>
          <li>As descrições dos produtos podem conter imprecisões ou erros tipográficos. Reservamo-nos o direito de corrigir quaisquer erros, imprecisões ou omissões e de alterar ou atualizar informações a qualquer momento, sem aviso prévio.</li>
        </ul>

        <h2>5. Pedidos e Pagamentos</h2>
        <ul>
          <li>Ao fazer um pedido, você está oferecendo a compra dos produtos selecionados de acordo com estes Termos de Uso.</li>
          <li>Reservamo-nos o direito de recusar ou cancelar qualquer pedido por qualquer motivo, incluindo limitações de quantidade disponíveis para compra, imprecisões ou erros nas informações do produto ou preço, ou problemas identificados por nossos departamentos de crédito e prevenção de fraudes.</li>
          <li>O pagamento deve ser efetuado através dos métodos disponíveis no site. Você concorda em fornecer informações de pagamento completas e precisas.</li>
        </ul>

        <h2>6. Envio e Entrega</h2>
        <p>Nossas políticas de envio e entrega estão detalhadas em uma página separada do nosso site. Consulte essa página para obter informações sobre prazos de entrega, custos de envio e outras informações relacionadas.</p>

        <h2>7. Devoluções e Trocas</h2>
        <p>Nossa política de devoluções e trocas está detalhada em uma página separada do nosso site. Consulte essa página para obter informações sobre os procedimentos e condições para devoluções e trocas.</p>

        <h2>8. Propriedade Intelectual</h2>
        <p>Todo o conteúdo incluído neste site, como textos, gráficos, logotipos, ícones de botões, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade da <strong>Atleta Digital</strong> ou de seus fornecedores de conteúdo e é protegido por leis de direitos autorais e outras leis de propriedade intelectual.</p>

        <h2>9. Limitação de Responsabilidade</h2>
        <p>Na extensão máxima permitida pela lei aplicável, a <strong>Atleta Digital</strong> não será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos (incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis) resultantes do seu acesso ou uso do site ou dos nossos produtos e serviços.</p>

        <h2>10. Indenização</h2>
        <p>Você concorda em indenizar, defender e isentar a <strong>Atleta Digital</strong>, seus diretores, funcionários, agentes e fornecedores de qualquer reclamação, responsabilidade, dano, perda, custo, despesa ou taxa (incluindo honorários advocatícios razoáveis) que surjam do seu uso do site ou da sua violação destes Termos de Uso.</p>

        <h2>11. Lei Aplicável</h2>
        <p>Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil, sem considerar seus conflitos de disposições legais.</p>

        <h2>12. Alterações aos Termos de Uso</h2>
        <p>Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento, publicando os termos atualizados neste site. É sua responsabilidade revisar periodicamente estes Termos de Uso. Seu uso continuado do site após a publicação de alterações constitui sua aceitação dessas alterações.</p>

        <h2>13. Contato</h2>
        <p>Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através dos seguintes meios:</p>
        <p><strong>Atleta Digital</strong></p>
        <p>[Seu Endereço Comercial, se aplicável]</p>
        <p>[Seu Endereço de E-mail de Contato]</p>
        <p>[Seu Número de Telefone de Contato, se aplicável]</p>
      </main>
      <Footer />
    </>
  );
}