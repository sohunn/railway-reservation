import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import trains from "$lib/server/models/Trains";

export const load: PageServerLoad = async ({ locals, url }) => {
  if (!locals.user) throw error(401, "Please login to view this page");

  const trainID = url.searchParams.get("train");
  if (!trainID) throw error(400);

  const train = await trains.findById(trainID).lean();
  if (!train) throw error(404, "Train not found");

  return {
    train: { ...train, _id: train._id.toString() },
  };
};
