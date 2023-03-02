import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import User from "../models/UserModel.js";
import jwt_decode from "jwt-decode";

// Register
export const register = async (req, res) => {
  try {
    if (!validator.isEmail(req.body.email)) {
      return res.status(400).json("Email not valid");
    }
    const user = await User.findOne({ username: req.body.username });
    const pass = req.body.password;
    if (user) {
      return res.status(400).json(`${req.body.username} all ready in use!`);
    }
    const email = await User.findOne({ email: req.body.email });
    if (email) {
      return res.status(400).json(`${req.body.email} all ready in use!`);
    }
    if (pass !== req.body.confirmPassword) {
      return res.status(400).json("Confirm password not match!");
    }
    if (pass.length < 6) {
      return res.status(400).json("Password must +6 character");
    }
    const hash = await bcrypt.hash(pass, 10);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    const savedUser = await newUser.save();
    const { password, ...others } = savedUser._doc;
    res.status(200).send(others);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// Login
export const login = async (req, res) => {
  try {
    if (!validator.isEmail(req.body.email)) {
      return res.status(400).json("Email not valid");
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json(`Email notfound!`);
    }
    const validatePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validatePassword) {
      return res.status(400).json("Wrong password!");
    }
    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.ACCESS,
      {
        expiresIn: "20s",
      }
    );
    const refreshToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.REFRESH,
      {
        expiresIn: "1d",
      }
    );
    await User.findOneAndUpdate(
      { _id: user._id },
      { refresh_token: refreshToken }
    );
    const { password, role, refresh_token, ...otherDetails } = user._doc;
    res
      .cookie("refresh_token", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        // secure:true
      })
      .status(200)
      .json({ ...otherDetails, role, accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
// Logout
export const logout = async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.body._id }, { refresh_token: null });
    return res
      .cookie("refresh_token", "", { expires: new Date(0) })
      .status(200)
      .json("User has been logout!");
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get Current User
export const getMe = async (req, res) => {
  try {
    if (!req.cookies.refresh_token) {
      return res.status(401).json("Plese login to your account");
    }
    const decoded = jwt_decode(req.cookies.refresh_token);
    const user = await User.findById(decoded.id, {
      password: 0,
      refresh_token: 0,
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
