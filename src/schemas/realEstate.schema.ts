import { z } from "zod";
import { addressSchema } from "./addresses.schema";
import { categorySchemaRequest } from "./categories.schema";

// Exemplo do teste mockado
// {
//   id: expect.any(Number),
//   value: 100000.99,
//   size: 400,
//   sold: false,
//   address: {
//     id: expect.any(Number),
//     street: 'street',
//     zipCode: 'zipCode',
//     number: 'number',
//     city: 'city',
//     state: 's0',
//   },
//   categoryToCreate: {
//     name: 'category',
//   },
//   createdAt: expect.any(String),
//   updatedAt: expect.any(String),
// }

const realEstateSchema = z.object({
  id: z.number(),
  value: z.number().nonnegative(),
  size: z.number().int().nonnegative(),
  sold: z.boolean().default(false),
  address: addressSchema,
  category: categorySchemaRequest,
  createdAt: z.string(),
  updatedAt: z.string(),
  categoryId: z.number(),
});

export { realEstateSchema };