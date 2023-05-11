import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";
import { AppDataSource } from "../data-source";
import { tScheduleRequest } from "../interfaces/schedules.interfaces";
import { AppError } from "../error";

const checkIfRealEstateExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const scheduleData: tScheduleRequest = request.body;
  const { realEstateId } = scheduleData;
  const { id } = request.params;
  const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
  const realEstate: RealEstate | null = await realEstateRepository.findOne({
    where: {
      id: realEstateId || Number(id)
    }
  });
  if (!realEstate) {
    throw new AppError('RealEstate not found', 404);
  }
  return next();
};

export default checkIfRealEstateExists;