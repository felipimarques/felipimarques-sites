import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const nav = [
  { name: "Sobre", href: "/#sobre", route: false },
  { name: "Serviços", href: "/#servicos", route: false },
  { name: "Processo", href: "/#processo", route: false },
  { name: "FAQ", href: "/#faq", route: false },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(100, Math.round((window.scrollY / h) * 100)) : 0);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#131210]/15 bg-[#f2efe9]/90 backdrop-blur">
      <div className="container-site flex h-[68px] items-center justify-between gap-4">
        <Link to="/" className="font-display text-lg font-black tracking-tight" aria-label="Felipi Marques Sites">
          FM<span className="text-[#ff4d00]">●</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          <Link to="/portfolio/" className="text-sm font-semibold text-[#131210]/70 hover:text-black">
            Work
          </Link>
          {nav.map((n) => (
            <a key={n.name} href={n.href} className="text-sm font-semibold text-[#131210]/70 hover:text-black">
              {n.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <span className="text-xs font-bold tabular-nums text-[#131210]/50">Start {String(progress).padStart(2, "0")}%</span>
          <a href="/#contato" className="btn-pill-dark !min-h-[44px] !px-6 !text-sm">
            Vamos conversar <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-[#131210]/15 bg-[#f2efe9] px-6 py-5 md:hidden" aria-label="Menu móvel">
          <div className="flex flex-col gap-4">
            <Link to="/portfolio/" onClick={() => setOpen(false)} className="font-display text-2xl font-black">
              Work
            </Link>
            {nav.map((n) => (
              <a key={n.name} href={n.href} onClick={() => setOpen(false)} className="font-display text-2xl font-black">
                {n.name}
              </a>
            ))}
            <a href="/#contato" onClick={() => setOpen(false)} className="btn-pill-dark mt-2">
              Vamos conversar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
