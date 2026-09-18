import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0B0D0D] text-[#F5F5F5]">
      <Header />
      <main className="container-site pb-24 pt-[140px]">
        <p className="eyebrow">Portfólio</p>
        <h1 className="h-section mt-4">Projetos reais, em breve.</h1>
        <p className="mt-4 max-w-xl text-[#B9BEC0]">
          Esta página vai apresentar 5 projetos autorizados com capturas e links. Sem
          placeholders fictícios — pendente de materiais reais.
        </p>
        <Link to="/" className="btn-secondary mt-8">
          Voltar para a home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
