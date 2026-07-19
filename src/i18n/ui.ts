export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const ui = {
  es: {
    'site.title': 'Maximiliano Stranich',
    'site.description': 'Portfolio y casi-CV de Maximiliano Stranich.',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'about.body':
      'Ingeniero en Sistemas con más de 15 años construyendo software: frontend, backend, arquitectura e integración entre equipos. En los últimos años lideré equipos técnicos y diseñé soluciones basadas en IA: arquitecturas MCP, agentes LLM y desarrollo guiado por especificaciones (Spec-Driven Development). Perfil de experto técnico con vocación por formar desarrolladores, versatilidad de stack (Angular, React, Node, .NET, Java) y foco constante en el impacto de negocio y la usabilidad.',
    'hero.headline': 'Senior Software Engineer · Technical Lead · Especialista en IA & Arquitectura',
    'hero.degree': 'Ingeniero en Sistemas de Información (UCALP)',
    'hero.location': 'La Plata, Buenos Aires, Argentina',
    'hero.photoAlt': 'Fotografía de Maximiliano Stranich',
    'experience.education': 'Educación',
    'experience.languages': 'Idiomas',
    'skills.showAll': 'Ver todas las habilidades',
    'skills.showLess': 'Mostrar menos',
    'experience.present': 'actualidad',
    'projects.repo': 'Código',
    'projects.demo': 'Demo',
    'contact.body': 'Contactame por LinkedIn.',
    'contact.soon': 'Próximamente…',
    'lang.switch': 'English',
  },
  en: {
    'site.title': 'Maximiliano Stranich',
    'site.description': 'Portfolio and quasi-CV of Maximiliano Stranich.',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'about.body':
      'Systems Engineer with 15+ years building software across frontend, backend, architecture, and cross-team integration. In recent years I have led technical teams and designed AI-based solutions: MCP architectures, LLM agents, and Spec-Driven Development. Technical-expert profile with a passion for mentoring developers, a versatile stack (Angular, React, Node, .NET, Java), and a constant focus on business impact and usability.',
    'hero.headline': 'Senior Software Engineer · Technical Lead · AI & Architecture Specialist',
    'hero.degree': 'Information Systems Engineer (UCALP)',
    'hero.location': 'La Plata, Buenos Aires, Argentina',
    'hero.photoAlt': 'Photo of Maximiliano Stranich',
    'experience.education': 'Education',
    'experience.languages': 'Languages',
    'skills.showAll': 'Show all skills',
    'skills.showLess': 'Show less',
    'experience.present': 'present',
    'projects.repo': 'Code',
    'projects.demo': 'Demo',
    'contact.body': 'Reach me on LinkedIn.',
    'contact.soon': 'Coming soon…',
    'lang.switch': 'Español',
  },
} as const;

export function t(locale: Locale, key: keyof (typeof ui)['es']): string {
  return ui[locale][key];
}
