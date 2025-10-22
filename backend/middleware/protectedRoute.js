import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protectRoute = asyncHandler(async (req, res, next) => {

      const token = req.cookies.jwt;

      if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token found");
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (!decoded) {
        res.status(401);
        throw new Error("Not authorized, token is invalid");
      }

      const user = await User.findById(decoded.userId).select("-password");

      if (!user) {
        res.status(401);
        throw new Error("Not authorized, user not found");
      }

      req.user = user;

      next();
});

export default protectRoute;