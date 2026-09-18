import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/work";

export default function SelectedWork() {
  const top = PROJECTS.slice(0, 3);
  return (
    <section aria-labelledby="work-title" className="py-20 md:py-28" style={{ scrollMarginTop: 68 }}>
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Work selecionado</p>
            <h2 id="work-title" className="font-display mt-4 text-[clamp(32px,4.5vw,64px)] font-black leading-[1.0] tracking-tight">
              prova, <span className="font-serif-it font-normal">não promessa.</span>
            </h2>
          </div>
          <Link to="/portfolio/" className="btn-pill-dark">
            Ver tudo <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {top.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar ${p.name}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group block overflow-hidden rounded-2xl border border-[#131210]/15 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#e4d9c7]">
                <img
                  src={p.img}
                  alt={`Prévia do site ${p.name}`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5">
                <p className="font-display text-lg font-extrabold leading-tight">{p.name}</p>
                <p className="mt-1 text-[13px] font-semibold text-[#131210]/55">{p.segment} · {p.proof}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
