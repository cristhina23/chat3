import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'
import generateTokenAndSetCookie from '../utils/generateToken.js'

export const signup = async (req, res) => {
  const { fullName, email, userName, password, confirmPassword, gender} = req.body

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' })
  }

  const user = await User.findOne({ userName })

  if (user) {
    return res.status(400).json({ message: 'User already exists' })
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const boyProfilePic = `https://avatar.iran.liara.run/public/boy?userName=${userName}}`
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl?userName=${userName}}`

  const newUser = new User({
    fullName,
    email,
    userName,
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
    userName: newUser.userName,
    gender: newUser.gender,
    profilePic: newUser.profilePic
  })
 }
}


export const login = async (req, res) => {
  const { userName, password } = req.body
  console.log("Login request body:", req.body);

  const user = await User.findOne({ userName });
  console.log("User found:", user);

  const isPasswordCorrect = await bcrypt.compare(password, user?.password || '');
   console.log("Password correct:", isPasswordCorrect);

  if (!user || !isPasswordCorrect) {
    return res.status(400).json({ message: 'Invalid userName or password' });
  }

  generateTokenAndSetCookie(user._id, res)

  res.status(200).json({
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    userName: user.userName,
    gender: user.gender,
    profilePic: user.profilePic
  })

} 

export const logout = (req, res) => {
  res.cookie('jwt', '', {maxAge: 0})
  res.status(200).json({ message: 'Logout successful' })
}

