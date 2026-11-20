export const PROFILE = {
  name: "Julio Gabriel",
  roleBadge: "Desenvolvedor Back-end Java",
  headline: "Sistemas em Java que organizam dados e simplificam processos.",
  lead: "Construo APIs e aplicações com Java e Spring Boot, com código organizado e fácil de manter, para que a equipe possa evoluir.",
  heroTags: ["Java", "JavaScript", "Spring Boot", "SQL", "API"],
  city: "Fortaleza, CE",
  email: "juliogabrieldev7@gmail.com",
  whatsapp: "5585999021201",
  whatsappMessage: "Olá, Gabriel! Vi seu portfólio e gostaria de conversar.",
  github: "https://github.com/Julio-Gadelha",
  linkedin: "https://www.linkedin.com/in/juliogabrieldev14/",
};

export const MARQUEE = [
  "Java",
  "Spring Boot",
  "API",
  "SQL",
  "Git & GitHub",
  "JavaScript",
];

export const PROJECTS = [
  {
    title: "FinTrack — Sistema de gerenciamento financeiro",
    cover: "projects/Fintrack.png",
    coverAlt:
      "Tela do sistema FinTrack exibindo saldos, transações e exportação CSV",
    summary:
      "Aplicação desktop desenvolvida para facilitar o controle de receitas, despesas e acompanhamento financeiro pessoal.",
    problem:
      "Falta de visibilidade consolidada sobre entradas, saídas e categorização de gastos sem depender de planilhas manuais.",
    solution:
      "Sistema desktop estruturado em Java com Programação Orientada a Objetos, persistência local relacional em SQLite e geração de relatórios portáveis.",
    features: [
      "Gerenciamento completo de contas, receitas e despesas por categoria.",
      "Exportação de relatórios financeiros em formato CSV.",
    ],
    results:
      "Entrega de um fluxo completo de registro e auditoria financeira offline, aplicando separação de responsabilidades, modelagem relacional e exportação padronizada para análise externa.",
    tags: ["Java", "JavaFX", "SQLite", "Maven", "POO"],
    repo: "https://github.com/FinTrackFB/FinTrackFB-Project.git",
  },
  {
    title: "Sistema de Gerenciamento de Biblioteca",
    cover: "projects/Biblioteca.png",
    coverAlt:
      "Arquitetura de classes e terminal interativo do Sistema de Biblioteca",
    summary:
      "Sistema back-end em Java para controle de acervo físico e digital, consulta de disponibilidade e gestão de empréstimos.",
    problem:
      "Dificuldade no controle de disponibilidade e regras distintas entre exemplares físicos (estante/conservação) e digitais (formato/acesso).",
    solution:
      "Arquitetura orientada a objetos com hierarquia de classes, herança, polimorfismo e interfaces específicas por tipo de mídia, operada via menu interativo.",
    features: [
      "Cadastro unificado de livros físicos e digitais com atributos específicos.",
      "Consulta rápida de disponibilidade no acervo.",
    ],
    results:
      "Consolidação de domínio orientado a objetos limpo e desacoplado, eliminando duplicação de regras de negócio entre diferentes tipos de itens do acervo.",
    tags: ["Java", "POO", "Collections"],
    repo: "https://github.com/Julio-Gadelha/SistemaGerenciamentoBiblioteca.git",
  },
];

export const ABOUT = [
  "Estudante de Ciência da Computação em Fortaleza (CE), com foco em desenvolvimento de software back-end com Java, Spring Boot e bancos de dados. Desenvolvo aplicações com código organizado, regras de negócio claras e boas práticas.",
  "Tenho base em JavaScript e React, o que facilita o trabalho com equipes de front-end. Busco meu primeiro estágio em desenvolvimento de software para resolver problemas reais e evoluir.",
];

export const TECH_GROUPS = [
  {
    category: "Back-end",
    featured: true,
        items: [
      { name: "Java", highlight: true },
      { name: "Spring Boot", highlight: true },
      { name: "API ", highlight: true },
      { name: "API REST", highlight: true },
      { name: "POO", highlight: true },
      { name: "JavaFX", highlight: false },
    ],
  },
  {
    category: "Banco de dados",
    featured: false,
    items: [
      { name: "SQL", highlight: true },
      { name: "MySql", highlight: true },
      { name: "SQLite", highlight: false },
      { name: "Modelagem relacional", highlight: true },
    ],
  },
  {
    category: "Front-end",
    featured: false,
    items: [
      { name: "JavaScript", highlight: false },
      { name: "React", highlight: false },
      { name: "HTML", highlight: false },
      { name: "CSS", highlight: false },
    ],
  },
  {
    category: "Ferramentas e nuvem",
    featured: false,
    items: [
      { name: "Git", highlight: false },
      { name: "GitHub", highlight: false },
    ],
  },
];

export const LANGUAGES = [
  {
    name: "Inglês",
    level: "Intermediário (B2)",
    detail:
      "Leitura de documentações técnicas, artigos, códigos-fonte e comunicação profissional.",
  },
];

export const EDUCATION = [
  {
    when: "2026 a 2030",
    title: "Bacharelado em Ciência da Computação",
    meta: "Centro Universitário Farias Brito — Ênfase em Java, C++ e Banco de Dados",
  },
  {
    when: "2026",
    title: "Bootcamp IA para Java Back-End",
    meta: "DIO — Desenvolvimento Back-end com Java",
  },
  {
    when: "2025",
    title: "Bootcamp Santander — Back-end com Java & AWS",
    meta: "DIO — API, Java e fundamentos de nuvem",
  },
  {
    when: "2024 a 2025",
    title: "Formação Desenvolvimento Full Stack",
    meta: "Digital College — React, Node.js e bancos de dados",
  },
  {
    when: "2026 ",
    title: "Habilidades Interpessoais",
    meta: "IREDE-Modulo Java",
  },
];

export const FAQ = [
  {
    q: "Quais tecnologias você utiliza no desenvolvimento?",
    a: "Meu foco principal é o ecossistema Back-end com Java, Spring Boot, APIs e bancos de dados relacionais (SQL e  SQLite), além de utilizar Git, GitHub, Maven e Também tenho conhecimento em JavaScript e React.",
  },
  {
    q: "Você possui experiência com Java e Spring Boot?",
    a: "Sim. Desenvolvo projetos práticos aplicando Programação Orientada a Objetos (POO), coleções, tratamento de exceções e persistência de dados em Java, e venho aprofundando meus estudos envolvendo  APIs utilizando Spring Boot e banco de dados .",
  },
  {
    q: "Quais projetos você já desenvolveu?",
    a: "Desenvolvi o FinTrack (sistema de controle financeiro desktop em Java, JavaFX e SQLite com exportação CSV), um Sistema de Gerenciamento de Biblioteca com hierarquia orientada a objetos.",
  },
  {
    q: "Você possui conhecimento em bancos de dados?",
    a: "Sim, estou aprofundando meus conhecimentos na área e aplicando na prática modelagem relacional, consultas SQL, criação de tabelas e persistência de dados em projetos com SQLite, além de estar estudando outros bancos relacionais.",
  },
];
