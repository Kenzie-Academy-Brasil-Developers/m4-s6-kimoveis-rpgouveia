import { z } from "zod";
import {
  categoryListSchema,
  categorySchema,
  categorySchemaRequest,
} from "../schemas/categories.schema";

type tCategory = z.infer<typeof categorySchema>;
type tCategoryRequest = z.infer<typeof categorySchemaRequest>;
type tCategoryList = z.infer<typeof categoryListSchema>;

export { tCategory, tCategoryRequest, tCategoryList };