// Config central — Felipi Marques Sites
// Único lugar para contatos e links. Não espalhar WhatsApp pelo código.

export const SITE = {
  brand: "Felipi Marques Sites",
  initials: "FM",
  domain: "sites.felipimarques.com",
  whatsappNumber: "5511977493412",
  whatsappDisplay: "+55 (11) 97749-3412",
  email: "felipimarques@gmail.com",
  instagram: "",
  youtube: "",
} as const;

const defaultMessage = "Olá, Felipi! Conheci seu site e gostaria de conversar sobre um projeto.";

export function whatsappLink(message: string = defaultMessage): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function whatsappForService(service: string): string {
  return whatsappLink(`Olá, Felipi! Conheci seu site e gostaria de conversar sobre: ${service}.`);
}
