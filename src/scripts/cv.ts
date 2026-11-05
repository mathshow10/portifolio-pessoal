import { getCollection } from 'astro:content';
import { perfil, experiencias, habilidades, formacao, destaques, idiomas } from '../data/perfil';

/** Monta o currículo em Markdown a partir dos mesmos dados do site. */
export async function gerarCV(site?: URL): Promise<string> {
  const projetos = (await getCollection('projetos')).sort(
    (a, b) => (a.data.categoria === b.data.categoria ? a.data.ordem - b.data.ordem : a.data.categoria === 'principal' ? -1 : 1),
  );
  const l: string[] = [];
  l.push(`# ${perfil.nome}`, '', `${perfil.cargo}`, '');
  l.push(perfil.apresentacao, '');
  for (const f of perfil.fatos) l.push(`- **${f.rotulo}:** ${f.valor}`);
  if (perfil.email) l.push(`- **E-mail:** ${perfil.email}`);
  for (const x of perfil.links) l.push(`- **${x.nome}:** ${x.url}`);
  if (site) l.push(`- **Site:** ${site.href}`);
  l.push('', '## Experiência', '');
  for (const e of experiencias) {
    l.push(`### ${e.cargo} · ${e.lugar}`, `${e.periodo}${e.detalhe ? ` · ${e.detalhe}` : ''}`, '', e.descricao, '');
  }
  l.push('## Projetos', '');
  for (const p of projetos) {
    const d = p.data;
    l.push(`### ${d.titulo}${d.contexto ? ` (${d.contexto})` : ''}`, '', d.frase, '');
    for (const t of d.destaques) l.push(`- ${t}`);
    if (d.destaques.length) l.push('');
    if (d.stack.length) l.push(`Tecnologias: ${d.stack.join(', ')}`);
    if (d.repositorio) l.push(`Código: ${d.repositorio}`);
    l.push('');
  }
  l.push('## Habilidades', '');
  for (const h of habilidades) l.push(`- **${h.area}:** ${h.itens.join(', ')}`);
  l.push('', '## Formação', '');
  for (const f of formacao) l.push(`- ${f.curso}, ${f.lugar} (${f.periodo})`);
  l.push('', '## Destaques', '');
  for (const d of destaques) l.push(`- ${d.ano}: ${d.texto}`);
  l.push('', '## Idiomas', '');
  for (const i of idiomas) l.push(`- ${i.nome}: ${i.nivel}`);
  return l.join('\n') + '\n';
}
