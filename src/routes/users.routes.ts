import { Router } from "express";
import { createUserController, listUsersController } from "../controllers/users.controllers";
import checkIfEmailExists from "../middlewares/checkIfEmailExists.middleware";
import checkRequestBodyData from "../middlewares/checkRequestBodyData.middleware";
import { userSchemaRequest } from "../schemas/users.schema";
import checkIfTokenIsValid from "../middlewares/checkIfTokenIsValid.middleware";
import checkAdminStatus from "../middlewares/checkAdminStatus.middleware";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  checkRequestBodyData(userSchemaRequest),
  checkIfEmailExists,
  createUserController
);
userRoutes.get(
  "",
  checkIfTokenIsValid,
  checkAdminStatus,
  listUsersController
)

export default userRoutes;
