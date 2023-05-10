import { Request, Response } from "express";
import { tRealEstateRequest } from "../interfaces/realEstate.interfaces";
import createRealEstateService from "../services/realEstate/createRealEstate.service";

const createRealEstateController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const realEstateData: tRealEstateRequest = request.body;
  const newRealEstate = await createRealEstateService(realEstateData);
  return response.status(201).json(newRealEstate)
};

export { createRealEstateController };