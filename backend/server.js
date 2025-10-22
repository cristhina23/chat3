import express from 'express'
import dotenv from 'dotenv'
import authRoute from './routes/authRoute.js'
import connectDB from './db/connection.js'
import messagesRoute from './routes/messagesRoute.js'
import userRoute from './routes/userRoute.js'
import cookieParser from 'cookie-parser'


const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', authRoute)
app.use('/api/messages', messagesRoute)
app.use('/api/users', userRoute)


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`)
  })
})