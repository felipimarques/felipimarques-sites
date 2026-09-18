import { motion } from "framer-motion";
import { Target, Users, Compass } from "lucide-react";

const benefits = [
  { icon: Target, text: "Soluções para o seu negócio." },
  { icon: Users, text: "Atendimento próximo." },
  { icon: Compass, text: "Estratégia em cada detalhe." },
];

export default function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="relative z-10 bg-[#0B0D0D]">
      <div className="container-site">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="card-glass -mt-20 grid gap-0 overflow-hidden md:-mt-24 lg:grid-cols-[28%_42%_30%]"
        >
          <div className="relative min-h-[220px] lg:min-h-full">
            <img
              src="/hero-portrait.png"
              alt="Felipi Marques"
              className="absolute inset-0 h-full w-full object-cover object-top"
              loading="lazy"
              width={600}
              height={700}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#0c100f] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0c100f]/40"
            />
          </div>

          <div className="p-6 md:p-8">
            <h2 id="sobre-title" className="text-balance text-[32px] font-extrabold leading-tight text-white">
              Seu projeto, comigo
              <br />
              <span className="text-[#FF650F]">do início ao fim.</span>
            </h2>
            <p className="mt-4 text-[18px] leading-[1.5] text-[#B9BEC0]">
              Sou Felipi Marques. Uno design, desenvolvimento e marketing para criar soluções
              que fazem sentido para o seu negócio.
            </p>
          </div>

          <div className="border-t border-white/10 p-6 md:p-8 lg:border-l lg:border-t-0">
            <ul className="grid gap-6">
              {benefits.map((b) => (
                <li key={b.text} className="grid grid-cols-[48px_1fr] items-center gap-4">
                  <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#FF650F]">
                    <b.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="text-[17px] font-medium leading-snug text-white/90">{b.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
