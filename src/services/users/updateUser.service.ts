import { Repository } from "typeorm";
import {
  tUserResponse,
  tUserUpdateRequest,
} from "../../interfaces/users.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schema";

const updateUserService = async (
  userId: number,
  userData: tUserUpdateRequest
): Promise<tUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const oldUserData: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });
  const newUserData: User = userRepository.create({
    ...oldUserData,
    ...userData,
  });
  await userRepository.save(newUserData);
  const updatedUser: tUserResponse = userSchemaResponse.parse(newUserData);
  return updatedUser;
};

export default updateUserService;