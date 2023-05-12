import { z } from "zod";
import {
  realEstateListSchemaResponse,
  realEstateSchema,
  realEstateSchemaRequest,
} from "../schemas/realEstate.schema";

type tRealEstate = z.infer<typeof realEstateSchema>;
type tRealEstateRequest = z.infer<typeof realEstateSchemaRequest>;
type tRealEstateList = z.infer<typeof realEstateListSchemaResponse>;

export { tRealEstate, tRealEstateRequest, tRealEstateList };