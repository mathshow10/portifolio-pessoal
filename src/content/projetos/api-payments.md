---
titulo: Payments API
resumo: API REST de cadastro de clientes em Java e Spring Boot, com banco MySQL, migrações versionadas e busca por nome.
data: 2026-09-22
tags: [Back-end]
stack: [Java 21, Spring Boot, JPA, MySQL, Flyway, Lombok]
repositorio: https://gitlab.com/mathshow10/labs_ferramentas_web
categoria: estudo
disciplina: Labs de Ferramentas Web · FEPI
status: em-andamento
---

Projeto construído ao longo das aulas de **Labs de Ferramentas Web** na FEPI para praticar a criação de serviços web com Java. A ideia é um sistema de pagamentos: começa pelo cadastro de clientes e vai ganhar parcelamentos nas próximas etapas.

## O que a API faz

- Lista, consulta, cadastra, atualiza e exclui clientes pelo recurso `/clientes`.
- Busca clientes pelo nome, sem diferenciar maiúsculas e minúsculas (`/clientes?find=joao`).
- Responde com os códigos HTTP certos: `201` ao cadastrar, `204` ao excluir e `404` para cliente inexistente.

## O que pratiquei

- **Spring Boot e Spring Web MVC** para expor os endpoints REST.
- **JPA** para mapear a entidade `Cliente` e um repositório com consulta derivada pelo nome.
- **MySQL** como banco e **Flyway** para versionar o esquema: a tabela foi criada numa migração e a coluna `renda` entrou em outra, sem mexer no banco à mão.
- **Lombok** para reduzir código repetitivo nos modelos.

> Em andamento: o modelo de `Parcelamento` já existe e ainda vai ganhar seus endpoints.
