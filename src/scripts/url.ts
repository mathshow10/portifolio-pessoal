/** Monta um caminho interno respeitando o `base` do astro.config (GitHub Pages). */
export function url(caminho = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const limpo = caminho.startsWith('/') ? caminho : `/${caminho}`;
  return `${base}${limpo}`;
}
