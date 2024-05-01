import { getAllRecipes } from "@/db/queries";
import { getCategoryList } from "@/utils/utilities";
import Link from "next/link";

export default async function SideBar() {
	const recipeList = await getAllRecipes();
	const catList = await getCategoryList(recipeList);

	return (
		<div className="col-span-12 md:col-span-3">
			<h3 className="font-bold text-xl">Recipes</h3>
			<ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
				{catList?.length &&
					catList.map((cat, i) => (
						<li key={cat + i}>
							<Link href={`/categorized/${cat}`}>{cat}</Link>
						</li>
					))}
			</ul>
		</div>
	);
}
