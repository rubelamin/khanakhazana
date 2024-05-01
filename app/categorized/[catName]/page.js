import CategoryList from "@/components/recipes/CategoryList";

export async function generateMetadata({ params }, parent) {
	const decodeCat = decodeURIComponent(params?.catName);

	return {
		title: decodeCat,
		description: "Khana Khazana Category",
	};
}

export default function CategoryPage({ params }) {
	const decodeCat = decodeURIComponent(params?.catName);
	return <CategoryList cat={decodeCat} />;
}
