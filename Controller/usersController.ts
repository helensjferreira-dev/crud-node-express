import type { Request, Response } from "express";
import type { IUsers } from "../Model/users.ts";
import usersModel from "../Model/usersModel.ts";

function login(req: Request, res: Response, next: any) {
  res.render("login");
}

async function checkLogin(req: Request, res: Response, next: any) {
const login = req.body as IUsers;

try{
let logado = await usersModel.findOne({
    where:{
        user: login.user,
        password: login.password
    }
});
if (logado!=null){
    //ok
    res.redirect("/clientes")
}else {
    console.log("Senha inválida!!!")
}


}catch(erro){
    console.log("Erro no login!!!");
    res.status(500).end();

}

}


export default { login,checkLogin };
