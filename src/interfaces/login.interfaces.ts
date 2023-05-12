import { z } from "zod";
import {
  loginSchemaRequest,
  loginSchemaResponse,
} from "../schemas/login.schema";

type tLoginRequest = z.infer<typeof loginSchemaRequest>;
type tLoginResponse = z.infer<typeof loginSchemaResponse>;

export { tLoginRequest, tLoginResponse };