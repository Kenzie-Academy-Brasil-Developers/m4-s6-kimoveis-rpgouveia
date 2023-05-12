import { Repository } from "typeorm";
import {
  tLoginRequest,
  tLoginResponse,
} from "../../interfaces/login.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createSessionService = async (
  login: tLoginRequest
): Promise<tLoginResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOne({
    where: {
      email: login.email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const comparePassword = await bcrypt.compare(login.password, user.password);

  if (!comparePassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    { admin: user.admin },
    process.env.SECRET_KEY!,
    {
      expiresIn: process.env.EXPIRES_IN!,
      subject: String(user.id),
    }
  );
  return { token };
};

export default createSessionService;