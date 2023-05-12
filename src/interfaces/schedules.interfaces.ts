import { z } from "zod";
import {
  scheduleSchema,
  scheduleSchemaRequest,
} from "../schemas/schedules.schema";

type tSchedule = z.infer<typeof scheduleSchema>;
type tScheduleRequest = z.infer<typeof scheduleSchemaRequest>;
type tScheduleResponse = {
  message: string;
};

export { tSchedule, tScheduleRequest, tScheduleResponse };