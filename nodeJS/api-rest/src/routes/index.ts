import { Router } from "express";
import { productsRoutes } from "./route";

const routes = Router()

routes.use("/products", productsRoutes)

export { routes };