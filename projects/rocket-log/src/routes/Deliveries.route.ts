import { Router } from "express";
import { DeliveriesController } from "@/controllers/Deliveries.controller.js";
import { ensureAuthenticated } from "@/middlewares/EnsureAuthenticated.js";
import { verifyUserAuthorization } from "@/middlewares/VerifyUserAuthorization.js";
import { DeliveriesStatusController } from "@/controllers/DeliveriesStatus.controller.js";

const deliveriesRoutes = Router();
const deliveriesController = new DeliveriesController();
const deliveriesStatusController = new DeliveriesStatusController();

deliveriesRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]));
deliveriesRoutes.post("/", deliveriesController.create);
deliveriesRoutes.get("/", deliveriesController.index);
deliveriesRoutes.patch("/:id/status", deliveriesStatusController.update);

export { deliveriesRoutes }