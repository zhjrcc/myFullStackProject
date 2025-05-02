import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../db/models/user.js'

export async function createUser({ username, password }) {
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = new User({ username, password: hashedPassword })
  return await user.save()
}

export async function loginUser({ username, password }) {
  const user = await User.findOne({ username })
  if (!user) {
    throw new Error('用户名不存在')
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  if (!isPasswordCorrect) {
    throw new Error('密码错误')
  }
  const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  })
  return token
}

export async function getUserInfoById(userId) {
  try {
    const user = await User.findById(userId)
    if (!user) return { username: userId }
    return { username: user.username }
  } catch {
    return { username: userId }
  }
}
