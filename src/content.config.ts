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
    // 'projeto' = cartão grande; 'estudo' = lista compacta "Estudos e faculdade"
    categoria: z.enum(['projeto', 'estudo']).default('projeto'),
    // Ex.: 'Labs de Ferramentas Web · FEPI'
    disciplina: z.string().optional(),
    // Trabalho em grupo? Ex.: 'Equipe de 6 pessoas'
    equipe: z.string().optional(),
    status: z.enum(['concluido', 'em-andamento', 'arquivado']).default('concluido'),
  }),
});

export const collections = { projetos };
