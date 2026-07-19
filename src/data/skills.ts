import type { Locale } from '../i18n/ui';

interface SkillGroup {
  title: string;
  featured: string[]; // siempre visibles
  more: string[]; // reveladas con "ver todas"
}

interface LanguageEntry {
  name: string;
  level: string;
}

const groups = {
  ai: {
    featured: ['MCP', 'LLM Agents', 'Spec-Driven Development', 'Microservices', 'Multi-tenancy'],
    more: ['AI Assistant Extensibility', 'Micro-frontends', 'OAuth 2.0 / JWT'],
  },
  frontend: {
    featured: ['TypeScript', 'Angular', 'React', 'Office/Excel Add-ins'],
    more: ['JavaScript', 'NgRx / Zustand', 'jQuery'],
  },
  backend: {
    featured: ['Node.js', 'NestJS', '.NET / C#', 'Java', 'Spring Boot'],
    more: ['VB.NET', 'Kotlin', 'PHP / Laravel'],
  },
  data: {
    featured: ['AWS', 'Docker', 'PostgreSQL'],
    more: ['Git', 'Linux / Bash', 'MS SQL Server', 'MySQL / MariaDB'],
  },
};

export const skills: Record<Locale, SkillGroup[]> = {
  es: [
    { title: 'IA & Arquitectura', ...groups.ai },
    { title: 'Frontend', ...groups.frontend },
    { title: 'Backend', ...groups.backend },
    { title: 'Datos & Herramientas', ...groups.data },
  ],
  en: [
    { title: 'AI & Architecture', ...groups.ai },
    { title: 'Frontend', ...groups.frontend },
    { title: 'Backend', ...groups.backend },
    { title: 'Data & Tools', ...groups.data },
  ],
};

export const languages: Record<Locale, LanguageEntry[]> = {
  es: [
    { name: 'Español', level: 'nativo' },
    {
      name: 'Inglés',
      level:
        'A2 (MCER); lectura y escucha técnica fluidas, experiencia de trabajo diario con equipos de EE. UU.',
    },
  ],
  en: [
    { name: 'Spanish', level: 'native' },
    {
      name: 'English',
      level:
        'A2 (CEFR); fluent technical reading and listening, daily working experience with US-based teams.',
    },
  ],
};
