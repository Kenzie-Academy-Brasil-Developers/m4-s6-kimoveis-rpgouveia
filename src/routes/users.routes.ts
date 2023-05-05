import { Router } from "express";
import { createUserController } from "../controllers/users.controllers";
import checkIfEmailExists from "../middlewares/checkIfEmailExists.middleware";

const userRoutes: Router = Router();

userRoutes.post("", checkIfEmailExists, createUserController);

export default userRoutes;