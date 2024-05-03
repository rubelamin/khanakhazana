import LoadingUI from "@/components/common/LoadingUI";
import RecipesList from "@/components/recipes/RecipesList";
import { Suspense } from "react";

export default function AllRecipes() {
	return (
		<Suspense fallback={<LoadingUI />}>
			<RecipesList />
		</Suspense>
	);
}
