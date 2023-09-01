import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import users from "$lib/server/models/Users";

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user) throw error(401, "Please login to view this page");

  const data = await users
    .findById(locals.user.id, "bookings")
    .populate({
      path: "bookings",
      populate: {
        path: "trainID",
        model: "Trains",
      },
    })
    .lean();

  //   const bookings = data?.bookings.map((b) => ({
  //     ...b,
  //     _id: b._id.toString(),
  //     userID: b.userID.toString(),
  //     // @ts-ignore
  //     trainID: { ...b.trainID, _id: b.trainID._id.toString() },
  //   }));

  const bookings = JSON.parse(JSON.stringify(data?.bookings));

  return {
    bookings: bookings ?? [],
  };
};
