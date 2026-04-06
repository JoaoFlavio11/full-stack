import { Router } from "express";
import { userRoutes } from "./UserRoutes.js";
import { sessionRoutes } from "./SectionRoutes.js";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/sessions", sessionRoutes)


export { routes };