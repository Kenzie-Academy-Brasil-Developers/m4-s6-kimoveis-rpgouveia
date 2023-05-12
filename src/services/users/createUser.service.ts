import { Repository } from "typeorm";
import { tUserRequest, tUserResponse } from "../../interfaces/users.interfaces";
import User from "../../entities/users.entity";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schema";

const createUserService = async (
  userData: tUserRequest
): Promise<tUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const createdUser: User = userRepository.create(userData);
  await userRepository.save(createdUser);
  const newUser: tUserResponse = userSchemaResponse.parse(createdUser);
  return newUser;
};

export default createUserService;