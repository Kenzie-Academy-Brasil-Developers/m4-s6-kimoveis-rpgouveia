import { z } from "zod";
import {
  userSchema,
  userSchemaEmailRequest,
  userSchemaRequest,
  userSchemaResponse,
} from "../schemas/users.schema";

type tUser = z.infer<typeof userSchema>;
type tUserRequest = z.infer<typeof userSchemaRequest>;
type tUserResponse = z.infer<typeof userSchemaResponse>;
type tUserEmailRequest = z.infer<typeof userSchemaEmailRequest>;

export { tUser, tUserRequest, tUserResponse, tUserEmailRequest };