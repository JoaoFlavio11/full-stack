import { Request, response, Response } from "express";
import { prisma } from "@/database/prisma.js";
import { z } from "zod";
import { AppError } from "@/utils/AppError.js";
import { authConfig } from "@/configs/auth.js";
import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";

class SessionController {
  async create( request: Request, response: Response){
    const bodySchema = z.object({
      email: z.string().email(),
      password: z.string().trim().min(6)
    })

    const { email, password } = bodySchema.parse(request.body)

    const user = await prisma.user.FindFirst({
      where: { email },
    })

    const passwordMatched = await compare(password, user.password)

    if (!user || !password) {
      throw new AppError("Invalid email or password", 401) 
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({ role: user.role ?? "customer"}, secret, { subject: user.id, expiresIn, })

    const  {password: hashedPassword, ...userWithoutPassword } = user

    return response.json({ token, user: userWithoutPassword })
  }
}

export { SessionController }