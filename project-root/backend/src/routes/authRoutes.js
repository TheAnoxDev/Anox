import express from "express";

import {
  register,
  login,
  logout,
  me,
} from "../controllers/authController.js";


import { protect } from "../middleware/authMiddleware.js";

import {
  authLimiter
} from "../middleware/authLimiter.js";



const router = express.Router();





/*
================================
AUTH ROUTES
================================
*/


// Create account

router.post(
  "/register",
  authLimiter,
  register
);




// Login

router.post(
  "/login",
  authLimiter,
  login
);




// Logout

router.post(
  "/logout",
  logout
);





// Current user

router.get(
  "/me",
  protect,
  me
);





export default router;