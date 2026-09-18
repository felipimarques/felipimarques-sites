import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const SplitFace = () => {
  const [hoverSide, setHoverSide] = useState<"left" | "right" | null>(null);

  const leftFlex = hoverSide === "left" ? "60%" : hoverSide === "right" ? "40%" : "50%";
  const rightFlex = hoverSide === "right" ? "60%" : hoverSide === "left" ? "40%" : "50%";

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[#e7e7e7] bg-[#f6f6f6] pt-[72px]"
    >
      <div className="mx-auto flex min-h-[600px] max-w-6xl md:min-h-[680px]">
        {/* ── LEFT: Consultor ── */}
        <motion.div
          animate={{ flex: leftFlex }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setHoverSide("left")}
          onMouseLeave={() => setHoverSide(null)}
          className="relative flex cursor-pointer flex-col items-center justify-end overflow-hidden border-r border-[#e7e7e7] bg-white px-4 pb-12 pt-20 md:pb-16"
        >
          <div className="absolute inset-0 flex items-end justify-center">
            <motion.img
              src="/Consultor.png"
              alt="Felipi Marques - Consultor ERP"
              className="h-[85%] w-auto max-w-none object-contain object-bottom"
              animate={{ scale: hoverSide === "left" ? 1.05 : 1 }}
              transition={{ duration: 0.45 }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

          {/* Content overlay */}
          <div className="relative z-10 text-center">
            <motion.span
              animate={{ opacity: hoverSide === "right" ? 0.5 : 1 }}
              className="mb-3 inline-block rounded-full border border-[#ddd] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#999]"
            >
              Consultor ERP
            </motion.span>
            <motion.h2
              animate={{
                scale: hoverSide === "left" ? 1.08 : 1,
                y: hoverSide === "left" ? -4 : 0,
              }}
              className="mt-3 text-[42px] font-black leading-none tracking-[-0.06em] text-[#2d2d2d] md:text-[54px]"
            >
              consultor
            </motion.h2>
            <motion.p
              animate={{ opacity: hoverSide === "right" ? 0.4 : 0.9 }}
              className="mx-auto mt-4 max-w-[280px] text-[13px] leading-relaxed text-[#898989]"
            >
              Especialista TOTVS Protheus com 25 anos de atuação, conectando
              processos, módulos e diretoria com visão estratégica.
            </motion.p>
            <motion.div
              animate={{ opacity: hoverSide === "right" ? 0.3 : 1 }}
              className="mt-4 flex flex-wrap justify-center gap-1.5"
            >
              {["Implantação", "Processos", "Compliance"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#f5f5f5] px-3 py-0.5 text-[11px] text-[#777]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* ── Arrow indicator on hover ── */}
            <motion.div
              animate={{ opacity: hoverSide === "left" ? 1 : 0, y: hoverSide === "left" ? 0 : 8 }}
              className="mt-6 text-[11px] font-medium text-[#999]"
            >
              Ver trajetória →
            </motion.div>
          </div>
        </motion.div>

        {/* ── RIGHT: Dev ── */}
        <motion.div
          animate={{ flex: rightFlex }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setHoverSide("right")}
          onMouseLeave={() => setHoverSide(null)}
          className="relative flex cursor-pointer flex-col items-center justify-end overflow-hidden bg-[#1a1a1a] px-4 pb-12 pt-20 md:pb-16"
        >
          <div className="absolute inset-0 flex items-end justify-center">
            <motion.img
              src="/Dev.png"
              alt="Felipi Marques - Desenvolvedor ADVPL & IA"
              className="h-[85%] w-auto max-w-none object-contain object-bottom"
              animate={{ scale: hoverSide === "right" ? 1.05 : 1 }}
              transition={{ duration: 0.45 }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />

          {/* Content overlay */}
          <div className="relative z-10 text-center">
            <motion.span
              animate={{ opacity: hoverSide === "left" ? 0.5 : 1 }}
              className="mb-3 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#777]"
            >
              Desenvolvedor ADVPL &amp; IA
            </motion.span>
            <motion.h2
              animate={{
                scale: hoverSide === "right" ? 1.08 : 1,
                y: hoverSide === "right" ? -4 : 0,
              }}
              className="mt-3 text-[42px] font-black leading-none tracking-[-0.06em] text-white md:text-[54px]"
            >
              &lt;dev&gt;
            </motion.h2>
            <motion.p
              animate={{ opacity: hoverSide === "left" ? 0.4 : 0.9 }}
              className="mx-auto mt-4 max-w-[280px] text-[13px] leading-relaxed text-[#888]"
            >
              Sênior em ADVPL/TLPP. Uso IA como ferramenta de verdade — para
              gerar código, documentar, automatizar e entregar mais rápido no
              Protheus.
            </motion.p>
            <motion.div
              animate={{ opacity: hoverSide === "left" ? 0.3 : 1 }}
              className="mt-4 flex flex-wrap justify-center gap-1.5"
            >
              {["ADVPL", "TLPP", "Agentes IA"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/8 px-3 py-0.5 text-[11px] text-[#aaa]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* ── Arrow indicator on hover ── */}
            <motion.div
              animate={{ opacity: hoverSide === "right" ? 1 : 0, y: hoverSide === "right" ? 0 : 8 }}
              className="mt-6 text-[11px] font-medium text-[#777]"
            >
              Ver tecnologia →
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#aaa] transition-colors hover:text-[#333] md:flex"
        aria-label="Rolar para a próxima seção"
      >
        rolar
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dedede] bg-white/70 backdrop-blur-sm">
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </span>
      </motion.a>
    </section>
  );
};

export default SplitFace;
