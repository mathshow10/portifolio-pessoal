/**
 * Tudo o que é "sobre você" fica aqui.
 * Projetos ficam em src/content/projetos/ (um arquivo .md por projeto).
 */

export const perfil = {
  nome: 'Matheus Lencione',
  cargo: 'Desenvolvedor Full Stack · IA & Automação',
  empresaAtual: 'DFATO GAMES',

  /**
   * Foto: coloque o arquivo em public/ (ex.: public/foto.jpg) e escreva 'foto.jpg' aqui.
   * Vazio = mostra as iniciais.
   */
  foto: 'foto.jpg',

  // Título principal. A segunda parte aparece em itálico, na cor de destaque.
  titulo: 'Desenvolvedor em formação,',
  tituloDestaque: 'focado em automação.',

  apresentacao:
    'Faço suporte técnico de um jogo online na DFATO GAMES e curso Análise e Desenvolvimento de Sistemas na FEPI. Do dia a dia nos tickets saiu o Painel de Suporte, uma ferramenta em Python que uso para responder mais rápido. Antes, na UNIFEI, participei do projeto de drones autônomos da Black Bee Drones para a competição IMAV.',

  fatos: [
    { rotulo: 'Agora', valor: 'Suporte técnico na DFATO GAMES' },
    { rotulo: 'Formação', valor: 'TADS na FEPI · 2025 – 2027' },
    { rotulo: 'Stack principal', valor: 'Python · JavaScript · Java · SQL' },
    { rotulo: 'Base', valor: 'Itajubá, MG' },
  ],

  /** Deixe vazio para esconder. */
  email: 'matheuslencione@gmail.com',
  links: [
    { nome: 'GitHub', url: 'https://github.com/mathshow10' },
    { nome: 'GitLab', url: 'https://gitlab.com/mathshow10' },
    // { nome: 'LinkedIn', url: 'https://www.linkedin.com/in/...' },
  ],
};

export type Experiencia = {
  periodo: string;
  detalhe?: string;
  cargo: string;
  lugar: string;
  descricao: string;
  /** ids de projetos (nome do arquivo .md, sem extensão) */
  projetos?: string[];
};

export const experiencias: Experiencia[] = [
  {
    periodo: 'Atual',
    detalhe: 'Prestação de serviços (PJ)',
    cargo: 'Suporte técnico',
    lugar: 'DFATO GAMES',
    descricao:
      'Suporte a um jogo online: manutenção, testes de software e atendimento técnico aos jogadores. Uso o que vejo nos tickets para criar ferramentas que deixam o atendimento mais rápido.',
    projetos: ['painel-suporte'],
  },
  {
    periodo: '2025 – atual',
    detalhe: 'Graduação',
    cargo: 'Projetos acadêmicos',
    lugar: 'FEPI',
    descricao:
      'Nas disciplinas do curso de Análise e Desenvolvimento de Sistemas construo APIs REST em Java, apps mobile em equipe e páginas responsivas, sempre versionando no Git.',
    projetos: ['api-payments', 'consulta-cep', 'laboratorio-front-end'],
  },
  {
    periodo: '2019 – 2020',
    detalhe: 'Projeto de extensão',
    cargo: 'Projeto de drones autônomos',
    lugar: 'Black Bee Drones · UNIFEI',
    descricao:
      'Equipe de drones autônomos da UNIFEI. Participei do projeto de drones autônomos para a IMAV (International Micro Air Vehicle Competition), apresentei o projeto na DroneShow, em São Paulo, e dei palestras no SESI, em Florianópolis.',
  },
];

export const habilidades = [
  { area: 'Linguagens', itens: ['Python', 'JavaScript', 'Java', 'SQL', 'HTML', 'CSS', 'Dart'] },
  { area: 'Back-end & dados', itens: ['Spring Boot', 'REST', 'JPA', 'MySQL', 'Flyway', 'Lombok'] },
  { area: 'Front-end & mobile', itens: ['Layout responsivo', 'Flexbox & Grid', 'Astro', 'Flutter'] },
  { area: 'IA & automação', itens: ['Integração com a API do Gemini', 'Automação de tarefas em Python', 'Excel avançado'] },
  { area: 'Ferramentas', itens: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Figma'] },
];

export const formacao = [
  {
    curso: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    lugar: 'FEPI',
    periodo: '2025 – 2027',
  },
  {
    curso: 'Engenharia de Controle e Automação',
    lugar: 'UNIFEI',
    periodo: 'Experiência acadêmica anterior',
  },
];

export const destaques = [
  { ano: '2019–20', texto: 'Exposição na DroneShow, em São Paulo, com a Black Bee Drones' },
  { ano: '2019–20', texto: 'Palestras no SESI, em Florianópolis, pela Black Bee Drones' },
];

export const idiomas = [
  { nome: 'Português', nivel: 'Nativo' },
  { nome: 'Inglês', nivel: 'Avançado (C1)' },
  { nome: 'Espanhol', nivel: 'Básico' },
];
