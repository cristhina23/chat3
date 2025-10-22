import e from "express";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 6,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  profilePic: {
    type: String,
    required: true,
    default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;