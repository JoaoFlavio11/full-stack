import { Request, Response, NextFunction } from "express";
import { email, z } from "zod";
import { hash } from "bcrypt";
import { prisma } from "@/database/prisma.js";
import { AppError } from "@/utils/AppError.js";

class UserController {
  async create(request: Request, response: Response){
    const bodySchema = z.object({
      name: z.string().trim().min(1),
      email: z.string().email(),
      password: z.string().trim().min(6),
    })

    const { name, email, password } = bodySchema.parse(request.body)
    
    const userWithSameEmail = await prisma.user.findFirst({where: { email } })

    if(userWithSameEmail){
      throw new AppError("User with same email already exists")
    }

    const hashedPassword = await hash(password, 8)

    const user = await prisma.user.create({
      data: {
        name, email. password: hashedPassword
      }
    })

    const { password: _, ...userWithoutPassword } = user

    return response.json( userWithoutPassword )
  }
}

export { UserController }