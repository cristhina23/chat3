import express  from "express";
import asyncHandler from "express-async-handler";
import { getAllUsersForSidebar } from "../controllers/userController.js";
import protectRoute from "../middleware/protectedRoute.js";

const router = express.Router();

router.get('/', protectRoute, asyncHandler(getAllUsersForSidebar))

export default router