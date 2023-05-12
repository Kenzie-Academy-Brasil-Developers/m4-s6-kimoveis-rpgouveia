import { Router } from "express";
import {
  createScheduleController,
  listAllSchedulesByRealEstateController,
} from "../controllers/schedules.controllers";
import checkIfTokenIsValid from "../middlewares/checkIfTokenIsValid.middleware";
import checkRequestBodyData from "../middlewares/checkRequestBodyData.middleware";
import { scheduleSchemaRequest } from "../schemas/schedules.schema";
import checkIfRealEstateExists from "../middlewares/checkIfRealEstateExists.middleware";
import checkIfDateTimeIsValid from "../middlewares/checkIfDateTimeIsValid.middleware";
import checkAdminStatus from "../middlewares/checkAdminStatus.middleware";

const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "",
  checkIfTokenIsValid,
  checkRequestBodyData(scheduleSchemaRequest),
  checkIfRealEstateExists,
  checkIfDateTimeIsValid,
  createScheduleController
);

schedulesRoutes.get(
  "/realEstate/:id",
  checkIfTokenIsValid,
  checkAdminStatus,
  checkIfRealEstateExists,
  listAllSchedulesByRealEstateController
);

export default schedulesRoutes;