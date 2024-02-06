import express from "express";
import {
  getAllUsers,
  registerUser,
  loginUser,
  logoutUser,
  getMyProfile,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", isAuthenticated, logoutUser);
router.get("/me", isAuthenticated, getMyProfile); // now if user is authenicated only then getMyprofile call

export default router;
