import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Quanto tempo leva para criar meu site?",
    a: "O prazo é definido conforme o escopo, as funcionalidades e os materiais necessários. Esses pontos são combinados antes do início do projeto.",
  },
  {
    q: "Meu site vai funcionar no celular?",
    a: "A versão para celular faz parte do planejamento, com ajustes de navegação, imagens e leitura para diferentes tamanhos de tela.",
  },
  {
    q: "Como funcionam domínio e hospedagem?",
    a: "Domínio é o endereço do site; hospedagem é onde ele fica disponível. A contratação e os custos são definidos na proposta.",
  },
  {
    q: "Posso atualizar o site depois?",
    a: "A forma de atualização depende da solução escolhida. Podemos definir no escopo se você precisa de um painel de edição ou de alterações sob demanda.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-title" className="bg-[#0B0D0D] py-20 md:py-28">
      <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="faq-title" className="h-section text-balance">
            Vamos esclarecer suas dúvidas?
          </h2>
          <p className="mt-4 text-[#B9BEC0]">Respostas para as perguntas mais comuns.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4 }}
                className="card-glass overflow-hidden"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-[16px] font-bold text-white">{f.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-transform duration-200 ${isOpen ? "rotate-45 border-[#FF650F] text-[#FF650F]" : ""}`}
                  >
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>
                {isOpen && (
                  <div id={`faq-panel-${i}`} className="px-5 pb-5 text-[15px] leading-relaxed text-[#B9BEC0]">
                    {f.a}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
