import { Link } from "react-router-dom";
import { whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section id="hero" className="bg-[#0B0D0D] pb-16 pt-[72px] md:pb-24">
      <div className="container-site grid items-center gap-12 pt-12 md:grid-cols-2 md:pt-20">
        <div>
          <p className="eyebrow">Design • Desenvolvimento • Estratégia</p>
          <h1 className="mt-5 text-balance text-white font-extrabold leading-[1.06] tracking-tight text-[clamp(42px,4.8vw,76px)]">
            Seu negócio
            <br />
            merece
            <br />
            <span className="text-[#FF650F]">um site à altura.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#B9BEC0]">
            Crio sites e sistemas, conecto processos e desenvolvo estratégias para sua empresa
            crescer no digital.
          </p>
          <div className="mt-8 flex min-h-[48px] flex-wrap gap-4">
            <Link to="/portfolio/" className="btn-primary">
              Ver meus projetos
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Vamos conversar
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="hero-portrait-mask overflow-hidden rounded-2xl border border-white/10 bg-[#111414]">
            <img
              src="/hero-portrait.png"
              alt="Felipi Marques"
              className="h-auto w-full object-cover object-top"
              width={800}
              height={1000}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
