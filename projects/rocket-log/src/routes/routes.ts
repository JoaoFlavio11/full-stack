import { Router } from "express";
import { userRoutes } from "./UserRoutes.js";
import { sessionRoutes } from "./SectionRoutes.js";
import { deliveriesRoutes } from "./DeliveriesRoutes.js";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/sessions", sessionRoutes);
routes.use("/deliveries", deliveriesRoutes);


export { routes };