import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const checkIfUserExists = async (
  request: Request,
  _response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId: number = Number(request.params.id);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new AppError("User not found", 404);
  }
  return next();
};

export default checkIfUserExists;