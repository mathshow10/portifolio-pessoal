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
| Nome, título, apresentação, fatos, foto, e-mail e links | `src/data/perfil.ts` → `perfil` |
| Experiência | `src/data/perfil.ts` → `experiencias` |
| Habilidades | `src/data/perfil.ts` → `habilidades` |
| Formação, destaques e idiomas | `src/data/perfil.ts` → `formacao`, `destaques`, `idiomas` |
| Projetos | `src/content/projetos/*.md` |
| Cores e fontes | `src/styles/global.css` (variáveis no topo) |

O currículo em Markdown (`/cv.md`), o currículo em PDF e o bloco "Para recrutadores" são gerados a partir desses mesmos dados.

## Currículo em PDF

A página `/cv` é o currículo em formato A4. Na publicação, `npm run pdf` transforma essa página em
`curriculo-matheus-lencione.pdf`, que é o arquivo aberto pelo botão "Currículo em PDF".
No `npm run dev` o botão abre a própria página `/cv`, que tem um botão "Salvar como PDF".

Para gerar o PDF no seu computador:

```bash
npx playwright install chromium   # só na primeira vez
npm run build
npm run pdf                        # cria dist/curriculo-matheus-lencione.pdf
```

## Adicionando um projeto novo

Crie um arquivo em `src/content/projetos/`, por exemplo `meu-projeto.md`:

```md
---
titulo: Meu Projeto
categoria: principal              # principal = cartão grande | outro = "Outros projetos"
ordem: 3                          # menor aparece primeiro
contexto: FEPI · Nome da matéria  # texto pequeno no canto do cartão
frase: Uma ou duas frases sobre o que ele resolve.
destaques:                        # só aparecem nos cartões principais
  - O que você fez, com resultado.
  - Outra coisa importante.
stack: [Python, FastAPI]
repositorio: https://gitlab.com/mathshow10/meu-projeto   # GitHub ou GitLab
---
```

Para ligar o projeto a uma experiência, coloque o nome do arquivo (sem `.md`) em `projetos` dentro de `experiencias`.

## Publicação

Cada push na branch `main` publica o site no GitHub Pages pelo workflow em `.github/workflows/deploy.yml`.

Na primeira vez, ative em **Settings → Pages → Build and deployment → Source: GitHub Actions**.
O endereço será https://mathshow10.github.io/portifolio-pessoal/

Para usar um domínio próprio, ajuste `site` e remova `base` em `astro.config.mjs`.
