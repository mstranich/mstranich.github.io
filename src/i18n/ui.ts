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
      'Soy ingeniero en sistemas y llevo más de 15 años construyendo software. Me especializo en transformar necesidades de negocio en productos concretos, con especial atención a la experiencia de usuario y a la calidad técnica.',
    'about.body2':
      'Mi recorrido abarca frontend, backend y arquitectura, y en los últimos años incorporé inteligencia artificial aplicada, especialmente agentes, skills y arquitecturas MCP. Trabajo cerca de producto y diseño, participando en las decisiones técnicas, en la construcción de las soluciones y en el desarrollo del equipo: acompaño a otros desarrolladores, explico decisiones complejas y ayudo a mejorar la forma de trabajar, sin dejar de involucrarme directamente en el código.',
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
      "I'm a systems engineer and I've been building software for over 15 years. I specialize in turning business needs into concrete products, with particular attention to user experience and technical quality.",
    'about.body2':
      "My background spans frontend, backend, and architecture, and in recent years I've incorporated applied AI, especially agents, skills, and MCP architectures. I work closely with product and design, taking part in technical decisions, in building the solutions, and in the team's growth: I mentor other developers, explain complex decisions, and help improve the way we work, while staying hands-on with the code.",
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
