import RecipeDetails from "@/components/recipes/RecipeDetails";
import { getRecipeById } from "@/db/queries";

export async function generateMetadata({ params, searchParams }, parent) {
	const id = params?.recipeId;

	const recipe = await getRecipeById(id);

	return {
		title: recipe?.name,
		description: recipe?.description,
		openGraph: {
			images: [recipe?.thumbnail],
		},
	};
}

export default async function Details({ params: { recipeId }, searchParams }) {
	const recipe = await getRecipeById(recipeId);
	return <RecipeDetails details={recipe} />;
}
