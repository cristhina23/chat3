import User from '../models/userModel.js'

export const getAllUsersForSidebar = async (req, res) => {
  const loggedInUserId = req.user._id

  const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password')

  res.status(200).json(filteredUsers)
}