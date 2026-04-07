import { Router } from "express";
import { userRoutes } from "./UserRoutes.js";
import { sessionRoutes } from "./Section.route.js";
import { deliveriesRoutes } from "./Deliveries.route.js";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/sessions", sessionRoutes);
routes.use("/deliveries", deliveriesRoutes);


export { routes };