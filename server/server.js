import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import { router } from "./router/main.js";
const app = express();
const PORT = 3000;
app.use(bodyparser.json());
app.use(express.json());
// console.log(router);
app.get("/", (req, res) => {
  res.send("Welcome to express js");
});
app.use(router);
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

try {
  mongoose.connect(dotenv.config().parsed.MONGODB_URL);
  console.log("connected");
} catch (err) {
  console.log(err);
}
