import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Quanto tempo leva para criar meu site?", a: "O prazo é definido conforme o escopo, as funcionalidades e os materiais necessários. Esses pontos são combinados antes do início do projeto." },
  { q: "Meu site vai funcionar no celular?", a: "A versão para celular faz parte do planejamento, com ajustes de navegação, imagens e leitura para diferentes tamanhos de tela." },
  { q: "Como funcionam domínio e hospedagem?", a: "Domínio é o endereço do site; hospedagem é onde ele fica disponível. A contratação e os custos são definidos na proposta." },
  { q: "Posso atualizar o site depois?", a: "A forma de atualização depende da solução escolhida. Podemos definir no escopo se você precisa de um painel de edição ou de alterações sob demanda." },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" aria-labelledby="faq-title" className="pb-20 md:pb-28" style={{ scrollMarginTop: 68 }}>
      <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">04 — FAQ</p>
          <h2 id="faq-title" className="font-display mt-4 text-balance text-[clamp(32px,4vw,56px)] font-black leading-[1.0] tracking-tight">
            perguntas <span className="font-serif-it font-normal">honestas,</span> respostas diretas.
          </h2>
        </div>
        <div>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={f.q} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="rule">
                <button type="button" aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
                  <span className="text-lg font-bold">{f.q}</span>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#131210]/20 transition-transform duration-200 ${isOpen ? "rotate-45 bg-[#131210] text-[#f2efe9]" : ""}`}>
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>
                {isOpen && <p id={`faq-${i}`} className="max-w-xl pb-6 leading-relaxed text-[#131210]/70">{f.a}</p>}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
