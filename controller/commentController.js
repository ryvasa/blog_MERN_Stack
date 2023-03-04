import User from "../models/UserModel.js";
import Post from "../models/PostModel.js";
import Comment from "../models/CommentModel.js";

// Add Post
export const addComment = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId, {
      refresh_token: 0,
      password: 0,
    });
    const post = await Post.findById(req.body.postId);
    if (!post || !user) {
      return res.status(403).json("Can not access");
    }
    const newComment = new Comment({ ...req.body, author: user, post: post });
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// Get All Comment by post id
export const getAllCommentsByPostId = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.id })
      .sort({ createdAt: -1 })
      .populate("author", "username img createdAt");
    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// Update Post
export const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json("Comment not found");
    }
    const user = await User.findById(req.body.userId);
    if (!user) {
      return res.status(404).json("User not found");
    }
    if (user._id.toString() === comment.author.toString()) {
      const updatedComment = await Comment.findByIdAndUpdate(
        comment._id,
        {
          ...req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedComment);
    } else {
      return res.status(403).json("Can not access");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
// Delete Post
export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json("Post not found");
    }
    const user = await User.findById(req.body.userId);
    if (!user) {
      return res.status(404).json("User not found");
    }
    if (
      user.role === "administrator" ||
      user._id.toString() === comment.author.toString()
    ) {
      await Comment.findByIdAndDelete(comment._id);
      res.status(200).json("Comment has been deleted");
    } else {
      return res.status(403).json("Can not access");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
