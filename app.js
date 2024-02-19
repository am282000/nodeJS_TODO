import express, { json } from "express";
import userRoutes from "./routes/user.js";
import taskRoutes from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();
config({ path: "./data/config.env" });

//Using Middlewares
app.use(express.json());
app.use(cookieParser()); //use cookie parser before using userRoutes
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.FRONTEND_PRODUCTION_URL], // Allowed origin can only access API urls to fetch data
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Basically if send cookie can be accesable on Front end
  })
); // Always use this before using routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/task", taskRoutes);

//Eror Handler
app.use(errorMiddleware);
