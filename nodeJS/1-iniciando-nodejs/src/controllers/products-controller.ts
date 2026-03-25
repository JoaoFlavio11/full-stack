import { Request, Response } from "express";
import { AppError } from "../utils/app-error";
import {z} from "zod"

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

    const bodySchema = z.object({
      name: z
        .string({required_error:"Name is required!"})
        .trim()
        .email()
        .min(6,{message: "Name must have 6 or more chars"})
        .max(12), 
      price: z
        .number({required_error:"Price is required!"})
        .positive({message:"Price must be positive"})
        .gte(1),
    })

    const {name, price} = bodySchema.parse(req.body)

  //   if(!name){
  //     throw new AppError("o nome do produto é obrigatório.", 400);
  //   }
    
  //   if(name.trim().length < 6){
  //     throw new AppError("nome com pelo menos 6 caracteres")
  //   }

  //   if(!price){
  //     throw new AppError("o preço do produto é obrigatório", 400);
  //   }

  //   if(price < 0){
  //     throw new AppError("o preço do produto não pode ser um valor negativo", 400);
  //   }

    //throw new Error("erro ao tentar criar produto");
    //throw new AppError("erro ao tentar criar produto");

    res.status(201).json({name, price, user_id: req.user_id})
  }

}

export { ProductsController };
