import { cetComunicacaoCover } from "./cetComunicacaoGallery";
import { mvEmporioCover } from "./mvEmporioGallery";
import { skimoGraiaCover } from "./skimoGraiaGallery";

export type ProjectMeta = {
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  screensPath?: string;
  delay: number;
};

/** Capa genérica para experiências de QA em produtos corporativos (não são apps próprios). */
export const qaCorporateCover = "/projects/qa-corporate-cover.png";

export const skimoChatbotCover = "/projects/skimo-chatbot-cover.png";

export const projectMeta: ProjectMeta[] = [
  {
    image: skimoGraiaCover,
    tags: ["React Native", "Expo", "Firebase", "TypeScript"],
    repoUrl: "https://github.com/victordanbc/skimograia",
    screensPath: "#galeria-skimo-graia",
    delay: 0,
  },
  {
    image: skimoChatbotCover,
    tags: ["Node.js", "Baileys", "Firebase", "React"],
    screensPath: "#galeria-skimo-chatbot",
    delay: 0.02,
  },
  {
    image: mvEmporioCover,
    tags: ["React", "TypeScript", "PWA", "Firebase", "Supabase"],
    repoUrl: "https://github.com/vitorpvpcascavel-maker/mvemporio",
    screensPath: "#galeria-mv-emporio",
    delay: 0.04,
  },
  {
    image: "/projects/portfolio-cover.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "Firebase"],
    demoUrl: "https://victorqa.web.app/",
    repoUrl: "https://github.com/vitorpvpcascavel-maker/portifolio",
    delay: 0.06,
  },
  {
    image: cetComunicacaoCover,
    tags: ["React Native", "Expo", "TypeScript", "xlsx"],
    repoUrl: "https://github.com/victordanbc/cetcomunicacao",
    screensPath: "#galeria-cet-comunicacao",
    delay: 0.08,
  },
  {
    image: "/projects/controle-financeiro.png",
    tags: ["React", "TypeScript", "Firebase", "Recharts", "Vercel"],
    demoUrl: "https://controlefinanceiro-two.vercel.app/",
    repoUrl: "https://github.com/vitorpvpcascavel-maker/controlefinanceiro",
    delay: 0.12,
  },
  {
    image: qaCorporateCover,
    tags: ["Cypress", "E2E", "CI/CD", "GitLab"],
    delay: 0.16,
  },
  {
    image: qaCorporateCover,
    tags: ["Cypress", "Postman", "JMeter", "API Testing"],
    delay: 0.2,
  },
  {
    image: qaCorporateCover,
    tags: ["Testes Mobile", "SQL", "Jenkins", "Jira"],
    delay: 0.24,
  },
];
