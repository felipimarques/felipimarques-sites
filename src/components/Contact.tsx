import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-[#131210] py-20 text-[#f2efe9] md:py-28" style={{ scrollMarginTop: 68 }}>
      <div className="container-site text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/45">05 — vamos construir algo incrível juntos?</p>
          <h2 id="contato-title" className="font-display mx-auto mt-5 max-w-4xl text-balance text-[clamp(44px,7vw,110px)] font-black leading-[0.95] tracking-tight">
            vamos tirar do <span className="font-serif-it font-normal text-[#ff4d00]">papel?</span>
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-pill-accent !min-h-[60px] !px-10 !text-lg">
              Conversar pelo WhatsApp <ArrowUpRight className="ml-1 h-5 w-5" aria-hidden="true" />
            </a>
            <a href={`mailto:${SITE.email}`} className="inline-flex min-h-[60px] items-center justify-center rounded-full border border-white/20 px-10 text-lg font-bold hover:border-white/50">
              {SITE.email}
            </a>
          </div>
          <p className="mt-6 text-sm text-white/50">{SITE.whatsappDisplay} — resposta rápida em horário comercial</p>
        </motion.div>
      </div>
    </section>
  );
}
