import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-[#0B0D0D] pb-20 md:pb-28" style={{ scrollMarginTop: 72 }}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="card-glass px-6 py-14 text-center md:px-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">
            Vamos construir algo incrível juntos?
          </p>
          <h2 id="contato-title" className="h-section mx-auto mt-4 max-w-xl text-balance">
            Vamos tirar seu projeto do papel?
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              Conversar pelo WhatsApp
            </a>
            <a href={`mailto:${SITE.email}`} className="btn-secondary">
              <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
              {SITE.email}
            </a>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-white/50">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SITE.whatsappDisplay} — resposta rápida em horário comercial
          </p>
        </motion.div>
      </div>
    </section>
  );
}
