import { motion } from "framer-motion";
import { MessagesSquare, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  { n: "01", icon: MessagesSquare, title: "Conversa", desc: "Entendo suas necessidades e objetivos." },
  { n: "02", icon: Palette, title: "Direção visual", desc: "Definimos a estratégia e o visual do seu projeto." },
  { n: "03", icon: Code2, title: "Desenvolvimento", desc: "Transformo tudo em um site rápido e funcional." },
  { n: "04", icon: Rocket, title: "Publicação", desc: "Seu site no ar, pronto para gerar resultados." },
];

export default function Process() {
  return (
    <section id="processo" aria-labelledby="processo-title" className="bg-[#0B0D0D] py-20 md:py-28" style={{ scrollMarginTop: 72 }}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Processo</p>
          <h2 id="processo-title" className="h-section mt-3">
            Da primeira conversa à entrega.
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.2) }}
              className="bg-[#0E1212] p-7"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF650F]/10 text-[#FF650F]">
                <s.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <p className="mt-5 text-xs font-bold tracking-[0.2em] text-white/40">{s.n}</p>
              <h3 className="mt-1 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#B9BEC0]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
