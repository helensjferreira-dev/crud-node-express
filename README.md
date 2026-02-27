# 📌 CRUD de Clientes com Login - Node.js, Express, Sequelize e Pug

Este projeto é um CRUD completo de clientes, integrado com um sistema simples de login de usuários, construído em Node.js utilizando:

- Express (rotas e servidor)
- Sequelize (ORM para MySQL)
- Pug (templates da interface)
- TypeScript
- Bootstrap (interface básica)

---

## 🎯 Objetivo do Projeto

O projeto foi desenvolvido como estudo prático para consolidar conceitos de backend, rotas REST, MVC, interação com banco de dados e templates HTML.

---

## 🚀 Funcionalidades

👥 CRUD de Clientes

- Listar clientes
- Criar cliente
- Editar cliente
- Deletar cliente

## 🔐 Sistema de Usuários

- Tela de login
- Validação de usuário e senha

## ⚙️ Estrutura organizada em MVC

Model/ — modelos Sequelize  
Controller/ — lógica das rotas  
Router/ — mapeamento de URLs  
Views/ — páginas Pug  
db.ts — conexão com banco MySQL  

---

## 🗂️ Estrutura de Pastas

📦 crud-node-express/

├── Controller/  
│ ├── clientsController.ts  
│ └── usersController.ts  
├── Model/  
│ ├── clientModel.ts  
│ └── userModel.ts  
├── Router/  
│ ├── clients.ts  
│ └── users.ts  
├── Views/  
│ ├── edit.pug  
│ ├── create.pug  
│ └── login.pug  
├── sql/  
│ └── ExpressDB.sql  
├── db.ts  
├── app.ts  
├── package.json  
└── README.md  

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função                                 |
| ---------- | -------------------------------------- |
| Node.js    | Ambiente de execução                   |
| Express    | Servidor HTTP e gerenciamento de rotas |
| Sequelize  | ORM para MYSQL                         |
| Pug        | Template engine                        |
| Typescript | Tipagem estática                       |
| Bootstrap  | Estilização básica                     |

---

## 🚀 Como Executar

1. Clone este repositório:

   ```bash
   git clone https://github.com/helensjferreira-dev/crud-node-express.git
   cd crude-node-express

   ```

2. Instalar dependências
   ```bash
   npm install
   ```
3. Configurar o banco de dados
   Crie um banco MySQL e configure as variáveis de ambiente:

   ```bash
   DB_NAME=seubanco
   DB_USER=root
   DB_PASS=sua_senha
   DB_HOST=localhost
   PORT=3000
   ```

   (O projeto usa db.sync() para criar as tabelas automaticamente.)

4. Subir ao servidor

   ```bash
   npm start
   ```

   Servidor no ar:
   👉 http://localhost:3000  
   


# 📚 Rotas


## 🔹 Rotas de Usuários (login)**

| Método | Rota | Descrição       |
| ------ | ---- | --------------- |
| GET    | /    | Tela de login   |
| POST   | /    | Verificar login |

---

## 🔹 Rotas de Clientes

| Método | Rota               | Descrição               |
| ------ | ------------------ | ----------------------- |
| GET    | /clientes          | Lista todos os clientes |
| GET    | /clientes/create   | Formulário de criação   |
| POST   | /clientes/create   | Salvar novo cliente     |
| GET    | /clientes/edit/:id | Formulário de edição    |
| POST   | /clientes/edit/:id | Atualizar cliente       |
| GET    | /clientes/del/:id  | Excluir cliente         |

---

## 🧱 Banco de Dados

- Modelo Client

   ```bash
   id: number;
   nome: string;
   email: string;
   ```

- Modelo User

   ```bash
   id: number;
   user: string;
   password: string;
   ```

## 🌱 Melhorias Futuras

- Middleware de autenticação para proteger as rotas de clientes
- Hash de senhas (bcrypt)
- Tratamento de erros mais amigável
- Validações com express-validator
- Telas mais estilizadas / dashboard
- Paginação da lista de clientes


## 📄 Licença

Este projeto é livre para estudo e aprendizado.

🙋 Autora: Hélen Ferreira Desenvolvedora
🔗 [LinkedIn:](https://linkedin.com/in/helensjferreira-dev)
