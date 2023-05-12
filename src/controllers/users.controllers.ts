import { Request, Response } from "express";
import {
  tUserListResponse,
  tUserRequest,
  tUserResponse,
  tUserUpdateRequest,
} from "../interfaces/users.interfaces";
import createUserService from "../services/users/createUser.service";
import listUsersService from "../services/users/listUsers.service";
import updateUserService from "../services/users/updateUser.service";
import deleteUserService from "../services/users/deleteUser.service";

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

const updateUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(request.params.id);
  const userData: tUserUpdateRequest = request.body;
  const updatedUser: tUserResponse = await updateUserService(userId, userData);
  return response.json(updatedUser);
};

const deleteUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(request.params.id);
  await deleteUserService(userId);
  return response.status(204).send();
};

export {
  createUserController,
  listUsersController,
  updateUserController,
  deleteUserController,
};