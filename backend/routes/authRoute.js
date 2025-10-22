import express from "express";
import asyncHandler from "express-async-handler";

import { signup, login, logout } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", asyncHandler(signup));
router.post("/login", asyncHandler(login));
router.post("/logout", asyncHandler(logout));


export default router;