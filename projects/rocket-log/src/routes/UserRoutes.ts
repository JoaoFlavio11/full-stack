import { Router } from "express";
import { UserController } from "@/controllers/User.controller.js";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/", userController.create)

export { userRoutes };