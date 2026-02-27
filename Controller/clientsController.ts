import type { Request, Response } from "express";
import type { IClients } from "../Model/clients.ts";
import clientModel from "../Model/clientModel.ts";

async function index(req: Request, res: Response, next: any) {
  //res.render("index");
  const clients = await clientModel.findAll();
  res.json(clients);
}

async function show(req: Request, res: Response, next: any) {
  const client = await clientModel.findByPk(req.params.id);
  res.json(client);
}

async function edit(req: Request, res: Response, next: any) {
  const client = await clientModel.findByPk(req.params.id);

  res.render("edit", { client: client });
}

async function update(req: Request, res: Response, next: any) {
  await clientModel.update(req.body as IClients, {
    where: {
      id: req.params.id,
    },
  });
  res.redirect("/clientes");
}

function create(req: Request, res: Response, next: any) {
  res.render("create");
}

async function store(req: Request, res: Response, next: any) {
  let client = req.body as IClients;
  await clientModel.create({ ...client });
  res.redirect("/clientes/");
}

async function del(req: Request, res: Response, next: any) {
  await clientModel.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.redirect("/clientes/");
}

export default { index, create, store, show, edit, update, del };
