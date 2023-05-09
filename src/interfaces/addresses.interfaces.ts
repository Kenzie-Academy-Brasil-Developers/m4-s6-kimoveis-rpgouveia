import { z } from "zod";
import {
  addressSchema,
  addressSchemaRequest,
} from "../schemas/addresses.schema";

type tAddressSchema = z.infer<typeof addressSchema>;
type tAddressSchemaRequest = z.infer<typeof addressSchemaRequest>;

export { tAddressSchema, tAddressSchemaRequest };