import { Request, Response } from "express";
import createScheduleService from "../services/schedules/createSchedule.service";
import { tScheduleRequest } from "../interfaces/schedules.interfaces";
import listAllSchedulesByRealEstateService from "../services/schedules/listAllSchedules.service";

const createScheduleController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(response.locals.userId);
  const scheduleData: tScheduleRequest = request.body;
  const schedule = await createScheduleService(userId, scheduleData);
  return response.status(201).json(schedule);
};

const listAllSchedulesByRealEstateController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const realEstateId: number = Number(request.params.id);
  const schedules = await listAllSchedulesByRealEstateService(realEstateId);
  return response.json(schedules)
};

export {
  createScheduleController,
  listAllSchedulesByRealEstateController
};