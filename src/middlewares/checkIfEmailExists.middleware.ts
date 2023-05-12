import { NextFunction, Request, Response } from "express";
import { tUserEmailRequest } from "../interfaces/users.interfaces";
import { Repository } from "typeorm";
import User from "../entities/users.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const checkIfEmailExists = async (
  request: Request,
  _response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const user: tUserEmailRequest = request.body;
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const foundUser: User | null = await userRepository.findOne({
    where: {
      email: user.email,
    },
  });
  if (foundUser) {
    throw new AppError("Email already exists", 409);
  }
  return next();
};

export default checkIfEmailExists;