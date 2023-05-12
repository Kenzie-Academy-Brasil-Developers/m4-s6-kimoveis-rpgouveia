import { Request, Response } from "express";
import { tRealEstateRequest } from "../interfaces/realEstate.interfaces";
import createRealEstateService from "../services/realEstate/createRealEstate.service";
import listAllRealEstatesService from "../services/realEstate/listAllRealEstates.service";

const createRealEstateController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const realEstateData: tRealEstateRequest = request.body;
  const newRealEstate = await createRealEstateService(realEstateData);
  return response.status(201).json(newRealEstate);
};

const listAllRealEstatesController = async (
  _request: Request,
  response: Response
): Promise<Response> => {
  const realEstateList = await listAllRealEstatesService();
  return response.json(realEstateList);
};

export { createRealEstateController, listAllRealEstatesController };