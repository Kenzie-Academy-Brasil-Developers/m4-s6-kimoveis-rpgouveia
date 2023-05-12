import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import checkIfEmailExists from "../middlewares/checkIfEmailExists.middleware";
import checkRequestBodyData from "../middlewares/checkRequestBodyData.middleware";
import { updateUserSchema, userSchemaRequest } from "../schemas/users.schema";
import checkIfTokenIsValid from "../middlewares/checkIfTokenIsValid.middleware";
import checkAdminStatus from "../middlewares/checkAdminStatus.middleware";
import checkLoggedUserPermission from "../middlewares/checkLoggedUserPermission.middleware";
import checkIfUserExists from "../middlewares/checkIfUserExists.middleware";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  checkRequestBodyData(userSchemaRequest),
  checkIfEmailExists,
  createUserController
);
userRoutes.get("", checkIfTokenIsValid, checkAdminStatus, listUsersController);
userRoutes.patch(
  "/:id",
  checkIfUserExists,
  checkIfTokenIsValid,
  checkLoggedUserPermission,
  checkRequestBodyData(updateUserSchema),
  updateUserController
);
userRoutes.delete(
  "/:id",
  checkIfUserExists,
  checkIfTokenIsValid,
  checkAdminStatus,
  deleteUserController
);

export default userRoutes;