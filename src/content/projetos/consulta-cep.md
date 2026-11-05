---
titulo: Consulta de CEP
resumo: App mobile em Flutter que mostra o endereço completo a partir de um CEP, usando a API pública ViaCEP, com histórico das últimas buscas.
data: 2026-09-16
tags: [Mobile]
stack: [Flutter, Dart, ViaCEP API, shared_preferences]
repositorio: https://gitlab.com/mathshow10/consulta-cep-app
categoria: estudo
disciplina: Atividade de extensão · FEPI
equipe: Equipe de 6 pessoas
---

Trabalho em grupo desenvolvido como atividade de extensão, com foco em consumo de APIs REST, tratamento de erros e boas práticas de desenvolvimento mobile.

## O problema

Achar o endereço a partir de um CEP é algo do dia a dia: cadastros, compras online, entregas. Os sites que fazem isso costumam vir cheios de anúncios. A proposta foi um app direto, no celular.

## O que o app faz

- Consulta o endereço a partir do CEP digitado.
- Mostra rua, bairro, cidade e estado.
- Trata erros: CEP inválido, CEP inexistente e falha de conexão.
- Guarda o histórico das últimas buscas no próprio aparelho.

## Tecnologias

Flutter e Dart, o pacote `http` para consumir a **ViaCEP** e `shared_preferences` para o histórico local.
