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
  const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
  const realEstate: RealEstate | null = await realEstateRepository.findOne({
    where: {
      id: realEstateId
    }
  });
  if (!realEstate) {
    throw new AppError('RealEstate not found', 404);
  }
  response.locals.realEstateId = realEstateId;
  return next();
};

export default checkIfRealEstateExists;