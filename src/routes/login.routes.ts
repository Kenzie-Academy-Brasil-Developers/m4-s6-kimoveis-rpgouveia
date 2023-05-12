import { Router } from "express";
import checkRequestBodyData from "../middlewares/checkRequestBodyData.middleware";
import { loginSchemaRequest } from "../schemas/login.schema";
import { createSessionController } from "../controllers/login.controllers";

const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  checkRequestBodyData(loginSchemaRequest),
  createSessionController
);

export default loginRoutes;