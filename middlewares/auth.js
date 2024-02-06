// Note every middleware must have next - what to do next

import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    res.status(200).json({
      success: false,
      msg: "Login First !!",
    });
    return;
  }
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  const user = await User.findById(decodedToken._id);
  req.user = user; // now user details is accessable from req.user itself
  next();
};
