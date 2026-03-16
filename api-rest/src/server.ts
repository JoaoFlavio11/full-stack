import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes/index";
import { AppError } from "./utils/app-error";
import { ZodError } from "zod";

const PORT = 3333

const app = express()

app.use(express.json());

app.use(routes)

app.get("/", (req:Request , res: Response) => {
  res.send("Hello Express")
});

/* 2 tipos
  400: bad request => erro do cliente
  500: internal server error => erro do server
*/

app.use((error: any, req: Request, res: Response, next:NextFunction) => {

  if(error instanceof AppError){
    return res.status(error.statusCode).json({ message: error.message})
  }

  if( error instanceof ZodError){
    res.status(400).json({ message: "validation error!", issues: error.format()})
  } 

  res.status(500).json({message: error.message})
})

app.listen(PORT, () => console.log(`\n Server is running at localhost:${PORT}\n`))