import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { handleError } from "./error";
import userRoutes from "./routes/users.routes";

const app: Application = express();

app.use(express.json());

app.use("/users", userRoutes);

app.use(handleError)

export default app;