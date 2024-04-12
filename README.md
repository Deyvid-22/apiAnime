API de Animes com Express.js

Este é um exemplo de uma API simples para gerenciar uma lista de animes usando o framework Express.js.

## Funcionalidades

- **GET /anime**: Retorna uma lista de todos os animes.
- **GET /anime/:id**: Retorna um anime específico com base no ID fornecido.
- **POST /anime**: Adiciona um novo anime à lista.
- **PUT /anime/:id**: Atualiza o nome de um anime existente com base no ID fornecido.
- **DELETE /anime/:id**: Remove um anime da lista com base no ID fornecido.

## Como Usar

1. Instale as dependências:
   - `express`
   - 'nodemon'

2. Importe os módulos necessários:
   ```javascript
   import express from "express";
  
