import type { APIRoute } from 'astro';
import { gerarCV } from '../scripts/cv';

export const GET: APIRoute = async ({ site }) => {
  const base = new URL(import.meta.env.BASE_URL, site);
  return new Response(await gerarCV(base), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
