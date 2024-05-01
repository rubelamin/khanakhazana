import { getAllRecipesByCat } from "@/db/queries";
import RecipeCard from "./RecipeCard";

export default async function CategoryList({ cat }) {
	let allRecipes = await getAllRecipesByCat(cat);

	return (
		<section class="container py-8">
			<div>
				<h3 class="font-semibold text-xl">Appetizers & Snacks</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
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
		</section>
	);
}
