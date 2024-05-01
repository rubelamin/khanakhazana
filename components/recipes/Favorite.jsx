"use client";

import { favouriteUpdated } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Favorite({ recipeId }) {
	const [res, setRes] = useState("");
	const [isFavourite, setIsFavourite] = useState(null);

	const { auth, setAuth } = useAuth();
	const router = useRouter();

	useEffect(() => {
		const isFav = auth?.favourites.includes(recipeId);
		console.log(isFav);
		if (isFav) {
			setIsFavourite(true);
		}
	}, [auth?.favourites, recipeId]);

	async function handleFavorite() {
		if (!auth) {
			return router.push("/login");
		}

		setRes("");
		try {
			const msg = await favouriteUpdated(auth?.id, recipeId);
			setRes(msg);
			setIsFavourite(!isFavourite);
			setAuth({
				...auth,
				favourites: msg.fav,
			});

			toast.success(`${msg.message}`, {
				position: "top-right",
			});
		} catch (error) {
			setRes(error.message);
		}
	}

	console.log(res);

	return (
		<div
			className={`flex gap-2 ${
				isFavourite ? "text-[#eb4a36]" : "text-gray-600"
			} cursor-pointer hover:text-[#eb4a36]`}
		>
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
				className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				{isFavourite ? (
					<path
						d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
						fill="currentColor"
					/>
				) : (
					<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
				)}
			</svg>
			<span onClick={handleFavorite}>Favourite</span>
		</div>
	);
}
