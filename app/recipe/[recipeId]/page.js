import RecipeDetails from "@/components/recipes/RecipeDetails";
import { getRecipeById } from "@/db/queries";

export async function generateMetadata(props, parent) {
    const params = await props.params;
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

export default async function Details(props) {
    const params = await props.params;

    const {
        recipeId
    } = params;

    const recipe = await getRecipeById(recipeId);
    return <RecipeDetails details={recipe} />;
}
