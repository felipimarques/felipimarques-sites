import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Conversa", desc: "Entendo suas necessidades e objetivos." },
  { n: "02", title: "Direção visual", desc: "Definimos a estratégia e o visual do seu projeto." },
  { n: "03", title: "Desenvolvimento", desc: "Transformo tudo em um site rápido e funcional." },
  { n: "04", title: "Publicação", desc: "Seu site no ar, pronto para gerar resultados." },
];

export default function Process() {
  return (
    <section id="processo" aria-labelledby="processo-title" className="py-20 md:py-28" style={{ scrollMarginTop: 68 }}>
      <div className="container-site">
        <p className="eyebrow">03 — Processo</p>
        <h2 id="processo-title" className="font-display mt-4 max-w-3xl text-[clamp(32px,4.5vw,64px)] font-black leading-[1.0] tracking-tight">
          da primeira conversa <span className="font-serif-it font-normal">à entrega.</span>
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#131210]/15 bg-[#131210]/15 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="bg-[#f2efe9] p-7"
            >
              <p className="font-display text-5xl font-black text-[#131210]/15">{s.n}</p>
              <h3 className="font-display mt-4 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#131210]/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
