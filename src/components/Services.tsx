import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { whatsappForService } from "@/lib/site";

const services = [
  { n: "01", title: "Sites e Landing Pages", desc: "Sites modernos, rápidos e focados em resultados para o seu negócio.", tag: "o carro-chefe" },
  { n: "02", title: "CRM e Sistemas", desc: "Soluções personalizadas para organizar seus processos.", tag: "operação" },
  { n: "03", title: "Tráfego Pago", desc: "Campanhas para alcançar as pessoas certas.", tag: "aquisição" },
  { n: "04", title: "SEO e Presença no Google", desc: "Estrutura e conteúdo para sua empresa ser encontrada.", tag: "longo prazo" },
  { n: "05", title: "Automações e Integrações", desc: "Conecte ferramentas e simplifique sua rotina.", tag: "eficiência" },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="servicos" aria-labelledby="servicos-title" className="bg-[#131210] py-20 text-[#f2efe9] md:py-28" style={{ scrollMarginTop: 68 }}>
      <div className="container-site">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f2efe9]/50">02 — O que eu faço</p>
            <h2 id="servicos-title" className="font-display mt-4 text-[clamp(36px,5vw,72px)] font-black leading-[0.95] tracking-tight">
              menos serviço,
              <br />
              <span className="font-serif-it font-normal text-[#ff4d00]">mais resultado.</span>
            </h2>
          </div>
          <span className="ghost-num hidden text-[120px] leading-none md:block" aria-hidden="true" style={{ WebkitTextStrokeColor: "rgba(242,239,233,0.3)" }}>
            02
          </span>
        </div>

        <div className="mt-12 border-t border-white/15">
          {services.map((s, i) => {
            const open = active === i;
            return (
              <div key={s.n} className="border-b border-white/15">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setActive(open ? null : i)}
                  className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-6 text-left md:gap-8"
                >
                  <span className="text-sm font-bold text-[#ff4d00]">{s.n}</span>
                  <span className={`font-display text-[clamp(24px,3.5vw,44px)] font-black tracking-tight transition-colors ${open ? "text-white" : "text-white/80 hover:text-white"}`}>
                    {s.title}
                  </span>
                  <span className="hidden rounded-full border border-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white/50 md:block">
                    {s.tag}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-4 pb-7 md:grid-cols-[60px_1fr_auto] md:items-center md:gap-8 md:pl-[52px]">
                    <p className="max-w-xl leading-relaxed text-white/65">{s.desc}</p>
                    <a
                      href={whatsappForService(s.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Conversar sobre ${s.title}`}
                      className="inline-flex min-h-[48px] w-fit items-center gap-2 rounded-full bg-[#ff4d00] px-6 text-sm font-bold text-white hover:bg-[#e04400]"
                    >
                      Pedir orçamento <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
