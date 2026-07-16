import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    // published: card con links; wip: se menciona sin link en "en desarrollo"
    status: z.enum(['published', 'wip']).default('published'),
    tags: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    start: z.string(),
    end: z.string().optional(), // ausente = actual
    order: z.number().default(99),
  }),
});

export const collections = { projects, experience };
