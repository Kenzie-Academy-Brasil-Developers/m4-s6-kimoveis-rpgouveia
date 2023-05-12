import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { tScheduleRequest } from "../interfaces/schedules.interfaces";

const checkIfDateTimeIsValid = async (
  request: Request,
  _response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const scheduleData: tScheduleRequest = request.body;
  const { date, hour } = scheduleData;
  const [year, month, day]: Array<number> = date.split('/').map(Number);
  const [hourOfDay, minute]: Array<number> = hour.split(':').map(Number);
  const scheduleDateTime = new Date (year, month - 1, day, hourOfDay, minute);
  if (scheduleDateTime.getHours() < 8 || scheduleDateTime.getHours() >= 18) {
    throw new AppError('Invalid hour, available times are 8AM to 18PM', 400);
  }
  if (scheduleDateTime.getDay() === 0 || scheduleDateTime.getDay() === 6) {
    throw new AppError('Invalid date, work days are monday to friday', 400);
  }
  return next();
};

export default checkIfDateTimeIsValid;