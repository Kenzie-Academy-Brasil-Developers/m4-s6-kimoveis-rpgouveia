import { Request, Response } from "express";
import createScheduleService from "../services/schedules/createSchedule.service";

const createScheduleController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(response.locals.userId);
  const scheduleDateTime: object = response.locals.scheduleDateTime;
  const realEstateId: number = response.locals.realEstateId;
  const schedule = await createScheduleService(userId, scheduleDateTime, realEstateId);
  return response.status(201).json('Hello World!');
};

export default createScheduleController;