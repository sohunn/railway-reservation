import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals }) => {
  if (!locals.user) return {};
  return { username: locals.user.username, isAdmin: locals.user.isAdmin };
};
