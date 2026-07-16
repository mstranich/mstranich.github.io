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
    'nav.wip': 'En desarrollo',
    'nav.contact': 'Contacto',
    'about.body': 'Placeholder — texto de presentación.',
    'experience.present': 'actualidad',
    'projects.repo': 'Código',
    'projects.demo': 'Demo',
    'contact.body': 'Placeholder — vías de contacto.',
    'lang.switch': 'English',
  },
  en: {
    'site.title': 'Maximiliano Stranich',
    'site.description': 'Portfolio and quasi-CV of Maximiliano Stranich.',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.wip': 'In progress',
    'nav.contact': 'Contact',
    'about.body': 'Placeholder — intro text.',
    'experience.present': 'present',
    'projects.repo': 'Code',
    'projects.demo': 'Demo',
    'contact.body': 'Placeholder — contact channels.',
    'lang.switch': 'Español',
  },
} as const;

export function t(locale: Locale, key: keyof (typeof ui)['es']): string {
  return ui[locale][key];
}
