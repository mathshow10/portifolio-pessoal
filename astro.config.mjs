// @ts-check
import { defineConfig } from 'astro/config';

// Publicado em GitHub Pages: https://mathshow10.github.io/portifolio-pessoal/
// Se for usar domínio próprio, troque `site` e remova `base`.
export default defineConfig({
  site: 'https://mathshow10.github.io',
  base: '/portifolio-pessoal',
  trailingSlash: 'ignore',
});
