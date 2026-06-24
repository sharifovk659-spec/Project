import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import AboutSection from "@/components/sections/AboutSection";
import Partners from "@/components/sections/Partners";
import SmmSection from "@/components/sections/SmmSection";
import ProductionSection from "@/components/sections/ProductionSection";
import AcademySection from "@/components/sections/AcademySection";
import Cta from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Partners />
        <SmmSection />
        <ProductionSection />
        <AcademySection />
        <Cta />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
