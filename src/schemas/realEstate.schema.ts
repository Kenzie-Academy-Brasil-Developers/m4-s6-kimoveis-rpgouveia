import { z } from "zod";
import { addressSchema, addressSchemaRequest } from "./addresses.schema";

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

const realEstateSchemaResponse = z.object({
  id: z.number(),
  sold: z.boolean().default(false),
  value: z.string().or(z.number().nonnegative()),
  size: z.number().int().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address: addressSchema,
});

const realEstateListSchemaResponse = z.array(realEstateSchemaResponse);

export {
  realEstateSchema,
  realEstateSchemaRequest,
  realEstateListSchemaResponse,
};