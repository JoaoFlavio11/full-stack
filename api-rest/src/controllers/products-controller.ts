import { Request, Response } from "express";
import { AppError } from "../utils/app-error";

class ProductsController{
  /*
    index  - GET p/ listar vários registros
    show   - GET p/ exibir um registro específico
    create - POST p/ criar registro
    update - put p/ atualizar registro
    remove - DELETE p/ apagar registro
  */
  
  index(req: Request, res: Response){
    const {page, limit} = req.query

    res.send(`Página ${page} de ${limit}`);
  }

  create(req: Request, res: Response){
    const {name, price} = req.body
    
    if(!name){
      throw new AppError("o nome do produto é obrigatório.", 400);
    }
    
    if(name.trim().length < 6){
      throw new AppError("nome com pelo menos 6 caracteres")
    }

    if(!price){
      throw new AppError("o preço do produto é obrigatório", 400);
    }

    if(price < 0){
      throw new AppError("o preço do produto não pode ser um valor negativo", 400);
    }

    //throw new Error("erro ao tentar criar produto");
    //throw new AppError("erro ao tentar criar produto");

    res.status(201).json({name, price, user_id: req.user_id})
  }

}

export { ProductsController };
