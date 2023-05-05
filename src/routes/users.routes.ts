import { Router } from "express";
import { createUserController } from "../controllers/users.controllers";
import checkIfEmailExists from "../middlewares/checkIfEmailExists.middleware";
import checkRequestBodyData from "../middlewares/checkRequestBodyData.middleware";
import { userSchemaRequest } from "../schemas/users.schema";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  checkRequestBodyData(userSchemaRequest),
  checkIfEmailExists,
  createUserController
);

export default userRoutes;
