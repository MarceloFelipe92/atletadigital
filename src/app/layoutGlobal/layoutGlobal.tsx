// app/layout.tsx
import MenuLateral from "@/app/components/menuLateral/menuLateral";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/Footer/Footer";
import CenterBanner from "../components/centerBanner.tsx/centerBanner";
import CardCarousel from "../components/cardCarousel/cardCarousel";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
     
      {/* Cabeçalho */}
      <Header />

       {/* Menu Lateral */}
      <MenuLateral />

      {/* Conteúdo da página */}
      <main>{children}</main>

      <CenterBanner />
      
      <CardCarousel />

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
