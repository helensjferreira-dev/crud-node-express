import { Router } from "express";
import clientsController from "../Controller/clientsController.ts";

const router = Router(); // precisamos criar outra variavel porq aqui a app nao esta importada

router.get("/clientes/", clientsController.index);

router.get("/clientes/create", clientsController.create);
router.post("/clientes/create", clientsController.store);
router.get("/clientes/:id", clientsController.show);

router.get("/clientes/edit/:id", clientsController.edit);
router.post("/clientes/edit/:id", clientsController.update);

router.get("/clientes/del/:id", clientsController.del);

export default router;
