import { Router } from "express"
import { ProductsController } from "@/controllers/products-controller"
import { ensureAuthenticated } from "@/middleware/ensureAuthenticated"
import { verifyUserAuthorization } from "@/middleware/verifyUserAuthorization"

const productsRoutes = Router()
const productsController = new ProductsController()

//para todos
productsRoutes.use(verifyUserAuthorization(["sale","admin"]))

productsRoutes.get("/", productsController.index)
productsRoutes.post("/", ensureAuthenticated, productsController.create)

export { productsRoutes }
