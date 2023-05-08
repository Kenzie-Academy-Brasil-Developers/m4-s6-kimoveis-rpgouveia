import { Request, Response } from "express";
import { tCategory, tCategoryRequest } from "../interfaces/categories.interfaces";
import createCategoryService from "../services/categories/createCategory.service";


const createCategoryController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const categoryData: tCategoryRequest = request.body;
  const newCategory: tCategory = await createCategoryService(categoryData);
  return response.status(201).json(newCategory);
};

export {
  createCategoryController,
}