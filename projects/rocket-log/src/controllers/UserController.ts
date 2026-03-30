import { Request, Response, NextFunction } from "express";

class UserController {
  create(request: Request, response: Response){
    return response.json({ message: "ok" })
  }
}

export { UserController }