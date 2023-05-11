import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { tScheduleRequest } from "../interfaces/schedules.interfaces";

const checkIfDateTimeIsValid = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const scheduleData: tScheduleRequest = request.body;
  const { date, hour } = scheduleData;
  // Exemplo de Data: 2023/11/05
  // Exemplo de Hora: 08:50
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
  const [year, month, day]: Array<number> = date.split('/').map(Number);
  const [hourOfDay, minute]: Array<number> = hour.split(':').map(Number);
  const scheduleDateTime = new Date (year, month - 1, day, hourOfDay, minute);
  // console.log('scheduleDateTime: ', scheduleDateTime, typeof scheduleDateTime);
  // Retorna um OBJETO nesta forma: 2022-03-01T15:30:00.000Z

  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
  if (scheduleDateTime.getHours() < 8 || scheduleDateTime.getHours() >= 18) {
    throw new AppError('Invalid hour, available times are 8AM to 18PM', 400);
  }
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
  if (scheduleDateTime.getDay() === 0 || scheduleDateTime.getDay() === 6) {
    throw new AppError('Invalid date, work days are monday to friday', 400);
  }
  response.locals.scheduleDateTime = scheduleDateTime;
  return next();
};

export default checkIfDateTimeIsValid;