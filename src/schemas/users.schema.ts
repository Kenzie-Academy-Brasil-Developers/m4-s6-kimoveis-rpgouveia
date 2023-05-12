import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const userSchemaEmailRequest = userSchema.pick({
  email: true,
});

const userListSchemaResponse = z.array(userSchemaResponse);
const updateUserSchema = userSchemaRequest.omit({ admin: true }).partial();

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaEmailRequest,
  userListSchemaResponse,
  updateUserSchema,
};