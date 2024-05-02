"use client";

import { usePathname } from "next/navigation";
import RecipeShare from "../share/RecipeShare";

export default function SocialShare({ title }) {
	const pathname = usePathname();

	// console.log(pathname);
	return (
		<div className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={24}
				height={24}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M8.7 10.7l6.6 -3.4" />
				<path d="M8.7 13.3l6.6 3.4" />
			</svg>
			<span>Share</span>
			<RecipeShare recipeName={title} recipeUrl={`/${pathname}`} />
		</div>
	);
}
