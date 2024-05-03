"use client";

import Link from "next/link";

export default function RecipeError({ error, reset }) {
	return (
		<div className="flex flex-col justify-center items-center py-12">
			<h1>Recipe Error!</h1>
			<p>{error?.message}</p>
			<div className="flex gap-3">
				<button
					className="bg-teal-600 px-10 py-2 mt-3 rounded"
					onClick={() => reset()}
				>
					Try Again!
				</button>
				<Link className="bg-sky-600 px-10 py-2 mt-3 rounded" href={"/"}>
					Go Home!
				</Link>
			</div>
		</div>
	);
}
