import trains from "$lib/server/models/Trains";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user) return {};
  const allTrains = (await trains.find({}).lean()).map((train) => ({
    ...train,
    _id: train._id.toString(),
  }));
  return {
    trains: allTrains,
  };
};
