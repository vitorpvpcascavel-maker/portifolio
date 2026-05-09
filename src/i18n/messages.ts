const pt = {
  nav: {
    brand: "QA Engineer",
    inicio: "Início",
    experiencias: "Experiências",
    projetos: "Projetos",
    especializacao: "Especialização",
    contato: "Contato",
    downloadCv: "Baixar Currículo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    langPt: "Português",
    langEn: "English",
    langEs: "Español",
  },
  hero: {
    badge: "Disponível para um novo desafio",
    titleBefore: "Arquitetando",
    titleHighlight: "Sistemas de Automação",
    titleAfter: "para Software Resiliente.",
    subtitle:
      "Foco em pipelines CI/CD, automação moderna e soluções robustas que reduzem risco, aceleram entregas e elevam a confiabilidade do produto do início ao deploy.",
    projects: "Meus Projetos",
    viewCv: "Conhecer Currículo",
  },
  about: {
    heading: "Sobre Mim",
    body:
      "Analista de testes pleno com trajetória em produtos financeiros (consórcio Bradesco), plataformas corporativas (marketplace e documentação) e BPM. Unindo automação com Cypress, testes de API e performance ao dia a dia de times ágeis, com forte foco em documentação, regressão estável e suporte à homologação.",
    photoAlt: "Retrato profissional",
    noPhoto1a: "Nenhuma imagem em",
    noPhoto1b: "na raiz deste projeto.",
    noPhoto2a: "Use",
    noPhoto2b: "ou",
    noPhoto2c: "(ou outro .jpg/.png/.webp).",
    noPhoto3a: "Confira se o terminal está na pasta certa (ex.:",
    noPhoto3b: ", não outra cópia como",
    noPhoto3c: ").",
    bullets: [
      {
        title: "E2E, API e performance",
        desc: "Cypress e Postman para fluxos ponta a ponta e contratos; JMeter para validar estabilidade sob carga; integração com GitLab e CI/CD.",
      },
      {
        title: "Agilidade e rastreabilidade",
        desc: "Rituais SCRUM, casos de teste em Jira/Trello, homologação e sustentação com feedback objetivo ao desenvolvimento.",
      },
    ],
  },
  tech: {
    title: "Tech Stack",
    subtitle: "Tecnologias de ponta para automação de alta performance",
  },
  projects: {
    heading: "Projetos em Destaque",
    subtitle:
      "Seleção de trabalhos que mostram automação, confiabilidade e impacto em produção.",
    demo: "Demo",
    repo: "GitHub",
    items: [
      {
        title: "QA Dashboard Inteligente",
        description:
          "Painel com métricas de qualidade, tendências de defeitos e integração com pipelines para decisões em tempo real.",
      },
      {
        title: "API Contract Testing Suite",
        description:
          "Suíte automatizada de contratos OpenAPI com relatórios e gates de merge no CI para APIs críticas.",
      },
      {
        title: "Mobile E2E na nuvem",
        description:
          "Execução distribuída de testes Appium com paralelização e artefatos de vídeo para squads mobile.",
      },
      {
        title: "Quality Gates CI/CD",
        description:
          "Template reutilizável de quality gates: cobertura, smoke, performance baseline e aprovação por estágio.",
      },
    ],
  },
  timeline: {
    heading: "Jornada Profissional",
    subtitle:
      "Experiências que moldaram minha forma de garantir qualidade em produtos reais.",
    entries: [
      {
        role: "Analista de Testes Pleno",
        company: "Codgo.X",
        period: "2024 — Atualmente",
        points: [
          "Automação E2E com Cypress no sistema de consórcio Bradesco, com foco em fluxos críticos e regressão estável.",
          "Versionamento com Git, GitLab e GitHub, branches e integração contínua com o fluxo de CI/CD do time de QA.",
          "Criação e revisão de cenários e casos de teste, fortalecendo cobertura e documentação do processo de QA.",
          "Identificação e reporte de bugs em homologação, apoiando o desenvolvimento na correção ágil de defeitos.",
        ],
      },
      {
        role: "Analista de Testes Júnior",
        company: "upLexis Tecnologia",
        period: "2022 — 2024",
        points: [
          "Projetos Marketplace, upFolder e Novo Dossiê: testes manuais, de API e de usabilidade.",
          "Automação E2E e de API com Cypress e Postman, integrada ao GitLab para versionamento e controle de código.",
          "Testes de performance com JMeter, validando estabilidade da plataforma sob diferentes condições de carga.",
          "Cenários e casos de teste com documentação e bug tracking em Jira e Trello.",
          "Sustentação: validação de correções originadas de clientes antes de produção; participação ativa nos rituais SCRUM.",
        ],
      },
      {
        role: "Analista de Testes Júnior",
        company: "Lecom Tecnologia",
        period: "2020 — 2022",
        points: [
          "Testes manuais no Lecom BPM (web e mobile), documentando bugs, melhorias e tarefas no Jira.",
          "Elaboração de casos de teste para a ferramenta Lecom, cobrindo os principais fluxos do sistema.",
          "Scripts em SQL Server, Oracle e MySQL para validação de dados e apoio aos testes.",
          "Atualização e gestão de ambientes via Jenkins para estabilidade dos ciclos de teste.",
          "Participação nos rituais SCRUM e apoio ao onboarding de novos membros do time de QA.",
        ],
      },
    ],
  },
  certifications: {
    heading: "Certificações & Educação",
    subtitle:
      "Credenciais e formação completa estão no currículo em PDF — complemente esta seção quando quiser destacar uma certificação.",
    items: [
      {
        name: "Trajetória em QA",
        issuer: "2020 — atual • Lecom • upLexis • Codgo.X",
      },
      {
        name: "Stack em destaque",
        issuer: "Cypress • Postman • JMeter • Jenkins • GitLab • Jira",
      },
      {
        name: "Formação & certificações",
        issuer: "Detalhes no currículo (baixar acima)",
      },
    ],
  },
  contact: {
    heading: "Vamos elevar a qualidade do seu produto?",
    body:
      "Estou aberto a conversar sobre automação, estratégia de QA ou oportunidades onde qualidade seja prioridade de negócio.",
    location: "Brasil — remoto / híbrido",
    formName: "Nome",
    formEmail: "E-mail",
    formMessage: "Mensagem",
    formSubmit: "Enviar Mensagem",
    formThanks:
      "Obrigado! Em um projeto real, isso enviaria para um backend ou serviço de formulário.",
  },
  footer: {
    rights: "Todos os direitos reservados.",
    resume: "Currículo",
  },
};

export type Copy = typeof pt;

type MessageTree = Copy;

const en: MessageTree = {
  nav: {
    brand: "QA Engineer",
    inicio: "Home",
    experiencias: "Experience",
    projetos: "Projects",
    especializacao: "Stack",
    contato: "Contact",
    downloadCv: "Download CV",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    langPt: "Português",
    langEn: "English",
    langEs: "Español",
  },
  hero: {
    badge: "Open to a new challenge",
    titleBefore: "Architecting",
    titleHighlight: "Automation Systems",
    titleAfter: "for Resilient Software.",
    subtitle:
      "Focused on CI/CD pipelines, modern automation, and robust solutions that reduce risk, speed up delivery, and improve product reliability from start to deploy.",
    projects: "My Projects",
    viewCv: "View resume",
  },
  about: {
    heading: "About Me",
    body:
      "Mid-level QA analyst with hands-on experience in financial products (Bradesco consortium), corporate platforms (marketplace and document workflows), and BPM. Cypress automation, API and performance testing, embedded in Agile teams—with strong emphasis on docs, stable regression, and pre-production quality.",
    photoAlt: "Professional headshot",
    noPhoto1a: "No image in",
    noPhoto1b: "at the project root.",
    noPhoto2a: "Use",
    noPhoto2b: "or",
    noPhoto2c: "(or another .jpg/.png/.webp).",
    noPhoto3a: "Make sure the terminal is in the right folder (e.g.",
    noPhoto3b: ", not another copy like",
    noPhoto3c: ").",
    bullets: [
      {
        title: "E2E, API & performance",
        desc: "Cypress and Postman for end-to-end flows and contracts; JMeter for load validation; GitLab and CI/CD integration.",
      },
      {
        title: "Agile & traceability",
        desc: "SCRUM cadence, structured test cases in Jira/Trello, staging support, and production-bound defect validation.",
      },
    ],
  },
  tech: {
    title: "Tech Stack",
    subtitle: "High-performance automation tooling",
  },
  projects: {
    heading: "Featured Projects",
    subtitle:
      "A selection of work that highlights automation, reliability, and production impact.",
    demo: "Demo",
    repo: "GitHub",
    items: [
      {
        title: "Smart QA Dashboard",
        description:
          "Dashboard with quality metrics, defect trends, and pipeline integration for real-time decisions.",
      },
      {
        title: "API contract testing suite",
        description:
          "Automated OpenAPI contract suite with reports and CI merge gates for critical APIs.",
      },
      {
        title: "Cloud mobile E2E",
        description:
          "Distributed Appium runs with parallelization and video artifacts for mobile squads.",
      },
      {
        title: "CI/CD quality gates",
        description:
          "Reusable quality-gate template: coverage, smoke, performance baseline, and stage approvals.",
      },
    ],
  },
  timeline: {
    heading: "Career path",
    subtitle: "Experience that shaped how I deliver quality on real-world products.",
    entries: [
      {
        role: "Mid-Level Test Analyst",
        company: "Codgo.X",
        period: "2024 — Present",
        points: [
          "E2E test development and maintenance with Cypress for Bradesco consortium software, guarding critical workflows and regression stability.",
          "Git / GitLab / GitHub versioning, branching, and integration with QA CI/CD pipelines.",
          "Authoring and peer review of scenarios and test cases to improve coverage and documentation.",
          "Defect lifecycle in staging, supporting Engineering with actionable reports before release.",
        ],
      },
      {
        role: "Junior Test Analyst",
        company: "upLexis Tecnologia",
        period: "2022 — 2024",
        points: [
          "Marketplace, upFolder and Novo Dossiê: manual, API, and usability testing.",
          "Cypress plus Postman for E2E and API flows, wired to GitLab for source control.",
          "Performance testing with JMeter under multiple load scenarios.",
          "Structured cases tracked in Jira and Trello; documentation and stakeholder visibility.",
          "Sustained production-readiness checks for customer-reported fixes; active SCRUM participation.",
        ],
      },
      {
        role: "Junior Test Analyst",
        company: "Lecom Tecnologia",
        period: "2020 — 2022",
        points: [
          "Manual testing on Lecom BPM (web and mobile), logging issues and improvements in Jira.",
          "Targeted test design for Lecom flows across core product journeys.",
          "SQL Server, Oracle, and MySQL scripts for data validation and test support.",
          "Environment hygiene through Jenkins to keep test cycles predictable.",
          "SCRUM ceremonies and mentoring new QA teammates during onboarding.",
        ],
      },
    ],
  },
  certifications: {
    heading: "Certifications & education",
    subtitle:
      "Full credentials are in the PDF résumé—add specific certifications here whenever you want them highlighted.",
    items: [
      {
        name: "QA trajectory",
        issuer: "2020 — present • Lecom • upLexis • Codgo.X",
      },
      {
        name: "Highlighted stack",
        issuer: "Cypress • Postman • JMeter • Jenkins • GitLab • Jira",
      },
      {
        name: "Degrees & certs",
        issuer: "See résumé (download above)",
      },
    ],
  },
  contact: {
    heading: "Ready to raise the quality bar?",
    body:
      "Happy to talk about automation, QA strategy, or roles where quality is a business priority.",
    location: "Brazil — remote / hybrid",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send message",
    formThanks:
      "Thanks! In a real project this would post to a backend or form service.",
  },
  footer: {
    rights: "All rights reserved.",
    resume: "Resume",
  },
};

const es: MessageTree = {
  nav: {
    brand: "QA Engineer",
    inicio: "Inicio",
    experiencias: "Experiencia",
    projetos: "Proyectos",
    especializacao: "Stack",
    contato: "Contacto",
    downloadCv: "Descargar CV",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    langPt: "Português",
    langEn: "English",
    langEs: "Español",
  },
  hero: {
    badge: "Disponible para un nuevo reto",
    titleBefore: "Diseñando",
    titleHighlight: "Sistemas de Automatización",
    titleAfter: "para software resiliente.",
    subtitle:
      "Enfoque en pipelines CI/CD, automatización moderna y soluciones robustas que reducen riesgo, aceleran entregas y mejoran la confiabilidad del producto del inicio al deploy.",
    projects: "Mis proyectos",
    viewCv: "Ver currículum",
  },
  about: {
    heading: "Sobre mí",
    body:
      "Analista de pruebas pleno con experiencia en servicios financieros (consorcio Bradesco), plataformas corporativas (marketplace y flujos documentales) y BPM. Combino Cypress, pruebas de API y de rendimiento dentro de equipos ágiles, con foco en documentación, regresión estable y calidad antes de producción.",
    photoAlt: "Retrato profesional",
    noPhoto1a: "No hay imagen en",
    noPhoto1b: "en la raíz del proyecto.",
    noPhoto2a: "Usa",
    noPhoto2b: "o",
    noPhoto2c: "(u otro .jpg/.png/.webp).",
    noPhoto3a: "Comprueba que la terminal esté en la carpeta correcta (p. ej.",
    noPhoto3b: ", no otra copia como",
    noPhoto3c: ").",
    bullets: [
      {
        title: "E2E, API y rendimiento",
        desc: "Cypress y Postman para flujos punta a punta y contratos; JMeter para validación bajo carga; GitLab e integración CI/CD.",
      },
      {
        title: "Agilidad y trazabilidad",
        desc: "SCRUM, casos de prueba en Jira/Trello, homologación y soporte ágil al desarrollo con feedback claro.",
      },
    ],
  },
  tech: {
    title: "Tech Stack",
    subtitle: "Tecnologías para automatización de alto rendimiento",
  },
  projects: {
    heading: "Proyectos destacados",
    subtitle:
      "Una selección de trabajos que muestran automatización, fiabilidad e impacto en producción.",
    demo: "Demo",
    repo: "GitHub",
    items: [
      {
        title: "Panel QA inteligente",
        description:
          "Panel con métricas de calidad, tendencias de defectos e integración con pipelines para decisiones en tiempo real.",
      },
      {
        title: "Suite de contratos de API",
        description:
          "Suite automatizada de contratos OpenAPI con informes y gates de CI para APIs críticas.",
      },
      {
        title: "E2E móvil en la nube",
        description:
          "Ejecución distribuida de Appium con paralelización y vídeos para squads mobile.",
      },
      {
        title: "Quality gates CI/CD",
        description:
          "Plantilla reutilizable: cobertura, smoke, baseline de rendimiento y aprobación por etapa.",
      },
    ],
  },
  timeline: {
    heading: "Trayectoria",
    subtitle:
      "Experiencias que marcaron cómo aseguro calidad en productos reales.",
    entries: [
      {
        role: "Analista de Pruebas Pleno",
        company: "Codgo.X",
        period: "2024 — Actualidad",
        points: [
          "Automatización E2E con Cypress en el sistema de consorcio Bradesco, priorizando flujos críticos y regresión estable.",
          "Versionado con Git, GitLab y GitHub, ramas y flujo integrado al CI/CD del equipo de QA.",
          "Definición y revisión de escenarios y casos de prueba para más cobertura y documentación.",
          "Detección y reporte de defectos en homologación, apoyando al desarrollo en correcciones ágiles.",
        ],
      },
      {
        role: "Analista de Pruebas Junior",
        company: "upLexis Tecnologia",
        period: "2022 — 2024",
        points: [
          "Proyectos Marketplace, upFolder y Novo Dossiê: pruebas manuales, de API y de usabilidad.",
          "Automatización E2E y de API con Cypress y Postman, integrada a GitLab.",
          "Pruebas de rendimiento con JMeter bajo distintas cargas.",
          "Casos documentados y seguimiento en Jira y Trello.",
          "Sustentación: validación de correcciones de clientes antes de producción; SCRUM activo con el equipo.",
        ],
      },
      {
        role: "Analista de Pruebas Junior",
        company: "Lecom Tecnologia",
        period: "2020 — 2022",
        points: [
          "Pruebas manuales en Lecom BPM (web y móvil) con registro en Jira.",
          "Casos de prueba para los flujos principales de la herramienta Lecom.",
          "Scripts en SQL Server, Oracle y MySQL para validación de datos y soporte a pruebas.",
          "Gestión de entornos con Jenkins para ciclos de prueba estables.",
          "Rituales SCRUM y apoyo al onboarding de nuevos QAs.",
        ],
      },
    ],
  },
  certifications: {
    heading: "Certificaciones y formación",
    subtitle:
      "Las credenciales completas están en el CV en PDF; puedes destacar aquí una certificación cuando lo desees.",
    items: [
      {
        name: "Trayectoria en QA",
        issuer: "2020 — actual • Lecom • upLexis • Codgo.X",
      },
      {
        name: "Stack destacado",
        issuer: "Cypress • Postman • JMeter • Jenkins • GitLab • Jira",
      },
      {
        name: "Formación y certificaciones",
        issuer: "Ver CV (descarga arriba)",
      },
    ],
  },
  contact: {
    heading: "¿Elevamos la calidad de tu producto?",
    body:
      "Abierto a hablar de automatización, estrategia de QA u oportunidades donde la calidad sea prioridad de negocio.",
    location: "Brasil — trabajo remoto / híbrido",
    formName: "Nombre",
    formEmail: "Correo",
    formMessage: "Mensaje",
    formSubmit: "Enviar mensaje",
    formThanks:
      "¡Gracias! En un proyecto real esto iría a un backend o servicio de formularios.",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    resume: "Currículum",
  },
};

export type Locale = "pt" | "en" | "es";

export const defaultLocale: Locale = "pt";

export const messages: Record<Locale, MessageTree> = {
  pt,
  en,
  es,
};
