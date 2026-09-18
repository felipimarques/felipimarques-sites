import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

const navItems = [
  { name: "Portfólio", href: "/portfolio/", isRoute: true },
  { name: "Sobre", href: "/#sobre", isRoute: false },
  { name: "Serviços", href: "/#servicos", isRoute: false },
  { name: "Processo", href: "/#processo", isRoute: false },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B0D0D]/90 backdrop-blur">
      <div className="container-site flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label={SITE.brand}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF650F] text-sm font-black text-white">
            {SITE.initials}
          </span>
          <span className="hidden text-sm font-bold text-white sm:block">
            Felipi Marques <span className="text-[#FF650F]">Sites</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {item.name}
              </a>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <a href="/#contato" className="btn-primary !min-h-[44px] !px-6 !text-sm">
            Vamos conversar
          </a>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          type="button"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-white/10 bg-[#0B0D0D] px-6 py-5 md:hidden" aria-label="Menu móvel">
          <div className="flex flex-col gap-4">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-white/70 hover:text-white"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-white/70 hover:text-white"
                >
                  {item.name}
                </a>
              )
            )}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2"
            >
              Vamos conversar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
