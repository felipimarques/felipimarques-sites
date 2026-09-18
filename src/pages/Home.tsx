import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2efe9] text-[#131210]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
