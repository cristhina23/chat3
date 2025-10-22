import express from "express";
import asyncHandler from "express-async-handler";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import protectRoute from "../middleware/protectedRoute.js";
const router = express.Router();

router.post('/send/:id', protectRoute , asyncHandler(sendMessage))
router.get('/:id', protectRoute, asyncHandler(getMessages))

export default router