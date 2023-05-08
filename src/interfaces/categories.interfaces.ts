import { z } from "zod";
import {
  categorySchema,
  categorySchemaRequest,
} from "../schemas/categories.schema";

type tCategory = z.infer<typeof categorySchema>;
type tCategoryRequest = z.infer<typeof categorySchemaRequest>;

export { tCategory, tCategoryRequest };
