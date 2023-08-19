import { Schema, model } from "mongoose";

interface Discount {
    bookingID: Schema.Types.ObjectId
    amount: Schema.Types.Number
}

const discountSchema = new Schema<Discount>({
	bookingID: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "Bookings"
	},
	amount: {
		type: Schema.Types.Number,
		required: true
	}
});

const bookings = model<Discount>("Discounts", discountSchema);
export default bookings;