# Portfolio — mstranich.github.io

## Contexto
Hub de portfolio personal + casi-CV. La arquitectura general:
el hub apunta (cards con links), los repos de proyectos demuestran
(README como documentación real). Proyectos privados se mencionan
sin link en sección "en desarrollo".

## Stack (decidido, no reabrir)
- Astro (v7.x actual), componentes .astro
- SCSS (`<style lang="scss">`, instalar `sass`)
- Animaciones: CSS puro (scroll-snap para slideshows,
  scroll-driven animations / IntersectionObserver para reveals)
- JS de comportamiento: `<script>` vanilla en componentes;
  Alpine.js solo si el boilerplate lo justifica (no arrancar con él)
- i18n nativa de Astro: español (default) e inglés, contenido
  por locale en carpetas paralelas
- Contenido de proyectos/experiencia: content collections,
  las listas se enumeran desde datos, no hardcodeadas

## Build y deploy (decidido)
- Build local, NO GitHub Actions
- `outDir: './docs'` en astro.config.mjs
- Pages: Deploy from branch → main → /docs
- Archivo vacío `public/.nojekyll` (obligatorio: Astro emite
  `_astro/` y Jekyll la ignoraría)
- Commit de source + docs/ juntos, siempre
- .gitignore: node_modules/, .astro/ — NUNCA ignorar docs/

## Decisiones de esta sesión (2026-07-16)
- Rutas bilingües: /es/ y /en/ con `prefixDefaultLocale: true`;
  la raíz redirige a /es/
- Layout: one-page con anclas por locale (no páginas separadas)
- Secciones: sobre mí / experiencia / proyectos / en desarrollo / contacto
- TypeScript strict; gestor de paquetes: pnpm
- Content collections con placeholders; el inventario real de
  proyectos se carga después
- El repo debe llamarse `mstranich.github.io` (user site de Pages);
  el README de perfil se muda a un repo mstranich/mstranich aparte

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
