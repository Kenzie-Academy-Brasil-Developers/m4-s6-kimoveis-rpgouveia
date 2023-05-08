import { Request, Response } from "express";
import {
  tUserListResponse,
  tUserRequest,
  tUserResponse,
} from "../interfaces/users.interfaces";
import createUserService from "../services/users/createUser.service";
import listUsersService from "../services/users/listUsers.service";

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: tUserRequest = request.body;
  const newUser: tUserResponse = await createUserService(userData);
  return response.status(201).json(newUser);
};

const listUsersController = async (
  _request: Request,
  response: Response
): Promise<Response> => {
  const userList: tUserListResponse = await listUsersService();
  return response.json(userList);
};

export { createUserController, listUsersController };
