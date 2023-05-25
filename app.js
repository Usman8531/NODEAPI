import express from "express";
import userRouter from "./routes/users.js";
import { config } from "dotenv";

export const app = express();

const router = express.Router();

config({
  path: "./data/config.env",
});

// connectDB();
// router.post
// using middleWare
app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// route splitting
