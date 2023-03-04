import User from "../models/UserModel.js";

// Get All User
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0, refresh_token: 0 });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
// Get Single User
export const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, {
      password: 0,
      refresh_token: 0,
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
// Update User
export const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = await bcrypt.hash(pass, 10);
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      { new: true }
    );

    const { password, ...others } = updatedUser._doc;
    res.status(200).json(others);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
// Delete User
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json("User not found!");
    }
    res.status(200).json("User has been deleted.");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
