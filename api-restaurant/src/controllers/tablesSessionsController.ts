import { Request, Response, NextFunction } from "express";
import { knex } from "../database/knex";
import { z } from "zod";
import { AppError } from "../utils/appError";

export class TableSessionsController {
  async create(req:Request, res:Response, next:NextFunction){
    try{
      const bodySchema = z.object({
        table_id: z.number(),
      })

      const { table_id } = bodySchema.parse(req.body)

      const sessions = await knex<TableSessionRepository>("tables_sessions").where({table_id}).orderBy("opened_at", "desc").first()

      if(session && !sessions.closed_at){
        throw new AppError("this table is already open")
      }

      await knex<TableSessionRepository>("tables_sessios").insert({
        table_id,
        opened_at: knex.fn.now(),
      })
      
      return res.status(201).json()
    } catch (error) {
      next(error)
    }
  }

  async index(req:Request, res:Response, next:NextFunction){
    try {
      const sessions = awai knex<TableSessionRepository>("tables_sessions").orderBy("closed_at")

      return res.json(sessions)
    } catch (error) {
      next(error)
    }
  }

  async update(req:Request, res:Response, next:NextFunction){
    try {
      const id = z.string().transform((value) => Number(value)).refine((value) => !isNaN(value), {message: "id must be a number"}).parse(request.params.id)

      const session = await knex<TableSessionRepository>("tables-sessions").where({id}).first()

      if(!session){
        throw new AppError("session table not found")
      }

      if(session.closed_at){
        throw new AppError("this session table is already closed")
      }

      await knex<TableSessionRepository>("tables_sessions").update({
        closed_at: knex.fn.now(),
      }).where({id})

      return res.json()
    } catch (error) {
      next(error)
    }
  }
}