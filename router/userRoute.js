import express from "express";
import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "../controller/userController.js";
import { auth } from "../middleware/verifyUser.js";

const router = express.Router();

router.get("/users", auth, getAllUsers);
router.get("/users/:id", getSingleUser);
router.put("/users/:id", auth, updateUser);
router.delete("/users/:id", auth, deleteUser);

export default router;
