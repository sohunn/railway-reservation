import { Schema, model } from "mongoose";

interface User {
  username: string
  password: string
}

const userSchema = new Schema<User>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }

}, {
  timestamps: true
})

userSchema.virtual('bookings', {
  localField: '_id',
  foreignField: 'userID',
  ref: 'Bookings'
})

userSchema.set('toJSON', { virtuals: true })
userSchema.set('toObject', { virtuals: true })

const users = model<User>('Users', userSchema)
export default users