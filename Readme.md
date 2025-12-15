# PowerSpot Backend

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green)](https://www.mongodb.com/)
[![ESLint](https://img.shields.io/badge/ESLint-8.x-blue)](https://eslint.org/)

Backend do projeto **PowerSpot**, responsável por gerenciar usuários, autenticação e favoritos de **pontos de recarga próximos ao usuário**.

## Estrutura do Projeto

```text
├── .editorconfig
├── .env
├── .eslintrc
├── .gitignore
├── controllers
│   ├── favorites.js
│   └── users.js
├── middlewares
│   ├── auth.js
│   └── userValidator.js
├── models
│   └── user.js
├── package.json
├── routes
│   ├── favorite.js
│   └── user.js
└── server.js
Tecnologias
Node.js

Express

MongoDB (Mongoose)

JWT (autenticação)

Joi (validação de dados)

ESLint (linting)

Instalação
Clone o repositório:

git clone https://github.com/ArthurBarbo/PowerSpot-backend
cd PowerSpot-backend

Instale as dependências:
npm install
Crie um arquivo .env com as variáveis de ambiente necessárias:

.env
PORT=3001
MONGO_URI=<sua_string_mongodb>
JWT_SECRET=<seu_segredo_jwt>


Inicie o servidor:
npm run dev
Endpoints
Usuários
POST /users/register – Registrar usuário

POST /users/login – Login de usuário

GET /users/me – Retornar dados do usuário autenticado

PATCH /users/edit-name – Atualizar nome do usuário

Favoritos
GET /favorites – Listar favoritos do usuário (pontos de recarga próximos à localização atual)

POST /favorites – Adicionar ou remover um favorito (somente pontos próximos renderizados via API)

Observação: Todos os endpoints que exigem autenticação devem receber o header:
Authorization: Bearer <token>

Middleware
auth.js – Valida JWT e adiciona req.userId

userValidator.js – Valida dados do usuário com Joi

Models
User – Armazena name, email, password e favorites (referências para pontos de recarga próximos ao usuário)

Linting
Para rodar o ESLint:

npx eslint .

