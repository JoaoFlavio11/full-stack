import { Router } from "express";
import { DeliveriesController } from "@/controllers/DeliveriesController.js";
import { ensureAuthenticated } from "@/middlewares/EnsureAuthenticated.js";
import { verifyUserAuthorization } from "@/middlewares/VerifyUserAuthorization.js";

const deliveriesRoutes = Router();
const deliveriesController = new DeliveriesController()

deliveriesRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]))
deliveriesRoutes.post("/", deliveriesController.create)

export { deliveriesRoutes }