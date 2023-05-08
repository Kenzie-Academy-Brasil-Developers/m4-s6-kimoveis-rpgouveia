import { z } from "zod";
import {
  userListSchemaResponse,
  userSchema,
  userSchemaEmailRequest,
  userSchemaRequest,
  userSchemaResponse,
} from "../schemas/users.schema";

type tUser = z.infer<typeof userSchema>;
type tUserRequest = z.infer<typeof userSchemaRequest>;
type tUserResponse = z.infer<typeof userSchemaResponse>;
type tUserEmailRequest = z.infer<typeof userSchemaEmailRequest>;
type tUserListResponse = z.infer<typeof userListSchemaResponse>;

export {
  tUser,
  tUserRequest,
  tUserResponse,
  tUserEmailRequest,
  tUserListResponse,
};