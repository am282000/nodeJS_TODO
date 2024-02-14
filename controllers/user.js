import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json({ success: true, users });
  } catch (error) {
    next(error);
  }
};
export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(new ErrorHandler(404, "User already exist"));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    sendCookie(user, res, 201, "User added sucessfully");
  } catch (error) {
    next(error);
  }
};
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email }).select("+password");
    // Select takes only what keys you want to get in esponse - Here we used a small hack "+"
    //                                           => this means all fields + password field too
    if (!existingUser) {
      return next(new ErrorHandler(404, "Invalid email or password"));
    }
    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordMatch) {
      return next(new ErrorHandler(404, "Invalid email or password"));
    }
    sendCookie(existingUser, res, 200, `Welcome back ${existingUser.name}`);
  } catch (error) {
    next(error);
  }
};

export const logoutUser = (req, res, next) => {
  try {
    res
      .status(200)
      .cookie("token", "", {
        expires: new Date(Date.now()),
        sameSite:
          process.env.NODE_ENVIRONMENT === "Development" ? "lax" : "none", // can be acces on different origins
        secure: process.env.NODE_ENVIRONMENT === "Development" ? false : true, // when sucere used as none , secure must be true
      })
      .json({
        success: true,
        msg: "Logout succesfully !!",
      });
  } catch (error) {
    next(error);
  }
};

export const getMyProfile = (req, res) => {
  res.status(200).json({ success: true, user: req.user });
};
