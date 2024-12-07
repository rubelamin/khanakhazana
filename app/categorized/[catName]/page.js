import LoadingUI from "@/components/common/LoadingUI";
import CategoryList from "@/components/recipes/CategoryList";
import { Suspense } from "react";

export async function generateMetadata(props, parent) {
    const params = await props.params;
    const decodeCat = decodeURIComponent(params?.catName);

    return {
		title: decodeCat,
		description: "Khana Khazana Category",
	};
}

export default async function CategoryPage(props) {
    const params = await props.params;
    const decodeCat = decodeURIComponent(params?.catName);
    return (
		<Suspense fallback={<LoadingUI />}>
			<CategoryList cat={decodeCat} />
		</Suspense>
	);
}
