import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import refreshTokenRoute from "./router/refreshTokenRoute.js";
import postRoute from "./router/postRoute.js";
import userRoute from "./router/userRoute.js";
import authRoute from "./router/authRoute.js";
import commentRoute from "./router/commentRoute.js";
import cookieParser from "cookie-parser";

dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(authRoute);
app.use(userRoute);
app.use(postRoute);
app.use(commentRoute);
app.use(refreshTokenRoute);

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => console.log(error));
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
