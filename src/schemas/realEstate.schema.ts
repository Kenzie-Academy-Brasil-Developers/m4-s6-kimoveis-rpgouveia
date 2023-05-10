import { z } from "zod";
import { addressSchemaRequest } from "./addresses.schema";

const realEstateSchema = z.object({
  id: z.number(),
  value: z.string().or(z.number().nonnegative()),
  size: z.number().int().positive(),
  sold: z.boolean().default(false),
  address: addressSchemaRequest,
  createdAt: z.string(),
  updatedAt: z.string(),
  categoryId: z.number(),
});

const realEstateSchemaRequest = realEstateSchema.omit({
  id: true,
  sold: true,
  createdAt: true,
  updatedAt: true,
});

export { realEstateSchema, realEstateSchemaRequest };