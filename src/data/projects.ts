export type ProjectMeta = {
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  delay: number;
};

export const projectMeta: ProjectMeta[] = [
  {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=450&fit=crop&q=80",
    tags: ["React Native", "Expo", "Firebase", "TypeScript"],
    repoUrl: "https://github.com/victordanbc/skimograia",
    delay: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=450&fit=crop&q=80",
    tags: ["React Native", "Expo", "TypeScript", "xlsx"],
    repoUrl: "https://github.com/victordanbc/cetcomunicacao",
    delay: 0.04,
  },
  {
    image: "/projects/controle-financeiro.png",
    tags: ["React", "TypeScript", "Firebase", "Recharts", "Vercel"],
    demoUrl: "https://controlefinanceiro-two.vercel.app/",
    repoUrl: "https://github.com/vitorpvpcascavel-maker/controlefinanceiro",
    delay: 0.08,
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&q=80",
    tags: ["Cypress", "E2E", "CI/CD", "GitLab"],
    delay: 0.12,
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&q=80",
    tags: ["Cypress", "Postman", "JMeter", "API Testing"],
    delay: 0.16,
  },
  {
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop&q=80",
    tags: ["Testes Mobile", "SQL", "Jenkins", "Jira"],
    delay: 0.2,
  },
];
