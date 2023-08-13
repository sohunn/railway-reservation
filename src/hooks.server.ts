import { connect } from "mongoose";
import { DB_URI, JWT_SECRET } from "$env/static/private";
import { redirect, type Handle } from "@sveltejs/kit";
import { verify } from "jsonwebtoken";

connect(DB_URI)
	.then(() => console.log("Connected to Mongo DB"))
	.catch(err => console.log("Unable to connect to Mongo DB", err));


export const handle: Handle = async ({ event, resolve }) => {
	const jwt = event.cookies.get("token");
	if (jwt) {
		try {
			const decoded = verify(jwt, JWT_SECRET) as string;
			event.locals.user = decoded; // serialize as required
		} catch (err) {
			// jwt has been tampered or has expired, clear the cookie so they sign in again
			event.cookies.delete("token", { path: "/" });
			throw redirect(307, "/");
		}
	}

	const response = await resolve(event);
	return response;
};