import { Request, Response } from "express";
import createScheduleService from "../services/schedules/createSchedule.service";
import { tScheduleRequest } from "../interfaces/schedules.interfaces";

const createScheduleController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(response.locals.userId);
  const scheduleData: tScheduleRequest = request.body;
  const schedule = await createScheduleService(userId, scheduleData);
  return response.status(201).json(schedule);
};

export default createScheduleController;