// Work real — projetos publicados na Vercel, com prova no Google.
// Mockups via thum.io (screenshot ao vivo da URL, sem arquivo manual).

export type Project = {
  name: string;
  segment: string;
  scope: string;
  proof?: string;
  url: string;
};

const shot = (url: string) =>
  `https://image.thum.io/get/width/1200/crop/900/noanimate/${url}`;

export const PROJECTS: (Project & { img: string; fallback?: string })[] = [
  {
    name: "Fjuris",
    segment: "Correspondência Jurídica · São Paulo",
    scope: "Site + captação + WhatsApp",
    url: "https://site-jet-omega-78.vercel.app",
    img: shot("https://site-jet-omega-78.vercel.app"),
  },
  {
    name: "Lume Lavanderia",
    segment: "Lavanderia 24h · Jaçanã",
    scope: "Site + ciclo R$15,90 + mapa",
    proof: "5.0★ no Google · 13 avaliações",
    url: "https://lume-site-sigma.vercel.app",
    img: shot("https://lume-site-sigma.vercel.app"),
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
    name: "Mãe Flávia de Yemanjá",
    segment: "Yalorixá · Umbanda",
    scope: "Site institucional",
    url: "https://maeflavia.vercel.app",
    img: shot("https://maeflavia.vercel.app"),
  },
  {
    name: "Rupies",
    segment: "Plataforma · Feiras e Eventos",
    scope: "Site + plataforma",
    url: "https://rupies.com.br/",
    img: "/work-rupies.png",
    fallback: shot("https://rupies.com.br/"),
  },
];
