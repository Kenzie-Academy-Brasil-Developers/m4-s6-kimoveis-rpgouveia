import { z } from "zod";
import { addressSchema } from "./addresses.schema";
import { categorySchemaRequest } from "./categories.schema";

const realEstateSchema = z.object({
  id: z.number(),
  value: z.string().or(z.number().nonnegative()),
  size: z.number().int().nonnegative(),
  sold: z.boolean().default(false),
  address: addressSchema,
  category: categorySchemaRequest,
  createdAt: z.string(),
  updatedAt: z.string(),
  categoryId: z.number(),
});

export { realEstateSchema };