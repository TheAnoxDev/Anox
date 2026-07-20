import express from "express";
import {
  register,
  login,
  logout,
  me,
} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authLimiter } from "../middleware/authLimiter.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", authLimiter, login);

router.post("/logout", logout);

router.get("/me", protect, me);

export default router;