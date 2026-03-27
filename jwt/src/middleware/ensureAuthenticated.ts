import { AppError } from "@/utils/AppError";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { authConfig } from "@/configs/auth";

interface TokenPayload {
  role: string
  sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
  const authHeader = request.headers.authorization

  if(!authHeader){
    throw new AppError("JWT token nao informado")
  }

  const [,token]  = authHeader.split(" ")

  const { sub: user_id } = verify(token, authConfig.jwt.secret) as TokenPayload

  request.user_id = {
    id: String(user_id),
    role,
  }

  return next()
}