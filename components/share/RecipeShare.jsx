import {
	FacebookIcon,
	FacebookShareButton,
	TwitterIcon,
	TwitterShareButton,
} from "next-share";

export default function RecipeShare({ recipeUrl, recipeName }) {
	return (
		<>
			<FacebookShareButton url={recipeUrl} quote={recipeName}>
				<FacebookIcon size={32} round />
			</FacebookShareButton>

			<TwitterShareButton url={recipeUrl} title={recipeName}>
				<TwitterIcon size={32} round />
			</TwitterShareButton>
		</>
	);
}
