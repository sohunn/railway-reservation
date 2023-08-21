import { connect } from "mongoose";
import { DB_URI, JWT_SECRET } from "$env/static/private";
import { verify } from "jsonwebtoken";
import constants from "$lib/server/constants";
import { customRedirect } from "$lib/server/utils";
import type { Handle } from "@sveltejs/kit";

connect(DB_URI)
    .then(() => console.log("Connected to Mongo DB"))
    .catch(err => console.log("Unable to connect to Mongo DB", err));

const isProtectedRoute = (route: string) => route.startsWith('/adminui')

export const handle: Handle = async ({ event, resolve }) => {
    const jwt = event.cookies.get("token");

    if (!jwt && isProtectedRoute(event.url.pathname)) {
        return customRedirect()
    }

    if (jwt) {
        try {
            const decoded = verify(jwt, JWT_SECRET) as App.User;
            // maybe get user from the db to ensure event.locals.user is definitely existing
            event.locals.user = decoded; // serialize as required

            if (isProtectedRoute(event.url.pathname) && !constants.admins.includes(decoded.id)) return customRedirect()

        } catch (err) {
            // jwt has been tampered or has expired, clear the cookie so they sign in again
            event.cookies.delete("token", { path: "/" });
            return customRedirect()
        }
    }

    const response = await resolve(event);
    return response;
};