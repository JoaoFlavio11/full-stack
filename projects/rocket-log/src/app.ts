import express from "express";
import { errorHandling } from "./middlewares/ErrorHandling.js";
import { routes } from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use(routes);

app.use(errorHandling);

export { app };
