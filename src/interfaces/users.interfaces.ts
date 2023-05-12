import { z } from "zod";
import {
  updateUserSchema,
  userListSchemaResponse,
  userSchema,
  userSchemaEmailRequest,
  userSchemaRequest,
  userSchemaResponse,
} from "../schemas/users.schema";
import { DeepPartial } from "typeorm";

type tUser = z.infer<typeof userSchema>;
type tUserRequest = z.infer<typeof userSchemaRequest>;
type tUserResponse = z.infer<typeof userSchemaResponse>;
type tUserEmailRequest = z.infer<typeof userSchemaEmailRequest>;
type tUserListResponse = z.infer<typeof userListSchemaResponse>;
type tUserUpdateRequest = DeepPartial<typeof updateUserSchema>;

export {
  tUser,
  tUserRequest,
  tUserResponse,
  tUserEmailRequest,
  tUserListResponse,
  tUserUpdateRequest,
};