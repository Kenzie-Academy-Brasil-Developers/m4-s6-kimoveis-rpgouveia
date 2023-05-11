import { Repository } from "typeorm";
import { RealEstate, Schedule } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const createScheduleService = async (
  userId: number,
  scheduleDateTime: object,
  realEstateId: number
) => {
  const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);
  




};

export default createScheduleService;