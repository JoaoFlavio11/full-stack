import { Router } from "express";
import { TablesController } from "../controllers/tablesController";

const tableRoutes = Router();

const tablesController = new TablesController()

tableRoutes.get("/", tablesController.index)

export {tableRoutes}