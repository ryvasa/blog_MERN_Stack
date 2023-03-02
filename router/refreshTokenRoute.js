import { refreshToken } from "../controller/refreshToken.js";
import express from "express";

const router = express.Router();

router.get("/token", refreshToken);

export default router;
