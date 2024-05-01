import Hero from "@/components/landing/Hero";
import SideBar from "@/components/landing/SideBar";
import RecipesList from "@/components/recipes/RecipesList";

export default function Home() {
	return (
		<>
			<Hero />
			<section className="container py-8">
				<div className="grid grid-cols-12 py-4">
					<SideBar />
					<RecipesList />
				</div>
			</section>
		</>
	);
}
