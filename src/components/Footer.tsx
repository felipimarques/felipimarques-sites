import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-[#131210]/15">
      <div className="container-site flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-lg font-black">
          FM<span className="text-[#ff4d00]">●</span> <span className="text-sm font-semibold text-[#131210]/60">Sites, sistemas e estratégia digital.</span>
        </p>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold" aria-label="Rodapé">
          <Link to="/portfolio/" className="hover:text-[#ff4d00]">Work <span className="text-[#131210]/40">[os próximos]</span></Link>
          <a href="/#sobre" className="hover:text-[#ff4d00]">Sobre</a>
          <a href="/#servicos" className="hover:text-[#ff4d00]">Serviços</a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-[#ff4d00]">
            WhatsApp <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </nav>
      </div>
      <div className="container-site pb-6">
        <p className="font-display whitespace-nowrap text-[clamp(48px,11vw,170px)] font-black leading-none tracking-tight text-[#131210]/10" aria-hidden="true">
          FELIPI MARQUES
        </p>
        <div className="flex flex-col gap-2 py-4 text-xs text-[#131210]/50 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} {SITE.brand}</span>
          <span>feito à mão em são paulo — sem template</span>
        </div>
      </div>
    </footer>
  );
}
