import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { whatsappLink } from "@/lib/site";

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-[#131210]/15 bg-[#131210] py-3 text-[#f2efe9]" aria-hidden="true">
      <div className="marquee-track gap-8">
        {row.map((t, i) => (
          <span key={i} className="font-display text-sm font-bold uppercase tracking-[0.25em]">
            {t} <span className="ml-8 text-[#ff4d00]">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="pt-[68px]">
      <div className="container-site grid gap-10 pb-10 pt-10 md:grid-cols-[1.2fr_0.8fr] md:items-end md:pt-16">
        <div>
          <p className="eyebrow">Felipi Marques — design • código • estratégia</p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-giant mt-5 text-[clamp(56px,9vw,132px)]"
          >
            faço
            <br />
            <span className="font-serif-it font-normal tracking-normal text-[#ff4d00]">sites</span> que
            <br />
            vendem<span className="text-[#ff4d00]">.</span>
          </motion.h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#131210]/70">
            Sem template genérico, sem enrolação. Design, código e estratégia pra sua empresa
            crescer no digital — do jeito que eu gostaria que fizessem pelo meu negócio.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/portfolio/" className="btn-pill-dark">
              Ver work
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-pill-accent">
              Vamos conversar <ArrowUpRight className="ml-1 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#131210]/45">
            desde 2003 — são paulo / remoto
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-t-[999px] rounded-b-[28px] border border-[#131210]/15 bg-[#e4d9c7]">
            <img
              src="/hero-felipi-cut.png"
              alt="Felipi Marques"
              className="h-[420px] w-full object-cover object-top md:h-[520px]"
              width={800}
              height={1000}
              fetchPriority="high"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/hero-portrait.png";
              }}
            />
          </div>
          <div className="absolute -left-6 top-6 hidden h-28 w-28 items-center justify-center rounded-full bg-[#131210] text-center md:flex">
            <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full p-2" aria-hidden="true">
              <defs>
                <path id="circ" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
              </defs>
              <text className="fill-[#f2efe9] text-[10px] font-bold uppercase tracking-[0.2em]">
                <textPath href="#circ">vamos conversar • vamos conversar •</textPath>
              </text>
            </svg>
            <ArrowDown className="h-6 w-6 text-[#ff4d00]" aria-hidden="true" />
          </div>
        </motion.div>
      </div>
      <Marquee items={["sites", "landing pages", "crm e sistemas", "tráfego", "seo", "automações"]} />
    </section>
  );
}
