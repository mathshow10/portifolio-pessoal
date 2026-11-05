---
titulo: Painel de Suporte
resumo: Ferramenta para Windows que acelera o atendimento de tickets. Um atalho digitado em qualquer caixa de texto vira a resposta pronta, e uma IA ajuda a achar, melhorar e resumir respostas.
data: 2026-11-05
tags: [Automação, IA, Python]
stack: [Python, Tkinter, Google Gemini API, keyboard, pystray]
repositorio: https://github.com/mathshow10/painel-suporte
destaque: true
status: em-andamento
---

## O problema

Quem trabalha com suporte responde às mesmas dúvidas dezenas de vezes por dia: senha esquecida, pagamento pendente, morte por lag, pedido de reembolso. O trabalho repetitivo é achar a resposta certa, colar no ticket e ajustar.

## A solução

Um painel que roda na bandeja do Windows e ataca três pontos:

1. **Achar a resposta rápido.** Uma biblioteca de respostas com busca e um *expansor global*: em qualquer programa, digitar `;pag` abre uma lista, e Enter cola a resposta formatada.
2. **Escolher a resposta certa sem lembrar o atalho.** Seleciona a mensagem do jogador, aperta `Ctrl+F11`, e o programa sugere as respostas mais adequadas, incluindo casos parecidos já resolvidos.
3. **Escrever menos.** Para o que não tem resposta pronta, a IA melhora o rascunho (`Ctrl+F10`) ou resume o ticket (`Ctrl+F8`).

## Detalhes que importam

- A busca por casos parecidos acontece **localmente, sem gastar IA**. Respostas bem avaliadas pelo jogador pesam mais.
- Antes de enviar um texto à IA, e-mails e números longos são trocados por marcadores e restaurados depois.
- Sem chave de API, tudo continua funcionando, exceto os recursos de IA.
- Contador de usos e relatório de buscas sem resultado, para saber que resposta está faltando.

> O repositório público é uma edição de demonstração, com respostas e tickets fictícios.
