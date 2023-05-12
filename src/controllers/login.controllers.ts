import { Request, Response } from "express";
import { tLoginRequest, tLoginResponse } from "../interfaces/login.interfaces";
import createSessionService from "../services/login/createSession.service";

const createSessionController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const login: tLoginRequest = request.body;
  const token: tLoginResponse = await createSessionService(login);
  return response.json(token);
};

export { createSessionController };