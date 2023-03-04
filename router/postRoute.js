import express from "express";
import {
  addPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
  getAllPostsByUserId,
  getNewestPost,
  getNewest,
  getPostsByUserId,
} from "../controller/postController.js";
import { auth } from "../middleware/verifyUser.js";

const router = express.Router();

router.post("/posts", auth, addPost);
router.get("/posts", getAllPosts);
router.get("/posts/newest", getNewestPost);
router.get("/posts/new", getNewest);
router.get("/posts/find/:userId", getPostsByUserId);
router.get("/posts/find/:userId/all", getAllPostsByUserId);
router.get("/posts/:id", getSinglePost);
router.put("/posts/:id", auth, updatePost);
router.delete("/posts/:id", auth, deletePost);

export default router;
