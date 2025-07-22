import express from "express";
import { User } from "../models/user.js";
import {
  getAllUsers,
  getMyProfile,
  login,
  register,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register);

router.post("/login", login);

// continue from here create logout router

router.get("/me", isAuthenticated, getMyProfile);

export default router;
