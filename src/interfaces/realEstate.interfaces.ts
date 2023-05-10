import { z } from "zod";
import { realEstateSchema, realEstateSchemaRequest } from "../schemas/realEstate.schema";

type tRealEstate = z.infer<typeof realEstateSchema>;
type tRealEstateRequest = z.infer<typeof realEstateSchemaRequest>;

export { tRealEstate, tRealEstateRequest };