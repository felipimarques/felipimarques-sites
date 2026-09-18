/* ===== PERFIL PROFISSIONAL ===== */
/* ===== EXPERIENCIA PROFISSIONAL ===== */
/* ===== DOMINIO TECNICO TOTVS PROTHEUS ===== */
/* Operações & Supply Chain */
/* Finanças & Controladoria */
/* Fiscal & Compliance */
/* Inovacao & Tecnologias Modernas */
/* ===== INTELIGENCIA ARTIFICIAL & AUTOMACAO ===== */
/* ===== STACK TECNOLOGICA ===== */
/* ===== FORMACAO & CERTIFICACOES ===== */
/* ===== EMPRESAS ATENDIDAS ===== */
/* ===== SOFT SKILLS ===== */
/* ===== IDIOMAS ===== */
/* ===== OBJETIVOS PROFISSIONAIS ===== */
/* ===== CONTATO ===== */
import { useState } from "react";
import { motion } from "framer-motion";

import {
    ArrowRight,
    Linkedin,
    Github,
    Mail,
    Phone,
    MapPin,
    ExternalLink,
    Star,
    BookOpen,
    Wrench,
    Brain,
    Award,
    ShieldCheck,
    Globe,
    Building2,
    Factory,
    ShoppingCart,
    BarChart3,
    FileText,
    Zap,
    Users,
    Lightbulb,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SplitFace from "@/components/SplitFace";
import Footer from "@/components/Footer";
const WHATSAPP_LINK = "https://wa.me/5511977493412?text=Ola%20Felipi%2C%20vi%20seu%20site%20e%20quero%20agendar%20uma%20conversa.";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 30
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
        }
    }
};

const stagger = {
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const SectionHeading = (
    {
        title,
        subtitle
    }: {
        title: string;
        subtitle?: string;
    }
) => (<motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{
        once: true,
        margin: "-100px"
    }}
    variants={fadeUp}
    className="mb-16 text-center">
    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    {subtitle && <p className="mt-4 text-lg text-[#666] italic">{subtitle}</p>}
</motion.div>);

const Index = () => {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-white text-[#111]">
            <Navigation />
            <SplitFace />
            {}
            <section id="about" className="py-24 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid gap-12 md:grid-cols-2 md:items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                margin: "-100px"
                            }}
                            variants={fadeUp}
                            className="order-2 md:order-1">
                            <img
                                src="/images/1780601862232-about-photo.png"
                                alt="Felipi Marques"
                                className="w-full rounded-lg object-cover" />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                margin: "-100px"
                            }}
                            variants={fadeUp}
                            className="order-1 md:order-2">
                            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Perfil Profissional
                                                                              </h2>
                            <div className="space-y-4 text-base leading-relaxed text-[#666]">
                                <p>Consultor TOTVS Protheus com{" "}
                                    <strong className="text-[#111]">25 anos de atuação terceirizada
                                                                                                  </strong>, atendendo{" "}
                                    <strong className="text-[#111]">+150 empresas</strong>em{" "}
                                    <strong className="text-[#111]">10 setores diferentes</strong>{" "}— de Motorola e iFood a Galderma e TransUnion. Minha trajetória
                                                                                          combina maestria no ERP tradicional com domínio da{" "}
                                    <strong className="text-[#111]">nova geração da plataforma
                                                                                                  </strong>{" "}(APIs REST nativas, Low-Code, Cloud, Fluig) e um diferencial
                                                                                          raro no mercado:{" "}
                                    <strong className="text-[#111]">desenvolvo agentes de IA
                                                                                                  </strong>{" "}que aceleram a entrega de software no ecossistema Protheus.
                                                                                        </p>
                            </div>
                            <div className="mt-8 space-y-5">
                                {[{
                                    icon: Brain,
                                    title: "AI-Native Developer",
                                    text: "Autor do SigaIA, plataforma open-source com 8 agentes de IA especializados em geração, revisão, migração e debugging de código ADVPL/TLPP. Construo servidores MCP que conectam LLMs a bases de conhecimento TOTVS, reduzindo em até 70% o tempo de desenvolvimento de customizações."
                                }, {
                                    icon: Building2,
                                    title: "Escala Real de Entrega",
                                    text: "+150 clientes atendidos como consultor terceirizado pelas consultorias Logos Technology, Oficina1 e ProERP. Projetos que vão de implantações completas a integrações complexas, auditorias fiscais e treinamento de equipes — sempre com resultado mensurável."
                                }, {
                                    icon: Globe,
                                    title: "Visão End-to-End",
                                    text: "Do pedido de compra ao faturamento, do contas a pagar as obrigações fiscais, do chão de fabrica ao dashboard do CFO. Conhecimento transversal que conecta processos, sistemas e pessoas em toda a cadeia de valor."
                                }, {
                                    icon: ShieldCheck,
                                    title: "Compliance Fiscal Blindado",
                                    text: "Especialista em SPED, eSocial, EFD-REINF, TAF e todo o ecossistema de obrigações acessórias brasileiras. Entregas fiscais com zero multas ou rejeições em toda a carteira de clientes."
                                }, {
                                    icon: Zap,
                                    title: "Protheus Moderno",
                                    text: "Experiência com APIs REST nativas (v12+), Low-Code (SIGACFG), PO-UI, TOTVS Fluig (BPM/ECM), Cloud/SaaS e integrações com marketplaces e ERPs de terceiros."
                                }].map(item => (<div key={item.title} className="flex gap-3">
                                    <item.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#999]" />
                                    <div>
                                        <h3 className="font-bold text-[#111]">{item.title}</h3>
                                        <p className="mt-0.5 text-sm leading-relaxed text-[#666]">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>))}
                            </div>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    <Button className="rounded-full bg-[#111] px-6 text-white hover:bg-[#333]">Entre em contato
                                                                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {}
            <section id="experience" className="bg-[#fafafa] py-24 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <SectionHeading title="Experiência Profissional" />
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px"
                        }}
                        variants={stagger}>
                        {[{
                            company: "Logos Technology",
                            role: "Analista/Programador Sênior · Líder Tecnico",
                            period: "Abr/2019 – Presente",
                            duration: "7 anos"
                        }, {
                            company: "Oficina1",
                            role: "Analista/Programador Sênior",
                            period: "Fev/2014 – Abr/2019",
                            duration: "5 anos"
                        }, {
                            company: "Logos Technology",
                            role: "Analista/Programador Sênior",
                            period: "Dez/2009 – Fev/2014",
                            duration: "4 anos"
                        }, {
                            company: "ProERP – Consultoria de Sistemas",
                            role: "Analista/Programador Pleno",
                            period: "Jun/2003 – Nov/2009",
                            duration: "6 anos"
                        }].map(exp => (<motion.div
                            key={exp.period}
                            variants={fadeUp}
                            className="flex flex-col gap-2 rounded-xl border border-[#eee] bg-white p-6 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-[#111]">
                                    {exp.company}
                                </h3>
                                <p className="text-sm italic text-[#666]">{exp.role}</p>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="text-sm text-[#999]">{exp.period}</span>
                                <span className="text-2xl font-black text-[#111]">
                                    {exp.duration}
                                </span>
                            </div>
                        </motion.div>))}
                    </motion.div>
                </div>
            </section>
            {}
            <section id="expertise" className="py-24 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <SectionHeading
                        title="Domínio Técnico — Ecossistema TOTVS Protheus"
                        subtitle="Conhecimento transversal construído em 25 anos de atuação prática — da implantação a otimização avançada." />
                    {}
                    <motion.div
                        className="mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px"
                        }}
                        variants={fadeUp}>
                        <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                            <Factory className="h-5 w-5" />Operações & Supply Chain
                                                                    </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-[#eee]">
                                        <th className="pb-3 font-bold text-[#111]">Modulo</th>
                                        <th className="pb-3 font-bold text-[#111]">Dominio</th>
                                        <th className="pb-3 font-bold text-[#111] hidden md:table-cell">Entregas Típicas
                                                                                                            </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[{
                                        mod: "SIGACOM (Compras)",
                                        stars: "⭐⭐⭐⭐⭐",
                                        deliveries: "SC, Cotações, Pedidos, Workflow de Aprovação, Contratos, B2B, Follow-up"
                                    }, {
                                        mod: "SIGAEST (Estoque)",
                                        stars: "⭐⭐⭐⭐⭐",
                                        deliveries: "Movimentações, Inventários (Rotativo/Ciclico), ACD, Endereçamento, Custos (Médio/PEPS/Padrao), Curva ABC"
                                    }, {
                                        mod: "SIGAFAT (Faturamento)",
                                        stars: "⭐⭐⭐⭐⭐",
                                        deliveries: "Pedidos de Venda, NF-e/NFS-e/CT-e/MDF-e, TES/Tributação, Romaneio, Expedição, E-commerce"
                                    }, {
                                        mod: "SIGAPCP (Produção)",
                                        stars: "⭐⭐⭐⭐⭐",
                                        deliveries: "Estrutura de Produtos, OP, Apontamentos, MRP, Roteiros, Capacidade"
                                    }, {
                                        mod: "SIGATEC (Field Service)",
                                        stars: "⭐⭐⭐⭐⭐",
                                        deliveries: "Contratos de Manutenção, Chamados/SLA, OS, Controle de Peças, Técnicos em Campo"
                                    }].map(row => (<tr key={row.mod} className="border-b border-[#f5f5f5]">
                                        <td className="py-3 font-bold text-[#111]">{row.mod}</td>
                                        <td className="py-3">{row.stars}</td>
                                        <td className="py-3 text-[#666] hidden md:table-cell">
                                            {row.deliveries}
                                        </td>
                                    </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                    {}
                    <motion.div
                        className="mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px"
                        }}
                        variants={fadeUp}>
                        <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                            <BarChart3 className="h-5 w-5" />Finanças, Contábil &
                                                                      Controladoria
                                                                    </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-[#eee]">
                                        <th className="pb-3 font-bold text-[#111]">Modulo</th>
                                        <th className="pb-3 font-bold text-[#111]">Dominio</th>
                                        <th className="pb-3 font-bold text-[#111] hidden md:table-cell">Entregas Típicas
                                                                                                            </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[{
                                        mod: "SIGAFIN (Financeiro)",
                                        stars: "⭐⭐⭐⭐",
                                        deliveries: "CNAB 240/400, Fluxo de Caixa, Conciliação Bancaria, Múltiplas Moedas, Borderôs, Câmbio"
                                    }, {
                                        mod: "SIGACTB (Contábil)",
                                        stars: "⭐⭐⭐⭐⭐",
                                        deliveries: "Lançamentos, Balancetes, Centro de Custos, Rateios Multiníveis, Fechamento, Auditoria"
                                    }, {
                                        mod: "SIGAATF (Ativo Fixo)",
                                        stars: "⭐⭐⭐⭐",
                                        deliveries: "Bens Patrimoniais, Depreciação (Linear/Acelerada/Incentivada), CIAP, Inventario Físico"
                                    }, {
                                        mod: "SIGAPMS (Projetos)",
                                        stars: "⭐⭐⭐",
                                        deliveries: "EAP/WBS, Alocação de Recursos, Timesheet, Custos e Receitas por Projeto"
                                    }, {
                                        mod: "SIGAGCT (Contratos)",
                                        stars: "⭐⭐⭐⭐⭐",
                                        deliveries: "Compra/Venda/Parceria, Reajustes, Medições, Faturamento por Etapa"
                                    }].map(row => (<tr key={row.mod} className="border-b border-[#f5f5f5]">
                                        <td className="py-3 font-bold text-[#111]">{row.mod}</td>
                                        <td className="py-3">{row.stars}</td>
                                        <td className="py-3 text-[#666] hidden md:table-cell">
                                            {row.deliveries}
                                        </td>
                                    </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                    {}
                    <motion.div
                        className="mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px"
                        }}
                        variants={fadeUp}>
                        <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                            <FileText className="h-5 w-5" />Fiscal, Tributário & Compliance
                                                                      Regulatório
                                                                    </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-[#eee]">
                                        <th className="pb-3 font-bold text-[#111]">Modulo</th>
                                        <th className="pb-3 font-bold text-[#111]">Dominio</th>
                                        <th className="pb-3 font-bold text-[#111] hidden md:table-cell">Entregas Típicas
                                                                                                            </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[{
                                        mod: "SIGAFIS (Livros Fiscais)",
                                        stars: "⭐⭐⭐",
                                        deliveries: "Apuracao ICMS/IPI/ISS, EFD, SINTEGRA, GIA, Conferencia de Divergencias"
                                    }, {
                                        mod: "TAF/TSS",
                                        stars: "⭐⭐⭐⭐⭐",
                                        deliveries: "eSocial (S-1000 a S-5000), EFD-REINF, DCTFWeb, Validacao de Layout, Recibos"
                                    }, {
                                        mod: "SPED",
                                        stars: "⭐⭐⭐",
                                        deliveries: "EFD-Contribuicoes (PIS/COFINS), ECD, ECF, Correcoes via PVA"
                                    }].map(row => (<tr key={row.mod} className="border-b border-[#f5f5f5]">
                                        <td className="py-3 font-bold text-[#111]">{row.mod}</td>
                                        <td className="py-3">{row.stars}</td>
                                        <td className="py-3 text-[#666] hidden md:table-cell">
                                            {row.deliveries}
                                        </td>
                                    </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                    {}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px"
                        }}
                        variants={fadeUp}>
                        <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                            <Zap className="h-5 w-5" />Inovacao & Tecnologias Modernas no
                                                                      Protheus
                                                                    </h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[{
                                tech: "APIs REST Nativas",
                                exp: "Desenvolvimento e consumo de APIs REST do Protheus (v12+), integração com sistemas externos"
                            }, {
                                tech: "Low-Code / SIGACFG",
                                exp: "Configurador de processos, regras de negocio e validações sem codificacao"
                            }, {
                                tech: "PO-UI / Protheus UI",
                                exp: "Framework moderno de componentes web para interfaces responsivas"
                            }, {
                                tech: "TOTVS Fluig",
                                exp: "Integração Protheus ↔ Fluig para BPM, ECM, Workflows e Portal do Colaborador"
                            }, {
                                tech: "Smart View / Analytics",
                                exp: "Dashboards gerenciais, KPIs em tempo real, integração com Power BI"
                            }, {
                                tech: "Cloud / TOTVS Assinatura",
                                exp: "Experiência com ambientes cloud Protheus e modelo SaaS"
                            }, {
                                tech: "TOTVS TechFin",
                                exp: "Integração com serviços financeiros embarcados (split de pagamentos, antecipacao)"
                            }, {
                                tech: "Integração Marketplaces",
                                exp: "Conexao Protheus com e-commerce, marketplaces e ERPs de terceiros"
                            }, {
                                tech: "Mobilidade",
                                exp: "Aplicações mobile para coleta de dados, aprovoes e apontamentos em campo"
                            }].map(
                                item => (<div key={item.tech} className="rounded-lg border border-[#eee] bg-white p-4">
                                    <h4 className="font-bold text-[#111]">{item.tech}</h4>
                                    <p className="mt-1 text-sm text-[#666]">{item.exp}</p>
                                </div>)
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>
            {}
            <section id="ai" className="bg-[#111] py-24 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px"
                        }}
                        variants={fadeUp}
                        className="mb-16 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Inteligencia Artificial & Automação
                                                                    </h2>
                        <p
                            className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/50 italic">Diferencial competitivo — poucos profissionais Protheus no Brasil
                                                                      atuam nesta interseção.
                                                                    </p>
                    </motion.div>
                    <motion.div
                        className="overflow-x-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px"
                        }}
                        variants={fadeUp}>
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="pb-4 font-bold text-white">Area</th>
                                    <th className="pb-4 font-bold text-white">Competencias</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[{
                                    area: "Agentes de IA para Desenvolvimento",
                                    comp: "Criacao de agentes autônomos (Claude, Cursor, Copilot) para geração, revisão, migração e debugging de código ADVPL/TLPP"
                                }, {
                                    area: "MCP (Model Context Protocol)",
                                    comp: "Desenvolvimento de servidores MCP que conectam LLMs a bases de conhecimento TOTVS (TDN, documentação tecnica, apostilas)"
                                }, {
                                    area: "SigaIA",
                                    comp: "Plataforma open-source com 8 agentes especializados, templates .prw/.tlpp, regras de estilo e servidor de documentação"
                                }, {
                                    area: "Prompt Engineering",
                                    comp: "Design de instrucoes e cadeias de raciocínio para agentes que produzem código ADVPL com qualidade de sênior"
                                }, {
                                    area: "Automação de Workflows",
                                    comp: "Integração de LLMs em pipelines de CI/CD para validação automatizada de código Protheus"
                                }, {
                                    area: "Ferramentas",
                                    comp: "Claude (Anthropic), Cursor IA, GitHub Copilot, Hermes Agent, VS Code, OpenCode CLI"
                                }].map(row => (<tr key={row.area} className="border-b border-white/5">
                                    <td className="py-4 pr-6 font-bold text-white">
                                        {row.area}
                                    </td>
                                    <td className="py-4 text-white/60">{row.comp}</td>
                                </tr>))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>
            {}
            <section id="stack" className="py-24 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <SectionHeading title="Stack Tecnologica" />
                    <motion.div
                        className="overflow-x-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px"
                        }}
                        variants={fadeUp}>
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-[#eee]">
                                    <th className="pb-4 font-bold text-[#111]">Categoria</th>
                                    <th className="pb-4 font-bold text-[#111]">Tecnologias</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[{
                                    cat: "Linguagens",
                                    tech: "ADVPL, TLPP, SQL (T-SQL), JavaScript"
                                }, {
                                    cat: "IA & Automação",
                                    tech: "Claude, Cursor IA, GitHub Copilot, Hermes Agent, OpenCode CLI, MCP"
                                }, {
                                    cat: "Banco de Dados",
                                    tech: "SQL Server — Performance Tuning, Stored Procedures, Triggers, Indices, Query Optimization"
                                }, {
                                    cat: "Integrações",
                                    tech: "REST, SOAP, XML, JSON, APIs, EDI"
                                }, {
                                    cat: "Protheus",
                                    tech: "Application Server, DBAccess, Load Balance, RPO, Schedule, TReports, MVC"
                                }, {
                                    cat: "BI & Reports",
                                    tech: "Smart View, Power BI, Crystal Reports"
                                }, {
                                    cat: "DevOps",
                                    tech: "Git, GitHub, Bitbucket, VS Code"
                                }, {
                                    cat: "Gestão",
                                    tech: "Jira, Confluence, Azure DevOps, Trello"
                                }, {
                                    cat: "Metodologias",
                                    tech: "Scrum, Kanban"
                                }].map(row => (<tr key={row.cat} className="border-b border-[#f5f5f5]">
                                    <td className="py-4 pr-6 font-bold text-[#111]">
                                        {row.cat}
                                    </td>
                                    <td className="py-4 text-[#666]">{row.tech}</td>
                                </tr>))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>
            {}
            <section className="bg-[#fafafa] py-24 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <SectionHeading title="Formacao & Certificações" />
                    <motion.div
                        className="grid gap-12 md:grid-cols-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px"
                        }}
                        variants={stagger}>
                        <motion.div variants={fadeUp}>
                            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                                <BookOpen className="h-5 w-5" />Formacao Academica
                                                                              </h3>
                            <div className="rounded-xl border border-[#eee] bg-white p-6">
                                <h4 className="text-lg font-bold text-[#111]">Tecnologia em Análise e Desenvolvimento de Sistemas
                                                                                        </h4>
                                <p className="mt-2 text-[#666]">Faculdades Metropolitanas Unidas (FMU) · 2007–2010
                                                                                        </p>
                            </div>
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                                <Award className="h-5 w-5" />Certificações TOTVS (Academia
                                                                                TOTVS)
                                                                              </h3>
                            <div className="rounded-xl border border-[#eee] bg-white p-6">
                                <ul className="space-y-2 text-sm text-[#666]">
                                    <li>· Desenvolvimento ADVPL Avancado</li>
                                    <li>· Modulo Fiscal (SPED, NF-e, EFD)</li>
                                    <li>· Modulo Contábil</li>
                                    <li>· Modulo Financeiro</li>
                                    <li>· Modulo Faturamento</li>
                                    <li>· Modulo Estoque e Compras</li>
                                    <li>· Integrações Protheus com WebServices (REST/SOAP)</li>
                                </ul>
                            </div>
                            <h3 className="mt-8 mb-4 text-lg font-bold text-[#111]">Certificações Complementares
                                                                              </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Administracao de Banco de Dados SQL Server",
                                    "eSocial, Reinf e Legislacao Fiscal Contemporanea",
                                    "Metodologias Ágeis — Scrum e Kanban",
                                    "Git e Versionamento de Código"
                                ].map(cert => (<span
                                    key={cert}
                                    className="rounded-full bg-white border border-[#eee] px-3 py-1 text-xs text-[#666]">
                                    {cert}
                                </span>))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            {}
            <section id="clients" className="py-24 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <SectionHeading
                        title="+150 Empresas Atendidas"
                        subtitle="+150 empresas em 25 anos de atuação como consultor terceirizado — atendendo clientes das consultorias Logos Technology, Oficina1 e ProERP." />
                    <motion.div
                        className="mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px"
                        }}
                        variants={fadeUp}>
                        <h3 className="mb-6 text-lg font-bold">Tipos de projeto executados</h3>
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                            {[{
                                title: "Implantações",
                                desc: "Levantamento de requisitos, parametrização de módulos, migração de dados, testes integrados e go-live"
                            }, {
                                title: "Desenvolvimento",
                                desc: "Customizações ADVPL/TLPP, pontos de entrada, relatorios (TReports/Crystal), telas e user functions"
                            }, {
                                title: "Integrações",
                                desc: "Web Services REST/SOAP, APIs, EDI, troca de arquivos entre Protheus e sistemas externos"
                            }, {
                                title: "Auditorias",
                                desc: "Revisão fiscal e contabil, diagnostico de processos, conformidade SPED/eSocial/Reinf"
                            }, {
                                title: "Treinamentos",
                                desc: "Capacitacao de usuarios-chave, transferencia de conhecimento e documentação de processos"
                            }].map(item => (<div
                                key={item.title}
                                className="rounded-xl border border-[#eee] bg-white p-5 transition-colors hover:border-[#d8d8d8]">
                                <div className="mb-4 h-px w-10 bg-[#111]" />
                                <h4 className="font-bold text-[#111]">{item.title}</h4>
                                <p className="mt-2 text-xs leading-relaxed text-[#777]">
                                    {item.desc}
                                </p>
                            </div>))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px"
                        }}
                        variants={fadeUp}
                        className="mb-16">
                        <h3 className="mb-6 text-lg font-bold">Destaques</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Motorola",
                                "iFood",
                                "Zebra Technologies",
                                "Glory Global",
                                "Staples",
                                "TransUnion",
                                "Galderma",
                                "OAB",
                                "Construtora Queiroz Galvao",
                                "Construtora OAS",
                                "Gates",
                                "Varian Medical Systems",
                                "ED&F Man",
                                "Vagas.com",
                                "Vonage",
                                "BR Towers"
                            ].map(name => (<span
                                key={name}
                                className="rounded-full bg-[#111] px-4 py-2 text-sm font-medium text-white">
                                {name}
                            </span>))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px"
                        }}
                        variants={fadeUp}>
                        <h3 className="mb-6 text-center text-lg font-bold">Por Setor</h3>
                        <div className="space-y-4">
                            {[{
                                sector: "Tecnologia & Telecom",
                                companies: "Motorola Mobility, Zebra Technologies, Vonage Brasil, Netfama, Agecom, DPR Telecom, Multirede, HTM Eletronica, BR Towers, Zatix (Omnilink), NeoIntelligence, Total Link"
                            }, {
                                sector: "Industria & Manufatura",
                                companies: "Glory Global, Gates do Brasil, Varian Medical, Mold-Masters, Orthofix, Ospina, Injex, Valvugas, VAG, Paranoa, Resiplastic, Metal Limpo, Metaltela, AMR Equipamentos, Esteves Metais, Repume, Uniquimica, Caoni, Fort Embalagens, Labortex, Luvata, Mainetti, Promax (Bardahl), Rejuntabras, Pyramid, Acos Macom, Industria Agricola Tozan, Sanmina-SCI"
                            }, {
                                sector: "Alimenticio & Bebidas",
                                companies: "iFood, Moinho Santa Clara, Bombay Herbs, BR Spices, Cardeal, Bluebev, Premix Nutricao Animal, So Gelo, Hentona, Interfood, Dayhome Food Service"
                            }, {
                                sector: "Construcao & Engenharia",
                                companies: "Construtora OAS, Queiroz Galvao, Heleno & Fonseca, Montrel, MCS Engenharia, Active Engenharia"
                            }, {
                                sector: "Saude & Ciências da Vida",
                                companies: "Galderma Brasil, A+ Medicina Diagnostica, SP Vacinas, Ciclo Med, Engemed, Invel"
                            }, {
                                sector: "Financeiro & Seguros",
                                companies: "TransUnion, NovaDAX, Yasuda (Sompo Seguros), Comerc Energia, C13 Investimentos, Disal Consorcio, Hub Accounting"
                            }, {
                                sector: "Varejo & E-commerce",
                                companies: "Staples, Trocafone, RestauranteWeb, Presentes Mickey, Just Fit Sports, Officenet, Multiparts"
                            }, {
                                sector: "Educação",
                                companies: "MOVE Educação, Avenues World School, Espro, Editora Atlas, Universo dos Livros, Editora Meio & Mensagem"
                            }, {
                                sector: "Logistica & Transporte",
                                companies: "Sopetra, Grecco Transportadora, ASN Brasil, GMC Consultoria, Dini Textil"
                            }, {
                                sector: "Servicos & Outros",
                                companies: "OAB, Grupo TV1, Am4 Propaganda, CB Contact Center, Coopermiti, Day Brasil, Ebertech, Gilbarco Veeder-Root, Implacil Osstem, Indra Energia, Izzo Instrumentos, Policontrol, PowerSafe, Royal Marck, Silhouette, Sociedade Harmonia de Tenis, Superlogica, Symbiosys, Tecmach, Vox Music, WPS, Vedamotors, Extera, FertiGrowth, G&E, Nova Muriel, Quilombo, Sementes Strobel"
                            }].map(item => (<div
                                key={item.sector}
                                className="rounded-lg border border-[#eee] bg-white p-4">
                                <h4 className="text-sm font-bold text-[#111]">
                                    {item.sector}
                                </h4>
                                <p className="mt-1 text-xs leading-relaxed text-[#999]">
                                    {item.companies}
                                </p>
                            </div>))}
                        </div>
                    </motion.div>
                </div>
            </section>
            {}
            <section className="bg-[#fafafa] py-24 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <SectionHeading title="Soft Skills" />
                    <motion.div
                        className="space-y-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px"
                        }}
                        variants={stagger}>
                        {[{
                            skill: "Líderança Tecnica",
                            desc: "Coordenacao de equipes multidisciplinares em projetos criticos"
                        }, {
                            skill: "Tradução Negocio↔Tecnologia",
                            desc: "Comunicacao fluente entre areas funcionais e times técnicos"
                        }, {
                            skill: "Resolucao de Problemas Complexos",
                            desc: "Diagnostico de causa raiz com soluções definitivas"
                        }, {
                            skill: "Pensamento Estrategico",
                            desc: "Decisoes tecnicas orientadas a impacto de longo prazo"
                        }, {
                            skill: "Adaptabilidade",
                            desc: "Rapida assimilacao de novos módulos, processos e tecnologias"
                        }, {
                            skill: "Mentoria",
                            desc: "Formacao de talentos, transferencia de conhecimento, documentação"
                        }, {
                            skill: "Gestão de Crises",
                            desc: "Atuacao precisa sob pressao em incidentes criticos e go-lives"
                        }].map(item => (<motion.div
                            key={item.skill}
                            variants={fadeUp}
                            className="flex flex-col gap-1 rounded-xl border border-[#eee] bg-white p-5 md:flex-row md:items-center md:justify-between">
                            <h3 className="font-bold text-[#111]">{item.skill}</h3>
                            <p className="text-sm text-[#666]">{item.desc}</p>
                        </motion.div>))}
                    </motion.div>
                </div>
            </section>
            {}
            <section className="py-24 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <SectionHeading title="Idiomas" />
                    <motion.div
                        className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px"
                        }}
                        variants={stagger}>
                        {[{
                            flag: "🇧🇷",
                            lang: "Portugues",
                            level: "Nativo"
                        }, {
                            flag: "🇺🇸",
                            lang: "Ingles",
                            level: "Intermediario (Leitura Tecnica Avancada)"
                        }].map(item => (<motion.div
                            key={item.lang}
                            variants={fadeUp}
                            className="flex flex-1 items-center gap-4 rounded-xl border border-[#eee] bg-white p-6">
                            <span className="text-3xl">{item.flag}</span>
                            <div>
                                <h3 className="font-bold text-[#111]">{item.lang}</h3>
                                <p className="text-sm text-[#999]">{item.level}</p>
                            </div>
                        </motion.div>))}
                    </motion.div>
                </div>
            </section>
            {}
            <section className="bg-[#fafafa] py-24 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <SectionHeading title="Objetivos Profissionais" />
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px"
                        }}
                        variants={fadeUp}
                        className="mx-auto max-w-3xl">
                        <p className="mb-8 text-center text-lg leading-relaxed text-[#666]">Busco posicoes que valorizem a combinacao de{" "}
                            <strong className="text-[#111]">expertise em ERP Protheus com inovacao em IA
                                                                              </strong>:
                                                                    </p>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {[
                                "Especialista / Arquiteto de Soluções Protheus",
                                "Líder Tecnico / Coordenador de Equipe Protheus",
                                "Consultor Sênior de Implantacao ou Sustentacao",
                                "Desenvolvedor Sênior ADVPL/TLPP"
                            ].map(obj => (<div
                                key={obj}
                                className="flex items-center gap-3 rounded-lg border border-[#eee] bg-white p-4">
                                <ArrowRight className="h-4 w-4 flex-shrink-0 text-[#999]" />
                                <span className="text-sm font-medium text-[#111]">{obj}</span>
                            </div>))}
                        </div>
                        <div className="mt-8 space-y-2 text-center text-sm text-[#666]">
                            <p>
                                <strong className="text-[#111]">Disponibilidade:</strong>{" "}Imediata
                                                                              </p>
                            <p>
                                <strong className="text-[#111]">Modalidade:</strong>Remoto
                                                                              </p>
                            <p>
                                <strong className="text-[#111]">Localizacao:</strong>Sao
                                                                                Paulo/SP (disponibilidade para viagens)
                                                                              </p>
                        </div>
                    </motion.div>
                </div>
            </section>
            {}
            <section id="contact" className="py-24 md:py-32">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px"
                        }}
                        variants={fadeUp}>
                        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Contato
                                                                    </h2>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px"
                        }}
                        variants={fadeUp}
                        className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                            <Button
                                className="rounded-full bg-[#111] px-8 py-6 text-base text-white hover:bg-[#333]">
                                <Phone className="mr-2 h-4 w-4" />WhatsApp Direto
                                                                              </Button>
                        </a>
                        <a href="mailto:felipimarques@gmail.com">
                            <Button
                                variant="outline"
                                className="rounded-full border-[#ddd] px-8 py-6 text-base hover:bg-[#fafafa]">
                                <Mail className="mr-2 h-4 w-4" />felipimarques@gmail.com
                                                                              </Button>
                        </a>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px"
                        }}
                        variants={fadeUp}
                        className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[#999]">
                        <span className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />Sao Paulo, SP
                                                                    </span>
                        <span className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />+55 (11) 97749-3412
                                                                    </span>
                        <a
                            href="https://www.linkedin.com/in/felipi-marques-oliveira-b497033b"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 transition-colors hover:text-[#111]">
                            <Linkedin className="h-4 w-4" />LinkedIn
                                                                    </a>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Index;