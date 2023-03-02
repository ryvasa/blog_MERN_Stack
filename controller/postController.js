import User from "../models/UserModel.js";
import Post from "../models/PostModel.js";

// Add Post
export const addPost = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId, {
      refresh_token: 0,
      password: 0,
    });
    const newPost = new Post({ ...req.body, author: user });
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// Get All Post
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
// Get Single Post
export const getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
// Update Post
export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json("Post not found");
    }
    const user = await User.findById(req.body.userId);
    if (!user) {
      return res.status(404).json("User not found");
    }
    if (
      user.role === "administrator" ||
      user._id.toString() === post.author.toString()
    ) {
      const updatedPost = await Post.findByIdAndUpdate(
        post._id,
        {
          ...req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedPost);
    } else {
      return res.status(403).json("Can not access");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
// Delete Post
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json("Post not found");
    }
    const user = await User.findById(req.body.userId);
    if (!user) {
      return res.status(404).json("User not found");
    }
    if (
      user.role === "administrator" ||
      user._id.toString() === post.author.toString()
    ) {
      await Post.findByIdAndDelete(post._id);
      res.status(200).json("Post has been deleted");
    } else {
      return res.status(403).json("Can not access");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
