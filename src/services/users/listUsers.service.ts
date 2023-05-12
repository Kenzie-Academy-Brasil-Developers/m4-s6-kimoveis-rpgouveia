import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { tUserListResponse } from "../../interfaces/users.interfaces";
import { userListSchemaResponse } from "../../schemas/users.schema";

const listUsersService = async (): Promise<tUserListResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const users: User[] = await userRepository.find();
  const userList: tUserListResponse = userListSchemaResponse.parse(users);
  return userList;
};

export default listUsersService;