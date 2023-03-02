import express from "express";
import {
  getMe,
  login,
  logout,
  register,
} from "../controller/authController.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.delete("/logout", logout);
router.get("/me", getMe);

export default router;
