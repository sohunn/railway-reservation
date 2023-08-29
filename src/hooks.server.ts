import { connect } from "mongoose";
import { DB_URI, JWT_SECRET } from "$env/static/private";
import { JsonWebTokenError, verify } from "jsonwebtoken";
import constants from "$lib/server/constants";
import { customRedirect } from "$lib/server/utils";
import type { Handle } from "@sveltejs/kit";
import users from "$lib/server/models/Users";

connect(DB_URI)
  .then(() => console.log("Connected to Mongo DB"))
  .catch((err) => console.log("Unable to connect to Mongo DB", err));

const isProtectedRoute = (route: string) => route.startsWith("/adminui");

export const handle: Handle = async ({ event, resolve }) => {
  const jwt = event.cookies.get("token");
  if (!jwt && isProtectedRoute(event.url.pathname)) return customRedirect();

  if (jwt) {
    try {
      const decoded = verify(jwt, JWT_SECRET) as App.JWTPayload;
      const user = await users.findById(decoded.id, "username").lean().exec();

      if (!user) {
        event.cookies.delete("token", { path: "/" });
      } else {
        event.locals.user = { username: user.username };
        if (
          isProtectedRoute(event.url.pathname) &&
          !constants.admins.includes(decoded.id)
        )
          return customRedirect();
      }
    } catch (err) {
      // jwt has been tampered or has expired, clear the cookie so they sign in again
      if (err instanceof JsonWebTokenError) {
        event.cookies.delete("token", { path: "/" });
        return customRedirect();
      }
    }
  }

  const response = await resolve(event);
  return response;
};
