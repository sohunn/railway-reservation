import { Schema, model } from "mongoose";

interface Booking {
  userID: Schema.Types.ObjectId
  trainID: Schema.Types.ObjectId
  seatsBooked: number
}

const bookingSchema = new Schema<Booking>({
	userID: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "Users"
	},
	trainID: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "Trains"
	},
	seatsBooked: { type: Number, required: true }
});

const bookings = model<Booking>("Bookings", bookingSchema);
export default bookings;