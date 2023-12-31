import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import users from "$lib/server/models/Users";
import { hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "$env/static/private";

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");

    if (!username) return fail(400, { msg: "Username field cannot be empty" });
    if (!password) return fail(400, { msg: "Password field cannot be empty" });

    const existingUser = await users.findOne({ username }).lean().exec();
    if (existingUser)
      return fail(400, { msg: "That username is already taken" });

    if (password.length < 8)
      return fail(400, { msg: "Passwords must be 8 characters or longer" });

    const hashedPassword = await hash(password as string, 10);
    const createdUser = await users.create({
      username,
      password: hashedPassword,
    });

    const jwt = sign({ id: createdUser._id }, JWT_SECRET, {
      expiresIn: "2 days",
    }); // 2 days
    cookies.set("token", jwt, {
      path: "/",
      httpOnly: true,
      maxAge: 2 * 24 * 60 * 60,
    }); // 2 days

    throw redirect(303, "/");
  },
} satisfies Actions;
