import { Schema, model } from "mongoose";

interface Train {
  name: string;
  seatingCapacity: number;
  fromDestination: string;
  toDestination: string;
  duration: number;
  price: number;
  seatsOccupied: number;
}

const trainSchema = new Schema<Train>({
  name: { type: String, required: true },
  seatingCapacity: { type: Number, required: true },
  fromDestination: { type: String, required: true },
  toDestination: { type: String, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
});

const trains = model<Train>("Trains", trainSchema);
export default trains;
