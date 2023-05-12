import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";

const listRealEstateByCategoryService = async (
  categoryId: number
): Promise<Category | null> => {
  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);
  const categoryRealEstates: Category | null = await categoryRepository
    .createQueryBuilder("categories")
    .leftJoinAndSelect("categories.realEstate", "realEstate")
    .where("categories.id = :categoryId", { categoryId })
    .getOne();
  return categoryRealEstates;
};

export default listRealEstateByCategoryService;
