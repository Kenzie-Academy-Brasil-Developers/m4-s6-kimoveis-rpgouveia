import { Request, Response } from "express";
import { tUserRequest, tUserResponse } from "../interfaces/users.interfaces";
import createUserService from "../services/users/createUser.service";

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: tUserRequest = request.body;
  const newUser: tUserResponse = await createUserService(userData);
  return response.status(201).json(newUser);
};

export { createUserController };