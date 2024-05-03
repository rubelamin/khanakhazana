import LoadingUI from "@/components/common/LoadingUI";
import Hero from "@/components/landing/Hero";
import SideBar from "@/components/landing/SideBar";
import RecipesList from "@/components/recipes/RecipesList";
import { Suspense } from "react";

export default function Home() {
	return (
		<>
			<Hero />
			<section className="container py-8">
				<div className="grid grid-cols-12 py-4">
					<SideBar />
					<Suspense fallback={<LoadingUI />}>
						<RecipesList />
					</Suspense>
				</div>
			</section>
		</>
	);
}
