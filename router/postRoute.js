import express from "express";
import {
  addPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
} from "../controller/postController.js";
import { auth } from "../middleware/verifyUser.js";

const router = express.Router();

router.post("/posts", auth, addPost);
router.get("/posts", getAllPosts);
router.get("/posts/:id", getSinglePost);
router.put("/posts/:id", auth, updatePost);
router.delete("/posts/:id", auth, deletePost);

export default router;
