import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PROJECTS } from "@/lib/work";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#f2efe9] text-[#131210]">
      <Header />
      <main className="container-site pb-24 pt-[120px]">
        <p className="eyebrow">Work — projetos no ar</p>
        <h1 className="font-display mt-4 max-w-4xl text-[clamp(44px,7vw,100px)] font-black leading-[0.95] tracking-tight">
          quem contratou, <span className="font-serif-it font-normal">tá vendendo.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#131210]/70">
          Sites reais, com nota real no Google. Clica e confere — nada de mock fictício.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article key={p.name} className="group">
              <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${p.name}`} className="block overflow-hidden rounded-2xl border border-[#131210]/15 bg-white">
                <div className="aspect-[4/3] overflow-hidden bg-[#e4d9c7]">
                  <img
                    src={p.img}
                    alt={`Prévia do site ${p.name}`}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </a>
              <div className="flex items-start justify-between gap-4 pt-4">
                <div>
                  <h2 className="font-display text-2xl font-black tracking-tight">{p.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-[#131210]/60">{p.segment}</p>
                  <p className="mt-1 text-sm text-[#131210]/60">{p.scope}{p.proof ? ` · ${p.proof}` : ""}</p>
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar site ${p.name}`}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#131210] text-[#f2efe9] transition-transform hover:-translate-y-0.5"
                >
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <Link to="/" className="btn-pill-dark mt-14">
          Voltar para a home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
