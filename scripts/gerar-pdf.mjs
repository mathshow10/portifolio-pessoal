/**
 * Gera dist/curriculo-matheus-lencione.pdf a partir da página /cv já construída.
 * Rode depois do `astro build`:  npm run pdf
 * Precisa do Chromium do Playwright (no CI: npx playwright install --with-deps chromium).
 */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const BASE = '/portifolio-pessoal';
const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const SAIDA = join(DIST, 'curriculo-matheus-lencione.pdf');
const tipos = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.jpg': 'image/jpeg', '.png': 'image/png' };

// Servidor estático mínimo para o dist/, respeitando o `base` do site.
const servidor = createServer(async (req, res) => {
  try {
    let caminho = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (!caminho.startsWith(BASE)) throw new Error();
    caminho = normalize(caminho.slice(BASE.length) || '/');
    let arquivo = join(DIST, caminho);
    if ((await stat(arquivo).catch(() => null))?.isDirectory()) arquivo = join(arquivo, 'index.html');
    else if (!extname(arquivo)) arquivo += '.html';
    const corpo = await readFile(arquivo);
    res.writeHead(200, { 'Content-Type': tipos[extname(arquivo)] ?? 'application/octet-stream' });
    res.end(corpo);
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((ok) => servidor.listen(0, '127.0.0.1', ok));
const porta = servidor.address().port;

const local = '/opt/pw-browsers/chromium';
const navegador = await chromium.launch().catch(() => {
  if (existsSync(local)) return chromium.launch({ executablePath: local });
  throw new Error('Chromium não encontrado. Rode: npx playwright install chromium');
});
try {
  const pagina = await navegador.newPage();
  await pagina.goto(`http://127.0.0.1:${porta}${BASE}/cv/`, { waitUntil: 'networkidle' });
  await pagina.evaluate(() => document.fonts.ready);
  await pagina.pdf({ path: SAIDA, preferCSSPageSize: true, printBackground: true, tagged: true });
  console.log(`PDF gerado: ${SAIDA}`);
} finally {
  await navegador.close();
  servidor.close();
}
