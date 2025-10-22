import  Conversation from '../models/conversationModel.js'
import Message from '../models/messageModel.js'

export const sendMessage = async (req, res) => {
  const { message } = req.body
  const { id: receiverId } = req.params
  const senderId = req.user._id

  let conversation = await Conversation.findOne({ participants: { $all: [senderId, receiverId] } })

  if (!conversation) {
    conversation = await Conversation.create({ participants: [senderId, receiverId] })
  }

  const newMessage = await Message.create({ senderId, receiverId, message })

  if (newMessage) {
  conversation.messages.push(newMessage._id)
    
  }

  // todo: socket.io implementation


  // this way takes longer
  // await conversation.save()
  // await newMessage.save()

  //better way to do it
  await Promise.all([conversation.save(), newMessage.save()])


  res.status(201).json(newMessage)
}

export const getMessages = async (req, res) => {
  const {id: userToChatWithId} = req.params
  const senderId =  req.user._id

  const conversation = await Conversation.findOne({ participants: { $all: [senderId, userToChatWithId] } }).populate('messages')

  if (!conversation) return res.status(200).json([])

  const messages = conversation.messages

  res.status(200).json(messages)
}