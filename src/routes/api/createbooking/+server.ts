import { error, json } from "@sveltejs/kit";
import bookings from "$lib/server/models/Bookings";
import payments from "$lib/server/models/Payments";
import trains from "$lib/server/models/Trains";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request, locals }) => {
  if (!locals.user) throw error(401);

  const data = await request.json();
  const { seats, date, trainID } = data;

  if (!trainID)
    throw error(400, `Expected trainID, got ${typeof trainID} instead`);

  if (!seats) throw error(400, "No seats specified");
  else if (seats === 0) throw error(400, "You need to at least book 1 seat");

  if (!date) throw error(400, "No departure date specified");

  const train = await trains.findById(trainID).lean();
  if (!train) throw error(404, "Train not found");

  const booking = await bookings.create({
    userID: locals.user.id,
    trainID,
    departure: new Date(date),
    seatsBooked: seats,
  });

  await payments.create({
    userID: locals.user.id,
    amount: seats * train.price,
    bookingID: booking._id,
  });

  return json({ success: true, redirectTo: "/bookings" });
};
