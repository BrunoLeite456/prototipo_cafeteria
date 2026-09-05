# Café da Claudinha — Site institucional

Protótipo de site para a cafeteria "Café da Claudinha", desenvolvido como trabalho
acadêmico de Análise e Desenvolvimento de Sistemas, seguindo o **Modelo Cascata**.

## Estrutura do projeto

```
cafe-da-claudinha/
├── index.html                          Página inicial
├── cardapio.html                       Página de cardápio (com filtro por categoria)
├── contato.html                        Página de contato (formulário simulado)
├── css/
│   └── style.css                       Estilo e responsividade de todo o site
├── js/
│   └── script.js                       Menu mobile, filtro do cardápio e formulário
├── documentacao/
│   ├── documentacao.html               Documentação interativa (casos de uso e modelagem de requisitos)
│   ├── documentacao-formal.html        Fonte do documento formal em texto corrido
│   └── documentacao-projeto.pdf        Documentação completa do trabalho (PDF)
└── README.md                           Este arquivo
```

A documentação **não faz parte da navegação pública do site** — não aparece no
menu de nenhuma página. Ela é acessada apenas por um link discreto no rodapé
(`Documentação`, ao lado do texto de rodapé), que leva até
`documentacao/documentacao.html`. Essa página traz um painel lateral com três
seções:

1. **Documentação** — visão geral do projeto, etapas do Modelo Cascata, tecnologias e status de entrega;
2. **Casos de Uso** — ator, diagrama de casos de uso e especificação de cada caso;
3. **Modelagem de Requisitos** — requisitos funcionais e não funcionais, com rastreabilidade para os casos de uso;
4. **MER** — modelo entidade-relacionamento conceitual (CATEGORIA, PRODUTO e MENSAGEM_CONTATO), com diagrama e dicionário de dados.

O material de apoio para a apresentação/entrega do trabalho em texto corrido
(com capa, sumário e considerações finais) continua em
`documentacao/documentacao-projeto.pdf` / `documentacao-formal.html`.

## Como executar no VSCode

1. Abra a pasta `cafe-da-claudinha` no VSCode (`Arquivo > Abrir Pasta`).
2. Instale a extensão **Live Server** (se ainda não tiver).
3. Clique com o botão direito em `index.html` e escolha **"Open with Live Server"**.
4. O navegador abrirá automaticamente o site em `http://localhost:5500` (ou porta similar).

Alternativa sem extensão: basta dar duplo clique em `index.html` para abrir
direto no navegador — todas as páginas funcionam sem precisar de um servidor,
pois o projeto não usa backend nem banco de dados.

## Documentação do projeto (Modelo Cascata)

O arquivo `documentacao/documentacao-projeto.pdf` é um documento formal, em texto
corrido (estilo relatório acadêmico), com capa, sumário e as seções abaixo:

1. Introdução
2. Objetivos
3. Metodologia — Modelo Cascata
4. Requisitos do Sistema (funcionais e não funcionais)
5. Análise e Projeto
6. Desenvolvimento
7. Testes
8. Implantação
9. Considerações Finais

**Antes de entregar**, abra o PDF e preencha os campos entre colchetes na capa e
na assinatura final: `[Nome da instituição]`, `[Nome da disciplina]`,
`[Nome do(a) aluno(a)]` e `[Cidade], [mês] de [ano]`. Se preferir editar direto
o conteúdo, o arquivo-fonte está em `documentacao-formal.html` (peça para eu
gerar novamente o PDF depois de editar).

### Requisitos Funcionais

- **RF01** — O site apresenta informações sobre a cafeteria.
- **RF02** — O site apresenta o cardápio com nome, descrição, preço e imagem.
- **RF03** — O site apresenta endereço, telefone e horário de funcionamento.
- **RF04** — O usuário pode preencher um formulário de contato (nome, e-mail, mensagem).
- **RF05** — O site possui página inicial, cardápio e contato.

### Requisitos Não Funcionais

- **RNF01** — O site funciona em computadores e celulares (responsivo).
- **RNF02** — Interface simples e agradável.

### Modelo Cascata aplicado

```
REQUISITOS → ANÁLISE/PROJETO → DESENVOLVIMENTO → TESTES → IMPLANTAÇÃO
```

Cada etapa só é iniciada após a conclusão da anterior, conforme a definição
clássica do modelo.

## Tecnologias

- HTML5
- CSS3 (sem frameworks, apenas Google Fonts para tipografia)
- JavaScript puro (sem bibliotecas)

O formulário de contato não envia dados de verdade — ele apenas simula o envio
e exibe a mensagem "Mensagem enviada com sucesso!", conforme solicitado no
escopo do trabalho (projeto sem backend e sem banco de dados).
