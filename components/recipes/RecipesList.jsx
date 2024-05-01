import { getAllRecipes } from "@/db/queries";
import RecipeCard from "./RecipeCard";

export default async function RecipesList() {
	const allRecipes = await getAllRecipes();

	return (
		<div className="col-span-12 md:col-span-9">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
				{allRecipes?.length > 0
					? allRecipes?.map((recipe) => (
							<RecipeCard
								key={recipe.id}
								recipeDetails={recipe}
							/>
					  ))
					: "Nothing Found!"}
			</div>
		</div>
	);
}
