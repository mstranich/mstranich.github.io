import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    release: z.string().url().optional(), // página de descarga del binario
    site: z.string().optional(), // id de la página de producto en este sitio
    // published: card con links; wip: se menciona sin link en "en desarrollo"
    status: z.enum(['published', 'wip']).default('published'),
    tags: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

// Páginas de producto (/<lang>/<id>/): vidriera para no devs.
// Código y documentación técnica viven en el repo de cada producto.
const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(), // meta description
    version: z.string(),
    platform: z.string(),
    features: z.array(z.object({ title: z.string(), body: z.string() })),
    requirements: z.array(z.string()),
    steps: z.array(z.object({ label: z.string(), code: z.string() })),
    stepsNote: z.string().optional(),
    repo: z.string().url(),
    release: z.string().url(),
    docs: z.string().url().optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string().optional(), // ausente = independiente/freelance
    start: z.string(),
    end: z.string().optional(), // ausente = actual
    location: z.string().optional(),
    context: z.string().optional(), // una línea sobre la empresa/proyecto
    order: z.number().default(99),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/education' }),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    start: z.string(),
    end: z.string().optional(),
    detail: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { projects, products, experience, education };
