import { Router } from "express";
import { createCategoryController, listCategoriesController } from "../controllers/categories.controllers";
import checkIfTokenIsValid from "../middlewares/checkIfTokenIsValid.middleware";
import checkAdminStatus from "../middlewares/checkAdminStatus.middleware";
import checkRequestBodyData from "../middlewares/checkRequestBodyData.middleware";
import { categorySchemaRequest } from "../schemas/categories.schema";

const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "",
  checkIfTokenIsValid,
  checkAdminStatus,
  checkRequestBodyData(categorySchemaRequest),
  createCategoryController
);
categoriesRoutes.get(
  "",
  listCategoriesController
);

export default categoriesRoutes;