import Banner from "./components/bannerPrincipal/banner";
import CardCarousel from "./components/cardCarousel/cardCarousel";
import CenterBanner from "./components/centerBanner.tsx/centerBanner";
import FootballBanner from "./components/footballBanner/footballBanner";
import Footer from "./components/Footer/Footer";
import GymBanner from "./components/gymBanner/gymBanner";
import Header from "./components/header/header";
import ARBanner from "./components/raBanner/raBanner";
import SwimmingBanner from "./components/swimmingBanner/swimmingBanner";



export default function Home() {
  return (
    <>
     <Header />
     <Banner />
     <CenterBanner />
     <GymBanner />
     <FootballBanner />
     <SwimmingBanner />
     <ARBanner />
     <CardCarousel />
     <Footer />
    </>
  );
}
