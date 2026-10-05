import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import Brochures from "@/components/Brochures";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <Gallery />
        <Brochures />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
