import { Router } from "express";
import { DeliveriesController } from "@/controllers/DeliveriesController.js";
import { ensureAuthenticated } from "@/middlewares/EnsureAuthenticated.js";

const deliveriesRoutes = Router();
const deliveriesController = new DeliveriesController()

deliveriesRoutes.use(ensureAuthenticated)
deliveriesRoutes.post("/", deliveriesController.create)

export { deliveriesRoutes }