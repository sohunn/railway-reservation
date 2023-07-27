import { Schema, model } from 'mongoose'

interface Train {
  id: string
  name: string
  seatingCapacity: number
  fromDestination: string
  toDestination: string
  duration: number
  price: number
}

const trainSchema = new Schema<Train>({
  id: { type: String, required: true, index: true, unique: true },
  name: { type: String, required: true },
  seatingCapacity: { type: Number, required: true },
  fromDestination: { type: String, required: true },
  toDestination: { type: String, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true }
})

const trains = model<Train>('Trains', trainSchema)
export default trains