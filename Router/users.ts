import { Router } from "express";
import usersController from "../Controller/usersController.ts";

const router = Router(); // precisamos criar outra variavel porq aqui a app nao esta importada

router.get("/", usersController.login);
router.post("/", usersController.checkLogin);

export default router;
