import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    titulo: z.string(),
    // 'principal' = cartão grande em "Projetos"; 'outro' = cartão pequeno em "Outros projetos"
    categoria: z.enum(['principal', 'outro']).default('outro'),
    // Ordem de exibição (menor primeiro)
    ordem: z.number().default(99),
    // Texto curto do canto do cartão. Ex.: 'FEPI · Labs de Ferramentas Web'
    contexto: z.string().optional(),
    // Uma ou duas frases sobre o resultado (aparece em destaque)
    frase: z.string(),
    // O que foi feito, em tópicos (só nos cartões principais)
    destaques: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    repositorio: z.string().url().optional(),
    demo: z.string().url().optional(),
  }),
});

export const collections = { projetos };
