import { Router } from "express";
import { SessionController } from "@/controllers/SectionsControllers.js";

const sessionRoutes = Router();
const sessionController = new SessionController();

sessionRoutes.post("/", sessionController.create);

export {sessionRoutes}