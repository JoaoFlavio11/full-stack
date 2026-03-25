import { Router } from "express";
import { productsRoutes } from "./productsRoutes";
import { tableRoutes } from "./tableRoutes";
import { tablesSessionsRoutes } from "./tablesSessionsRoutes";
import { orderRoutes } from "./ordersRoutes";

export const routes = Router()

routes.use("/products", productsRoutes)
routes.use("/tables", tableRoutes)
routes.use("/tables-sessions", tablesSessionsRoutes)
routes.use("/orders", ordersRoutes)
