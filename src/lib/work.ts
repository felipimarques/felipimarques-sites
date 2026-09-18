// Work real — projetos publicados na Vercel, com prova no Google.
// Mockups via thum.io (screenshot ao vivo da URL, sem arquivo manual).

export type Project = {
  name: string;
  segment: string;
  scope: string;
  proof: string;
  url: string;
};

const shot = (url: string) =>
  `https://image.thum.io/get/width/1200/crop/900/noanimate/${url}`;

export const PROJECTS: (Project & { img: string })[] = [
  {
    name: "Vênus Lavanderia 24h",
    segment: "Lavanderia self-service · Tucuruvi",
    scope: "Site + copy + WhatsApp",
    proof: "4.9★ no Google · 45 avaliações",
    url: "https://venus-site-eta.vercel.app",
    img: shot("https://venus-site-eta.vercel.app"),
  },
  {
    name: "Elétrica Valdres",
    segment: "Elétrica · São Paulo",
    scope: "Site + antes/depois + prova",
    proof: "5.0★ no Google · 115 avaliações",
    url: "https://valdres-site.vercel.app",
    img: shot("https://valdres-site.vercel.app"),
  },
  {
    name: "Achou Lavou",
    segment: "Lavanderia · Cachoeirinha",
    scope: "Site + Instagram + WhatsApp",
    proof: "4.9★ no Google · 68 avaliações",
    url: "https://achou-site.vercel.app",
    img: shot("https://achou-site.vercel.app"),
  },
  {
    name: "GR Elétrica",
    segment: "Elétrica & CFTV · Santo André",
    scope: "Site + chat + portfólio de obras",
    proof: "5.0★ no Google · 22 avaliações",
    url: "https://gr-site-smoky.vercel.app",
    img: shot("https://gr-site-smoky.vercel.app"),
  },
  {
    name: "Lume Lavanderia",
    segment: "Lavanderia 24h · Jaçanã",
    scope: "Site + ciclo R$15,90 + mapa",
    proof: "5.0★ no Google · 13 avaliações",
    url: "https://lume-site-sigma.vercel.app",
    img: shot("https://lume-site-sigma.vercel.app"),
  },
];
