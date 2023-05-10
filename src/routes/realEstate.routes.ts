import { Router } from "express";
import { createRealEstateController } from "../controllers/realEstate.controllers";
import checkIfTokenIsValid from "../middlewares/checkIfTokenIsValid.middleware";
import checkAdminStatus from "../middlewares/checkAdminStatus.middleware";
import checkRequestBodyData from "../middlewares/checkRequestBodyData.middleware";
import { realEstateSchemaRequest } from "../schemas/realEstate.schema";

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  checkIfTokenIsValid,
  checkAdminStatus,
  checkRequestBodyData(realEstateSchemaRequest),
  createRealEstateController
);

export default realEstateRoutes;