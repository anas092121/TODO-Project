import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

export const app = express();

config({
  path: "./data/config.env",
});

const router = express.Router();

// middleware
app.use(express.json());
app.use(cookieParser());

// using routes
app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("Server Started!");
});
