"use server";

import dbConnection from "@/db/mongoConnection";
// import { redirect } from "next/navigation"
import { authUser, createUser, favouriteToggle } from "@/db/queries";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function registerUser(formData) {
	const user = Object.fromEntries(formData);

	const hashPass = await bcrypt.hashSync(user?.password, 10);

	const newUser = {
		...user,
		password: hashPass,
		favourites: [],
	};

	try {
		await dbConnection();

		const created = await createUser(newUser);

		if (created) {
			redirect("/login");

			return created;
		} else {
			return {
				message: "Something went wrong or user already exists",
			};
		}
	} catch (error) {
		throw error;
	}
}

export async function loginUser(formData) {
	try {
		const credentials = {};
		credentials.email = formData.get("email");
		credentials.password = formData.get("password");

		await dbConnection();

		const found = await authUser(credentials);

		return found;
	} catch (error) {
		throw error;
	}
}

export async function favouriteUpdated(userId, recipeId) {
	if (!userId && !recipeId) {
		return { error: "Something wrong!" };
	}

	try {
		await dbConnection();

		const res = await favouriteToggle(userId, recipeId);

		return res;
	} catch (error) {
		throw error;
	}
}
