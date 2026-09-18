import { useState } from "react";
import { Menu, X, Linkedin, Github, Mail } from "lucide-react";

const navItems = [
  { name: "sobre", href: "#about" },
  { name: "experiencia", href: "#experience" },
  { name: "expertise", href: "#expertise" },
  { name: "ia", href: "#ai" },
  { name: "clientes", href: "#clients" },
  { name: "contato", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#111] text-white shadow-[0_1px_0_rgba(255,255,255,0.06)]">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="group flex items-center gap-3" aria-label="Felipi Marques">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-white text-sm font-black tracking-tighter text-[#111] transition-transform group-hover:scale-105">
            FM
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[13px] font-medium lowercase tracking-normal text-white/60 transition-colors hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="mailto:felipimarques@gmail.com"
            className="text-white/70 transition-colors hover:text-white"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/felipi-marques-oliveira-b497033b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 transition-colors hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/felipimarques"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
          type="button"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-white/10 bg-[#111] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium lowercase text-white/70 transition-colors hover:text-white"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-5 pt-2">
              <a href="mailto:felipimarques@gmail.com" className="text-white/70 hover:text-white">
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/felipi-marques-oliveira-b497033b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/felipimarques"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
