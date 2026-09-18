import re

with open('src/pages/Index.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

reps = [
    ('atuacao','atuação'),('geracao','geração'),('dominio','domínio'),
    ('tecnicos','técnicos'),('modulos','módulos'),('Lideranca','Liderança'),
    ('Gestao','Gestão'),('Contabil','Contábil'),('Financas','Finanças'),
    ('Producao','Produção'),('tributario','tributário'),('Codigo','Código'),
    ('codigo','código'),('estrategico','estratégico'),('Traducao','Tradução'),
    ('solucoes','soluções'),('Solucoes','Soluções'),('criacao','criação'),
    ('automacao','automação'),('Automacao','Automação'),('validacao','validação'),
    ('integracao','integração'),('Integracao','Integração'),('migracao','migração'),
    ('documentacao','documentação'),('raciocinio','raciocínio'),
    ('experiencia','experiência'),('Experiencia','Experiência'),
    ('trajetoria','trajetória'),('enderecamento','endereçamento'),
    ('aprovacao','aprovação'),('apuracao','apuração'),
    ('parametrizacao','parametrização'),('customizacoes','customizações'),
    ('implantacoes','implantações'),('operacoes','operações'),
    ('conciliacao','conciliação'),('conferencia','conferência'),
    ('comunicacao','comunicação'),('obrigacoes','obrigações'),
    ('rejeicoes','rejeições'),('manutencao','manutenção'),
    ('medicoes','medições'),('intersecao','interseção'),
    ('certificacoes','certificações'),('avancado','avançado'),
    ('logistica','logística'),('saude','saúde'),
    ('construcao','construção'),('industria','indústria'),
    ('alimenticio','alimentício'),('comercio','comércio'),
    ('servicos','serviços'),('multiplas','múltiplas'),
    ('agentes autonomos','agentes autônomos'),
    ('senior','sênior'),('Senior','Sênior'),
    ('mensuravel','mensurável'),
    ('visao','visão'),('Visao','Visão'),
    ('Ciencias da Vida','Ciências da Vida'),
    ('educacao','educação'),('Educacao','Educação'),
    ('Analise e Desenvolvimento','Análise e Desenvolvimento'),
    ('Metodologias Ageis','Metodologias Ágeis'),
    ('legislacao','legislação'),
]

count = 0
for old, new in reps:
    n = content.count(old)
    if n > 0:
        content = content.replace(old, new)
        count += n

print(f'Replacements: {count}')

with open('src/pages/Index.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done!')
