import express from "express";
import clientsRouter from "./Router/clients.ts";
import usersRouter from "./Router/users.ts";
import db from "./db.ts";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(clientsRouter);
app.use(usersRouter);

app.set("view engine", "pug");
app.set("views", "./Views");

db.sync()
  .then(() => {
    console.log("Conectado com o banco: " + process.env.DB_NAME);
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Servidor criado...");
    });
  });
