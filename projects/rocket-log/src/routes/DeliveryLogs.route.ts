import { DeliveryLogsController } from "@/controllers/DeliveryLogs.controller.js";
import { ensureAuthenticated } from "@/middlewares/EnsureAuthenticated.js";
import { verifyUserAuthorization } from "@/middlewares/VerifyUserAuthorization.js";
import { Router } from "express";

const deliveryLogsRoutes = Router()
const deliveryLogsController = new DeliveryLogsController()

deliveryLogsRoutes.post("/", ensureAuthenticated, verifyUserAuthorization(["sale"]), deliveryLogsController.create)
deliveryLogsRoutes.get("/:delivery_id/show", ensureAuthenticated, verifyUserAuthorization(["sale", "customer"]),deliveryLogsController.show)

export { deliveryLogsRoutes }