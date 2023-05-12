import { Request, Response } from "express";
import {
  tCategory,
  tCategoryList,
  tCategoryRequest,
} from "../interfaces/categories.interfaces";
import createCategoryService from "../services/categories/createCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";
import listRealEstateByCategoryService from "../services/categories/listRealEstateByCategory.service";

const createCategoryController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const categoryData: tCategoryRequest = request.body;
  const newCategory: tCategory = await createCategoryService(categoryData);
  return response.status(201).json(newCategory);
};

const listCategoriesController = async (
  _request: Request,
  response: Response
): Promise<Response> => {
  const categoryList: tCategoryList = await listCategoriesService();
  return response.json(categoryList);
};

const listRealEstateByCategoryController = async (
  _request: Request,
  response: Response
): Promise<Response> => {
  const categoryId: number = response.locals.categoryId;
  const realEstateList = await listRealEstateByCategoryService(categoryId);
  return response.json(realEstateList);
};

export {
  createCategoryController,
  listCategoriesController,
  listRealEstateByCategoryController,
};