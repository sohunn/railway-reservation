import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import trains from "$lib/server/models/Trains";

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  const { name, capacity, from, to, duration, price } = data;

  if (!name || !capacity || !from || !to || !duration || !price)
    throw error(400, "All fields are required to add a train");

  const existingRoute = await trains
    .findOne({ fromDestination: from, toDestination: to, name })
    .lean();
  if (existingRoute)
    throw error(400, `${name} already has a route from ${from} to ${to}`);

  await trains.create({
    name,
    seatingCapacity: capacity,
    fromDestination: from,
    toDestination: to,
    duration,
    price,
  });

  return json({ success: true });
};
