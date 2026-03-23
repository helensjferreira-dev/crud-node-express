# 📌 CRUD de Clientes com Login - Node.js, Express, Sequelize e Pug
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

[🇧🇷 Português](#-português) | [🇺🇸 English](#-english)

---

## 🇧🇷 Português


Este projeto é um CRUD completo de clientes, integrado com um sistema simples de login de usuários, construído em Node.js utilizando:

   - Express (rotas e servidor)
   - Sequelize (ORM para MySQL)
   - Pug (templates da interface)
   - TypeScript
   - Bootstrap (interface básica)


### 🎯 Objetivo do Projeto

O projeto foi desenvolvido como estudo prático para consolidar conceitos de backend, rotas REST, MVC, interação com banco de dados e templates HTML.


### 🚀 Funcionalidades

#### 👥 CRUD de Clientes

- Listar clientes
- Criar cliente
- Editar cliente
- Deletar cliente

#### 🔐 Sistema de Usuários

- Tela de login
- Validação de usuário e senha


### ⚙️ Estrutura organizada em MVC

   Model/ — modelos Sequelize  
   Controller/ — lógica das rotas  
   Router/ — mapeamento de URLs  
   Views/ — páginas Pug  
   db.ts — conexão com banco MySQL  


### 🗂️ Estrutura de Pastas
```
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
```
### 🛠️ Tecnologias Utilizadas

| Tecnologia | Função                                 |
| ---------- | -------------------------------------- |
| Node.js    | Ambiente de execução                   |
| Express    | Servidor HTTP e gerenciamento de rotas |
| Sequelize  | ORM para MYSQL                         |
| Pug        | Template engine                        |
| Typescript | Tipagem estática                       |
| Bootstrap  | Estilização básica                     |


### 🚀 Como Executar

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



### 📚 Rotas


#### 🔹 Rotas de Usuários (login)**

| Método | Rota | Descrição       |
| ------ | ---- | --------------- |
| GET    | /    | Tela de login   |
| POST   | /    | Verificar login |


#### 🔹 Rotas de Clientes

| Método | Rota               | Descrição               |
| ------ | ------------------ | ----------------------- |
| GET    | /clientes          | Lista todos os clientes |
| GET    | /clientes/create   | Formulário de criação   |
| POST   | /clientes/create   | Salvar novo cliente     |
| GET    | /clientes/edit/:id | Formulário de edição    |
| POST   | /clientes/edit/:id | Atualizar cliente       |
| GET    | /clientes/del/:id  | Excluir cliente         |


### 🧱 Estrutura de Dados e Tipagem
O projeto utiliza Sequelize Models para a persistência e TypeScript Interfaces para a tipagem dos dados.

👥 Clientes (Clients)
* Modelo Sequelize (`clientModel.ts`):

   ```bash
   id: INTEGER (Auto-increment, Primary Key)

   nome: STRING (Not Null)

   email: STRING (Not Null)
   ```
* Interface TypeScript (`IClients`):
   ```bash
   export interface IClients {
   id: number;
   nome: string;
   email: string;
   }
   ```

🔐 Usuários (Users)
* Modelo Sequelize (`usersModel.ts`):
   ```bash
   id: INTEGER (Auto-increment, Primary Key)

   user: STRING (Not Null)

   password: STRING (Not Null)
   ```
* Interface TypeScript (`IUsers`):
   ```bash
   export interface IUsers {
   id: number;
   user: string;
   password: string;
   }
   ```

### 🌱 Melhorias Futuras

- Middleware de autenticação para proteger as rotas de clientes
- Hash de senhas (bcrypt)
- Tratamento de erros mais amigável
- Validações com express-validator
- Telas mais estilizadas / dashboard
- Paginação da lista de clientes


### 📄 Licença

Este projeto é livre para estudo e aprendizado.

---

## 🇺🇸 English

This project is a complete Customer CRUD integrated with a simple user login system, built in Node.js using:

- **Express** (Routing and server)
- **Sequelize** (ORM for MySQL)
- **Pug** (UI templates)
- **TypeScript**
- **Bootstrap** (Basic styling)


### 🎯 Project Goal

This project was developed as a practical study to consolidate backend concepts, REST routes, MVC architecture, database interaction, and HTML templates.


### 🚀 Features

#### 👥 Customer CRUD
- List customers
- Create customer
- Edit customer
- Delete customer

#### 🔐 User System
- Login screen
- User and password validation

#### ⚙️ MVC Organized Structure
- **Model/** — Sequelize models
- **Controller/** — Route logic
- **Router/** — URL mapping
- **Views/** — Pug pages
- **db.ts** — MySQL database connection


### 🗂️ Folder Structure
```
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
```

### 🛠️ Tech Stack

| Technology | Role |
| ---------- | ---- |
| Node.js    | Runtime environment |
| Express    | HTTP server and route management |
| Sequelize  | ORM for MySQL |
| Pug        | Template engine |
| TypeScript | Static typing |
| Bootstrap  | Basic styling |


### 🚀 How to Run

1. **Clone this repository:**
   ```bash
   git clone [https://github.com/helensjferreira-dev/crud-node-express.git](https://github.com/helensjferreira-dev/crud-node-express.git)
   cd crud-node-express

2. Install dependencies:
   ```bash
   npm install

3. Database Setup:
   Create a MySQL database and configure your environment variables:
   ```bash
   DB_NAME=your_db_name
   DB_USER=root
   DB_PASS=your_password
   DB_HOST=localhost
   PORT=3000

   (The project uses db.sync() to automatically create tables.)

4. Start the server:
   ```bash
   npm start

   Server running at:
   👉 http://localhost:3000


### 🛣️ Routing System

The application uses **Express Router** to decouple the routing logic from the main server file (`app.ts`). This ensures a scalable and clean code architecture.

### 🔹 User & Auth Routes
Managed by `Router/users.ts`. These routes handle the initial landing and session entry.

| Method | Endpoint | Controller Action | Description |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | `loginPage` | Renders the Pug login form. |
| **POST** | `/` | `authenticate` | Validates credentials against the User model. |

### 🔹 Customer Management (CRUD)
Managed by `Router/clients.ts`. These routes are the core of the business logic.

| Method | Endpoint | Controller Action | Description |
| :--- | :--- | :--- | :--- |
| **GET** | `/clientes` | `listAll` | Fetches and displays all registered customers. |
| **GET** | `/clientes/create` | `renderCreate` | Displays the form to add a new customer. |
| **POST** | `/clientes/create` | `saveClient` | Persists new customer data into MySQL. |
| **GET** | `/clientes/edit/:id` | `renderEdit` | Retrieves specific data for the edit form. |
| **POST** | `/clientes/edit/:id` | `updateClient` | Updates existing record via Sequelize `update`. |
| **GET** | `/clientes/del/:id` | `deleteClient` | Removes the record using the unique ID. |


### 🧱 Data Structure and Typing
The project uses Sequelize Models for persistence and TypeScript Interfaces for data typing.

👥 Clients
* Sequelize Model (`clientModel.ts`):

   ```bash
   id: INTEGER (Auto-increment, Primary Key)

   nome: STRING (Not Null)

   email: STRING (Not Null)
   ```
* TypeScript Interface (`IClients`):
   ```bash
   export interface IClients {
   id: number;
   nome: string;
   email: string;
   }
   ```

🔐 Users
* Sequelize Model (`usersModel.ts`):
   ```bash
   id: INTEGER (Auto-increment, Primary Key)

   user: STRING (Not Null)

   password: STRING (Not Null)
   ```
* TypeScript Interface (`IUsers`):
   ```bash
   export interface IUsers {
   id: number;
   user: string;
   password: string;
   }
   ```


🌱 Future Improvements
- Authentication Middleware to protect customer routes

- Password hashing (bcrypt)

- Enhanced error handling

- Validation with express-validator

- Improved Dashboard UI

- Pagination for the customer list

### 📄 License  
This project is open for study and learning purposes.  


🙋 Author/Autora: Hélen Ferreira Desenvolvedora  
🔗 [LinkedIn](https://linkedin.com/in/helensjferreira-dev)  
💬 [WhatsApp](https://wa.me/5548988183720)  
🔗 [GitHub](https://github.com/helensjferreira-dev/)  
 