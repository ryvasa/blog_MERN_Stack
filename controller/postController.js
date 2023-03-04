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
    let query = {};
    const qCategory = req.query.category;
    if (qCategory) {
      query.categories = {
        $in: [qCategory],
      };
    }
    const posts = await Post.find(query);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
// export const getAllPostByCategory = async (req, res) => {
//   try {
//     try {
//       let query = {};
//       if (qCategory) {
//         query.categories = {
//           $in: [qCategory],
//         };
//       }
//       const products = await Product.find(query)
//       res.status(200).json(products);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };
// Get Single Post
export const getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "author",
      "username img"
    );
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
// get post by userid
export const getAllPostsByUserId = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const post = await Post.find({ author: user });
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
// get post by userid
export const getPostsByUserId = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const post = await Post.find({ author: user })
      .sort({ createdAt: -1 })
      .limit(3);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
// Get 3 newest post
export const getNewestPost = async (req, res) => {
  try {
    let query = {};
    const qCategory = req.query.category;
    if (qCategory) {
      query.categories = {
        $in: [qCategory],
      };
    }
    const posts = await Post.find(query)
      .sort({ createdAt: -1 })
      .limit(3)
      .populate("author", "username img");
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
// get 6 documen
export const getNewest = async (req, res) => {
  try {
    let query = {};
    const qCategory = req.query.category;
    if (qCategory) {
      query.categories = {
        $in: [qCategory],
      };
    }
    const posts = await Post.find(query)
      .sort({ createdAt: -1 })
      .skip(3)
      .limit(6);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
