import { z } from "zod";
import { realEstateSchema } from "../schemas/realEstate.schema";

type tRealEstate = z.infer<typeof realEstateSchema>;

export { tRealEstate };