import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0D0D]">
      <div className="container-site flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF650F] text-xs font-black text-white">
            {SITE.initials}
          </span>
          <div>
            <p className="text-sm font-bold text-white">{SITE.brand}</p>
            <p className="text-xs text-white/50">Sites, sistemas e estratégia digital.</p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-6" aria-label="Rodapé">
          <Link to="/portfolio/" className="text-sm text-white/60 hover:text-white">
            Portfólio
          </Link>
          <a href="/#sobre" className="text-sm text-white/60 hover:text-white">
            Sobre
          </a>
          <a href="/#servicos" className="text-sm text-white/60 hover:text-white">
            Serviços
          </a>
          <a href="/#contato" className="text-sm text-white/60 hover:text-white">
            Contato
          </a>
        </nav>

        <div className="flex flex-col gap-2 text-sm text-white/60 md:items-end">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SITE.whatsappDisplay}
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4" aria-hidden="true" />
            {SITE.email}
          </a>
        </div>

        <p className="text-xs text-white/40">© {new Date().getFullYear()} {SITE.brand}</p>
      </div>
    </footer>
  );
}
