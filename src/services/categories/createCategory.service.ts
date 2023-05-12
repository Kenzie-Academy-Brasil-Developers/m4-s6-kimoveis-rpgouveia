import { Repository } from "typeorm";
import {
  tCategory,
  tCategoryRequest,
} from "../../interfaces/categories.interfaces";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { categorySchema } from "../../schemas/categories.schema";

const createCategoryService = async (
  categoryData: tCategoryRequest
): Promise<tCategory> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const category: Category | null = await categoryRepository.findOne({
    where: {
      name: categoryData.name,
    },
  });
  if (category) {
    throw new AppError("Category already exists", 409);
  }
  const createdCategory: Category = categoryRepository.create(categoryData);
  await categoryRepository.save(createdCategory);
  const newCategory: tCategory = categorySchema.parse(createdCategory);
  return newCategory;
};

export default createCategoryService;