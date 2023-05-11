import { Repository } from "typeorm";
import { Schedule } from "../../entities";
import { AppDataSource } from "../../data-source";

const listAllSchedulesByRealEstateService = async (
  realEstateId: number
) => {
  const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);
  const schedules: Schedule[] = await scheduleRepository
    .createQueryBuilder("schedules")
    .where("schedules.realEstate = :realEstateId", { realEstateId })
    .getMany()
  console.log(schedules)
  return schedules;
};

export default listAllSchedulesByRealEstateService;