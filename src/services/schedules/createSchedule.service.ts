import { Repository } from "typeorm";
import { Schedule } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { tScheduleRequest, tScheduleResponse } from "../../interfaces/schedules.interfaces";

const createScheduleService = async (
  userId: number,
  scheduleData: tScheduleRequest
): Promise<tScheduleResponse> => {
  const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);
  const { date, hour, realEstateId } = scheduleData;

  const checkUserSchedule: Schedule[] = await scheduleRepository
    .createQueryBuilder("schedules")
    .where("schedules.user = :userId", { userId })
    .andWhere("schedules.date = :date", { date })
    .andWhere("schedules.hour = :hour", { hour })
    .getMany();
  if (checkUserSchedule.length > 0) {
    throw new AppError("User schedule to this real estate at this date and time already exists", 409);
  }

  const checkRealEstateSchedule: Schedule[] = await scheduleRepository
    .createQueryBuilder("schedules")
    .where("schedules.realEstate = :realEstateId", { realEstateId })
    .andWhere("schedules.date = :date", { date })
    .andWhere("schedules.hour = :hour", { hour })
    .getMany();
  if (checkRealEstateSchedule.length > 0) {
    throw new AppError("Schedule to this real estate at this date and time already exists", 409);
  }

  const schedule: Schedule = scheduleRepository.create({
    date: scheduleData.date,
    hour: scheduleData.hour,
    realEstate: { id: scheduleData.realEstateId },
    user: { id: userId },
  });
  await scheduleRepository.save(schedule);
  const message: tScheduleResponse = { message: "Schedule created" };
  return message;
};

export default createScheduleService;