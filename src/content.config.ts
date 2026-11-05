import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    // Usado para ordenar (mais recente primeiro). Formato: AAAA-MM-DD
    data: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    repositorio: z.string().url().optional(),
    demo: z.string().url().optional(),
    destaque: z.boolean().default(false),
    status: z.enum(['concluido', 'em-andamento', 'arquivado']).default('concluido'),
  }),
});

export const collections = { projetos };
