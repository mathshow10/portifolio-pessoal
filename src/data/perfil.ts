/**
 * Tudo o que é "sobre você" fica aqui.
 * Edite este arquivo para atualizar textos, experiências, habilidades e links.
 * Projetos ficam em src/content/projetos/ (um arquivo .md por projeto).
 */

export const perfil = {
  nome: 'Matheus Lencione',
  cargo: 'Desenvolvedor Full Stack',
  foco: 'IA & Automação',
  frase: 'Construindo soluções eficientes.',
  local: 'Itajubá, Sul de Minas Gerais',
  status: 'Colaborador na DFATO GAMES',
  resumo:
    'Estudante de Análise e Desenvolvimento de Sistemas na FEPI. Trabalho com suporte, manutenção e testes de software na DFATO GAMES e uso o que vejo no dia a dia para criar ferramentas que tiram o trabalho repetitivo do caminho.',

  sobre: [
    'Comecei pela engenharia: passei pela Engenharia de Controle e Automação na UNIFEI, onde participei da equipe Black Bee Drones programando e automatizando drones. Foi ali que peguei gosto por fazer máquinas trabalharem por mim.',
    'Hoje curso Tecnólogo em Análise e Desenvolvimento de Sistemas na FEPI e presto serviços de suporte técnico na DFATO GAMES, com manutenção, testes de software e atendimento. O contato direto com problemas reais é o que me move a construir soluções: o Painel de Suporte, por exemplo, nasceu da rotina de responder os mesmos tickets várias vezes por dia.',
    'Meu foco é desenvolvimento full stack, automação e uso prático de IA: entender o problema, escrever o mínimo de código que resolve bem, e deixar a ferramenta simples de usar.',
  ],

  idiomas: [
    { nome: 'Português', nivel: 'Nativo' },
    { nome: 'Inglês', nivel: 'Avançado (C1)' },
    { nome: 'Espanhol', nivel: 'Básico' },
  ],

  /**
   * Contato. Deixe `email` vazio para esconder o botão de e-mail.
   * Adicione o LinkedIn quando quiser (ex.: 'https://www.linkedin.com/in/seu-usuario').
   */
  email: '',
  links: [
    { nome: 'GitHub', url: 'https://github.com/mathshow10', usuario: '@mathshow10' },
    // { nome: 'LinkedIn', url: 'https://www.linkedin.com/in/...', usuario: 'Matheus Lencione' },
  ],
};

export type Experiencia = {
  periodo: string;
  titulo: string;
  lugar: string;
  tipo: 'trabalho' | 'formacao' | 'extensao';
  descricao: string;
  destaques?: string[];
};

export const experiencias: Experiencia[] = [
  {
    periodo: 'Atual',
    titulo: 'Suporte técnico (PJ)',
    lugar: 'DFATO GAMES',
    tipo: 'trabalho',
    descricao:
      'Prestação de serviços de suporte: manutenção, testes de software e atendimento técnico a jogadores.',
    destaques: [
      'Criei o Painel de Suporte para agilizar respostas a tickets com atalhos e IA',
    ],
  },
  {
    periodo: '2025 – 2027',
    titulo: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    lugar: 'FEPI',
    tipo: 'formacao',
    descricao:
      'Formação em desenvolvimento de software: front-end, back-end, banco de dados e engenharia de software.',
  },
  {
    periodo: '2019 – 2020',
    titulo: 'Black Bee Drones',
    lugar: 'UNIFEI',
    tipo: 'extensao',
    descricao:
      'Projeto de extensão com foco em programação e automação de drones.',
    destaques: [
      'Exposição na DroneShow, em São Paulo',
      'Palestras no SESI, em Florianópolis',
    ],
  },
  {
    periodo: 'Anterior',
    titulo: 'Engenharia de Controle e Automação',
    lugar: 'UNIFEI',
    tipo: 'formacao',
    descricao: 'Experiência acadêmica em controle, automação e programação.',
  },
];

export const habilidades = [
  {
    grupo: 'Desenvolvimento',
    itens: ['Python', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Git', 'GitHub'],
  },
  {
    grupo: 'IA & Automação',
    itens: ['APIs de IA (Gemini)', 'ChatGPT', 'Claude', 'Automação de tarefas', 'Excel avançado'],
  },
  {
    grupo: 'Design & Ferramentas',
    itens: ['Figma', 'Photoshop', 'Canva', 'VS Code', 'Pacote Office'],
  },
];
