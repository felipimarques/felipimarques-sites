import { motion } from "framer-motion";
import { Monitor, Database, TrendingUp, Search, Workflow, ArrowRight } from "lucide-react";
import { whatsappForService } from "@/lib/site";

const smallServices = [
  {
    icon: Database,
    title: "CRM e Sistemas",
    desc: "Soluções personalizadas para organizar seus processos.",
  },
  {
    icon: TrendingUp,
    title: "Tráfego Pago",
    desc: "Campanhas para alcançar as pessoas certas.",
  },
  {
    icon: Search,
    title: "SEO e Presença no Google",
    desc: "Estrutura e conteúdo para sua empresa ser encontrada.",
  },
  {
    icon: Workflow,
    title: "Automações e Integrações",
    desc: "Conecte ferramentas e simplifique sua rotina.",
  },
];

function BrowserMock() {
  return (
    <div aria-hidden="true" className="pointer-events-none mx-auto w-[90%] select-none">
      <div className="translate-y-[14px] rounded-t-lg border border-white/10 bg-white/[0.03] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 hidden h-5 flex-1 items-center rounded-full bg-white/5 px-3 text-[10px] text-white/30 sm:flex">
            seuprojeto.com.br
          </span>
        </div>
      </div>
      <div
        className="rounded-lg border border-white/10 bg-[#101414] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        style={{
          maskImage: "linear-gradient(to bottom, #000 0%, #000 68%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 68%, transparent 100%)",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-20 rounded-full bg-white/10" />
          <div className="h-5 w-16 rounded-full bg-[#FF650F]/80" />
        </div>
        <div className="mt-4 grid grid-cols-[1fr_110px] gap-4">
          <div className="space-y-2 pt-1">
            <div className="h-2.5 w-11/12 rounded-full bg-white/25" />
            <div className="h-2 w-3/4 rounded-full bg-white/10" />
            <div className="h-2 w-2/3 rounded-full bg-white/10" />
            <div className="h-2 w-1/2 rounded-full bg-white/10" />
          </div>
          <div className="flex h-[86px] items-center justify-center rounded-md border border-white/10 bg-white/5">
            <svg width="44" height="30" viewBox="0 0 44 30" fill="none" aria-hidden="true">
              <path d="M4 24 L16 12 L24 19 L32 8 L40 15 L40 24 Z" fill="rgba(255,255,255,0.18)" />
              <path d="M4 24 L16 12 L24 19 L32 8" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="none" />
              <circle cx="31" cy="8" r="3" fill="rgba(255,101,15,0.7)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="bg-[#0B0D0D] py-20 md:py-28" style={{ scrollMarginTop: 72 }}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Serviços</p>
          <h2 id="servicos-title" className="h-section mt-3 max-w-2xl text-balance">
            Soluções para sua empresa <span className="text-[#FF650F]">crescer no digital.</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] lg:grid-rows-2">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="card-glass group flex flex-col p-6 transition-all duration-200 hover:-translate-y-[2px] hover:border-white/20 md:col-span-2 lg:col-span-1 lg:row-span-2"
          >
            <div className="pt-2">
              <BrowserMock />
            </div>
            <div className="mt-2 flex items-center gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#FF650F]/10 text-[#FF650F]">
                <Monitor className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h3 className="text-[26px] font-bold leading-tight text-white">Sites e Landing Pages</h3>
            </div>
            <p className="mt-5 max-w-[370px] text-[18px] leading-[1.5] text-[#B9BEC0]">
              Sites modernos, rápidos e focados em resultados para o seu negócio.
            </p>
            <div className="mt-auto flex justify-end pt-6">
              <a
                href={whatsappForService("Sites e Landing Pages")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar sobre Sites e Landing Pages"
                className="flex h-[44px] w-[44px] items-center justify-center rounded-full border-[1.5px] border-[#FF650F] text-white transition-colors hover:bg-[#FF650F]/10 focus-visible:outline-[#FF650F]"
              >
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </motion.article>

          {smallServices.map((s, i) => (
            <motion.a
              key={s.title}
              href={whatsappForService(s.title)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Conversar sobre ${s.title}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.2) }}
              className="card-glass group flex flex-col p-6 transition-all duration-200 hover:-translate-y-[2px] hover:border-white/20"
            >
              <div className="flex items-start gap-[18px]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF650F]/10 text-[#FF650F]">
                  <s.icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold leading-snug text-white">{s.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-[#B9BEC0]">{s.desc}</p>
                </div>
              </div>
              <span className="mt-auto flex items-center justify-between pt-5 text-sm font-semibold text-white/70 group-hover:text-white">
                Saiba mais
                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-[1.5px] border-[#FF650F] text-white">
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
