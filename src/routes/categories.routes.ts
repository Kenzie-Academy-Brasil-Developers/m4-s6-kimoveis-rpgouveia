import { Router } from "express";
import {
  createCategoryController,
  listCategoriesController,
  listRealEstateByCategoryController,
} from "../controllers/categories.controllers";
import checkIfTokenIsValid from "../middlewares/checkIfTokenIsValid.middleware";
import checkAdminStatus from "../middlewares/checkAdminStatus.middleware";
import checkRequestBodyData from "../middlewares/checkRequestBodyData.middleware";
import { categorySchemaRequest } from "../schemas/categories.schema";
import checkIfCategoryIdExists from "../middlewares/checkIfCategoryIdExists.middleware";

const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "",
  checkIfTokenIsValid,
  checkAdminStatus,
  checkRequestBodyData(categorySchemaRequest),
  createCategoryController
);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get(
  "/:id/realEstate",
  checkIfCategoryIdExists,
  listRealEstateByCategoryController
);

export default categoriesRoutes;