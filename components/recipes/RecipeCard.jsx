import { getBlurImage } from "@/utils/blur-generate";
import Image from "next/image";
import Link from "next/link";

export default async function RecipeCard({ recipeDetails }) {
	const { base64 } = await getBlurImage(recipeDetails?.thumbnail);
	return (
		<Link href={`/recipe/${recipeDetails?.id}`}>
			<div className="card">
				<Image
					src={recipeDetails?.thumbnail}
					className="rounded-md"
					alt="Recepies"
					width={300}
					height={160}
					placeholder="blur"
					blurDataURL={base64}
					quality={100}
				/>

				<h4 className="my-2">{recipeDetails?.name}</h4>

				<div className="py-2 flex justify-between text-xs text-gray-500">
					<span>⭐️ {recipeDetails?.rating}.0</span>
					<span>By: {recipeDetails?.author}</span>
				</div>
			</div>
		</Link>
	);
}
