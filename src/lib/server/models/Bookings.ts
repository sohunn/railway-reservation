import { Schema, model } from "mongoose";

export interface Booking {
  userID: Schema.Types.ObjectId;
  trainID: Schema.Types.ObjectId;
  seatsBooked: number;
  departure: Date;
}

const bookingSchema = new Schema<Booking>(
  {
    userID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    trainID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Trains",
    },
    departure: {
      type: Schema.Types.Date,
      required: true,
    },
    seatsBooked: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

const bookings = model<Booking>("Bookings", bookingSchema);
export default bookings;
