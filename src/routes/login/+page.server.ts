import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import users from "$lib/server/models/Users";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "$env/static/private";

export const actions = {
    default: async ({ request, locals, cookies }) => {
        // already logged in, redirect back home
        if (locals.user) throw redirect(303, "/");

        const data = await request.formData();
        const username = data.get("username");
        const password = data.get("password");

        if (!username) return fail(400, { usernameMissing: true });
        if (!password) return fail(400, { passwordMissing: true });

        const existingUser = await users.findOne({ username }).lean().exec();
        if (!existingUser) return fail(400, { noUserExists: true });

        const matcher = await compare(password as string, existingUser.password);
        if (!matcher) return fail(400, { incorrectPass: true });

        const jwt = sign({ id: existingUser._id }, JWT_SECRET, { expiresIn: "2 days" });
        cookies.set("token", jwt, { path: "/", httpOnly: true, maxAge: 2 * 24 * 60 * 60 });

        // if something weird happens, debug here by also populating event.locals.user
        throw redirect(303, "/");
    }
} satisfies Actions;