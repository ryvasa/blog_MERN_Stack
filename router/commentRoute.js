import express from "express";
import {
  addComment,
  deleteComment,
  getAllCommentsByPostId,
  updateComment,
} from "../controller/commentController.js";
import { auth } from "../middleware/verifyUser.js";

const router = express.Router();

router.post("/comments", auth, addComment);
router.get("/comments", auth, getAllCommentsByPostId);
router.put("/comments/:id", auth, updateComment);
router.delete("/comments/:id", auth, deleteComment);

export default router;
