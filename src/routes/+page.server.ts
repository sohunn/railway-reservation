import bookings from "$lib/server/models/Bookings";
import trains from "$lib/server/models/Trains";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user) return {};
  const allTrains = (await trains.find({}).lean()).map((train) => ({
    ...train,
    _id: train._id.toString(),
  }));

  for (const train of allTrains) {
    const trainBookings = await bookings.find({ trainID: train._id }).lean();

    Object.defineProperty(train, "seatsOccupied", {
      value: trainBookings.reduce((prev, curr) => prev + curr.seatsBooked, 0),
      enumerable: true,
    });
  }

  return {
    trains: allTrains,
  };
};
