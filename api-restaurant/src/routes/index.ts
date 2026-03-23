import { Router } from "express";
import { productsRoutes } from "./productsRoutes";
import { tableRoutes } from "./tableRoutes";

const routes = Router()

routes.use("/products", productsRoutes)
routes.use("/tables", tableRoutes)

export {routes}