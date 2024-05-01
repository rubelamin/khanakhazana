import { recipesModel } from "@/models/recipe-model";
import { userModel } from "@/models/user-model";
import {
	removeMongoIdInArray,
	removeMongoIdInObj,
} from "@/utils/replace-mongoId";

import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";

export async function getAllRecipes() {
	try {
		const recipes = await recipesModel.find().lean();

		if (recipes.length) {
			return removeMongoIdInArray(recipes);
		} else {
			return [];
		}
	} catch (error) {
		throw error;
	}
}

export async function getAllRecipesByCat(cat) {
	try {
		const recipes = await recipesModel.find().lean();

		const filtered = recipes.filter(
			(item) => item.category.toLowerCase() === cat.toLowerCase()
		);

		if (filtered.length) {
			return removeMongoIdInArray(filtered);
		} else {
			return [];
		}
	} catch (error) {
		throw error;
	}
}

export async function getRecipeById(id) {
	try {
		const recipe = await recipesModel.findById(id).lean();

		if (recipe) {
			return removeMongoIdInObj(recipe);
		} else {
			return {};
		}
	} catch (error) {
		throw error;
	}
}

export async function createUser(user) {
	const isEmailExists = await userModel.findOne({ email: user?.email });

	if (isEmailExists) {
		return null;
	}
	return await userModel.create(user);
}

export async function authUser(user) {
	const foundUser = await userModel.findOne({ email: user?.email }).lean();

	if (!foundUser) {
		return null;
	}

	const passwordChecked = await bcrypt.compareSync(
		user?.password,
		foundUser?.password
	);

	if (!passwordChecked) {
		return null;
	}

	return removeMongoIdInObj(foundUser);
}

export async function favouriteToggle(userId, recipeId) {
	const user = await userModel.findById(userId);

	if (user) {
		const foundRecipes = user.favourites.find(
			(id) => id.toString() === recipeId
		);

		if (foundRecipes) {
			user.favourites.pull(recipeId);
			await user.save();
			revalidatePath(`/recipe/${recipeId}`);

			return {
				fav: user.favourites,
				message: "Successfully remove from favourite list.",
			};
		} else {
			user.favourites.push(recipeId);
			await user.save();

			revalidatePath(`/recipe/${recipeId}`);

			return {
				fav: user.favourites,
				message: "Successfully added to favourite list.",
			};
		}
	} else {
		return { message: "Please login first!" };
	}
}
