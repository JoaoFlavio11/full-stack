import { Request, Response } from "express";
import { prisma } from "@/database/prisma.js";
import { includes, z } from "zod";
import { AppError } from "@/utils/AppError.js";

class DeliveryLogsController {
  async create( request: Request, response: Response) {
    const bodySchema = z.object({
      delivery_id: z.string().uuid(),
      description: z.string(),
    })

    const { delivery_id, description } = bodySchema.parse(request.body) 

    const delivery = await prisma.delivery.findUnique({
      where: { id: delivery_id }
    })

    if(!delivery){
      throw new AppError("Delivery not found", 404)
    }

    if (delivery.status === "delivered"){
      throw new AppError("this order has already been delivered")
    }

    if(delivery.status === "processing"){
      throw new AppError("Xhange status to shipped")
    }

    await prisma.deliveredLog.create({
      data: {
        delivery_id: delivery_id,
        description
      }
    })

    return response.status(201).json()
  }

  async show( request: Request, response: Response) {
    const paramsSchema = z.object({
      delivery_id: z.string().uuid(),
    })

    const { delivery_id } = paramsSchema.parse(request.params.delivery_id)

    const delivery = await prisma.delivery.findUnique({
      where: { id: delivery_id },
      include: {
        logs: { select : { description: true}},
        user: true
      },
    })

    if( request.user?.role === "customer" && request.user.id !== delivery?.userId){
      throw new AppError("the user can only view theis deliveries", 401)
    }

    return response.json(delivery)
  }
}

export { DeliveryLogsController }