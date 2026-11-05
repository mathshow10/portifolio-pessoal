# Portfólio pessoal

Site de portfólio do **Matheus Lencione**: quem sou, trajetória e projetos.
Minimalista, rápido, com tema claro/escuro e algumas interações discretas.

Feito com [Astro](https://astro.build), CSS puro e quase nenhum JavaScript.

## Rodando localmente

Requisitos: Node.js 20 ou mais recente.

```bash
npm install
npm run dev
```

Abra http://localhost:4321/portifolio-pessoal/

## Onde editar cada coisa

| O quê | Onde |
|---|---|
| Nome, frase, resumo, texto "Sobre", idiomas, e-mail e links | `src/data/perfil.ts` |
| Trajetória (trabalho, formação, extensão) | `src/data/perfil.ts` → `experiencias` |
| Habilidades | `src/data/perfil.ts` → `habilidades` |
| Projetos | `src/content/projetos/*.md` |
| Cores e fontes | `src/styles/global.css` (variáveis no topo) |

## Adicionando um projeto novo

Crie um arquivo em `src/content/projetos/`, por exemplo `meu-projeto.md`:

```md
---
titulo: Meu Projeto
resumo: Uma ou duas frases sobre o que ele faz.
data: 2026-12-01
tags: [Web, IA]
stack: [Python, FastAPI]
repositorio: https://github.com/mathshow10/meu-projeto
demo: https://meu-projeto.exemplo.com   # opcional
destaque: false                          # true = aparece primeiro
status: concluido                        # concluido | em-andamento | arquivado
categoria: projeto                       # projeto = cartão grande | estudo = lista "Estudos e faculdade"
disciplina: Nome da matéria · FEPI       # opcional, aparece em estudos
equipe: Equipe de 4 pessoas              # opcional, para trabalhos em grupo
---

## O problema
...

## A solução
...
```

O link pode ser do GitHub ou do GitLab: o site mostra o selo certo sozinho.

O cartão (ou a linha, se for `estudo`) na página inicial, o filtro por tema e a página `/projetos/meu-projeto/` são gerados sozinhos.

## Publicação

Cada push na branch `main` publica o site no GitHub Pages pelo workflow em `.github/workflows/deploy.yml`.

Na primeira vez, ative em **Settings → Pages → Build and deployment → Source: GitHub Actions**.
O endereço será https://mathshow10.github.io/portifolio-pessoal/

Para usar um domínio próprio, ajuste `site` e remova `base` em `astro.config.mjs`.
