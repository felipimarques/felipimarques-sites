import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="py-20 md:py-28" style={{ scrollMarginTop: 68 }}>
      <div className="container-site">
        <div className="flex items-end justify-between gap-6">
          <p className="eyebrow">01 — Sobre mim</p>
          <span className="ghost-num hidden text-[120px] leading-none md:block" aria-hidden="true">
            01
          </span>
        </div>
        <motion.h2
          id="sobre-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-display mt-4 max-w-4xl text-balance text-[clamp(32px,4.5vw,64px)] font-black leading-[1.02] tracking-tight"
        >
          Sou <span className="font-serif-it font-normal">Felipi</span>. Uno design, código e
          marketing pra criar o que seu negócio <span className="text-[#ff4d00]">precisa</span> — não
          o que tá na moda.
        </motion.h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            { t: "Soluções pro seu negócio", d: "Nada de：“site institucional” parado. Cada página tem um trabalho: gerar contato." },
            { t: "Atendimento próximo", d: "Você fala comigo do início ao fim. Sem handoff, sem sumiço." },
            { t: "Estratégia em cada detalhe", d: "Copy, velocidade, SEO e WhatsApp pensados antes do layout." },
          ].map((b, i) => (
            <motion.div
              key={b.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rule pt-5"
            >
              <p className="text-xs font-bold text-[#ff4d00]">0{i + 1}</p>
              <h3 className="font-display mt-2 text-xl font-extrabold">{b.t}</h3>
              <p className="mt-2 leading-relaxed text-[#131210]/70">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
