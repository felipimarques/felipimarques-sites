import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#f2efe9] text-[#131210]">
      <Header />
      <main className="container-site pb-24 pt-[140px]">
        <p className="eyebrow">Work — em construção honesta</p>
        <h1 className="font-display mt-4 max-w-3xl text-[clamp(44px,7vw,100px)] font-black leading-[0.95] tracking-tight">
          projetos reais, <span className="font-serif-it font-normal">em breve.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#131210]/70">
          Nada de Dribbble fake aqui. Esta página vai apresentar trabalhos autorizados, com
          capturas e links. Enquanto isso, chama no WhatsApp que eu te mostro na hora.
        </p>
        <Link to="/" className="btn-pill-dark mt-8">
          Voltar para a home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
