import { Schema, model } from "mongoose";

interface Payment {
  userID: Schema.Types.ObjectId;
  bookingID: Schema.Types.ObjectId;
  amount: Schema.Types.Number;
  discountID?: Schema.Types.ObjectId;
}

const PaymentSchema = new Schema<Payment>({
  userID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  amount: {
    type: Schema.Types.Number,
    required: true,
  },
  bookingID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Bookings",
  },
  discountID: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "Discounts",
  },
});

const payments = model<Payment>("Payments", PaymentSchema);
export default payments;
