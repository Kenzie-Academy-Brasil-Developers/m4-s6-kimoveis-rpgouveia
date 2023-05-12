import { Repository } from "typeorm";
import { RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";

const listAllSchedulesByRealEstateService = async (
  realEstateId: number
): Promise<RealEstate | null> => {
  const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
  const realEstate: RealEstate | null = await realEstateRepository
    .createQueryBuilder("real_estate")
    .leftJoinAndSelect("real_estate.address", "address")
    .leftJoinAndSelect("real_estate.category", "category")
    .leftJoinAndSelect("real_estate.schedules", "schedules")
    .leftJoinAndSelect("schedules.user", "user")
    .where("real_estate.id = :realEstateId", { realEstateId })
    .getOne();
  return realEstate;
};

export default listAllSchedulesByRealEstateService;