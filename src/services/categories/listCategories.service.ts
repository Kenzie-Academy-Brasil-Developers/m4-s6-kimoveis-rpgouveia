import { Repository } from "typeorm";
import { tCategoryList } from "../../interfaces/categories.interfaces";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { categoryListSchema } from "../../schemas/categories.schema";

const listCategoriesService = async (): Promise<tCategoryList> => {
  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);
  const categories: Category[] = await categoryRepository.find();
  const categoryList: tCategoryList = categoryListSchema.parse(categories);
  return categoryList;
};

export default listCategoriesService;