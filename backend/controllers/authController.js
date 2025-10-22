import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'
import generateTokenAndSetCookie from '../utils/generateToken.js'

export const signup = async (req, res) => {
  const { fullName, email, username, password, confirmPassword, gender} = req.body

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' })
  }

  const user = await User.findOne({ username })

  if (user) {
    return res.status(400).json({ message: 'User already exists' })
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}}`
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}}`

  const newUser = new User({
    fullName,
    email,
    username,
    password: hashedPassword,
    gender,
    profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
  })

 if (newUser) {
  await generateTokenAndSetCookie(newUser._id, res)
  await newUser.save()

  res.status(201).json({
    _id: newUser._id,
    fullName: newUser.fullName,
    email: newUser.email,
    username: newUser.username,
    gender: newUser.gender,
    profilePic: newUser.profilePic
  })
 }
}


export const login = async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username });
  const isPasswordCorrect = await bcrypt.compare(password, user?.password || '');

  if (!user || !isPasswordCorrect) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  generateTokenAndSetCookie(user._id, res)

  res.status(200).json({
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    username: user.username,
    gender: user.gender,
    profilePic: user.profilePic
  })

} 

export const logout = (req, res) => {
  res.cookie('jwt', '', {maxAge: 0})
  res.status(200).json({ message: 'Logout successful' })
}

