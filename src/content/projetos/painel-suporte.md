---
titulo: Painel de Suporte
categoria: principal
ordem: 1
contexto: Projeto pessoal · Suporte de jogos
frase: Ferramenta que criei para o meu trabalho de suporte em jogos, para responder tickets mais rápido e com menos erro. Ela guarda as respostas prontas da equipe, acha a certa para cada mensagem do jogador e usa IA só quando precisa, para melhorar texto, resumir ticket e montar o reporte de bug. Roda no Windows e funciona em qualquer programa, inclusive no navegador.
destaques:
  - "Expansor de atalhos: digitar ;pag em qualquer caixa de texto abre a lista de respostas, e Enter cola o texto formatado."
  - Com Ctrl+F11, lê a mensagem do jogador e sugere a resposta certa, buscando antes em tickets já resolvidos, sem gastar IA.
  - Com a API do Google Gemini, melhora rascunhos (Ctrl+F10) e resume tickets (Ctrl+F8). E-mails e números longos são trocados por marcadores antes do envio.
  - Extensão do Chrome que leva tudo isso para o menu do botão direito e cola direto no ticket, sem teclas simuladas (o anti-cheat do jogo bloqueava a colagem automática).
  - Com Ctrl+F7, monta o reporte de bug para o Discord da equipe, com número do ticket, jogador e mensagem.
  - Ctrl+F9 guarda uma resposta nova no acervo na hora, e o relatório de buscas sem resultado mostra qual resposta ainda falta.
stack: [Python, Tkinter, Google Gemini, JavaScript, Extensão do Chrome, keyboard, pystray]
repositorio: https://github.com/mathshow10/painel-suporte
imagens:
  - src: projetos/painel-suporte/expansor.png
    legenda: Digitar ;pa em qualquer caixa de texto abre as respostas que começam assim.
    largura: 550
    altura: 245
  - src: projetos/painel-suporte/extensao.png
    legenda: Extensão do Chrome, com as funções do painel no menu do botão direito.
    largura: 287
    altura: 257
  - src: projetos/painel-suporte/resumo.png
    legenda: Ctrl+F8 resume o ticket com a IA e copia o resumo.
    largura: 534
    altura: 411
---
