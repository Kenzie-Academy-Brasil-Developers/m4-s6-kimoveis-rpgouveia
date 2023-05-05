import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
} from "../schemas/users.schema";

type tUser = z.infer<typeof userSchema>;
type tUserRequest = z.infer<typeof userSchemaRequest>;
type tUserResponse = z.infer<typeof userSchemaResponse>;

export { tUser, tUserRequest, tUserResponse };