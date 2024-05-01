import { getPlaiceholder } from "plaiceholder";

export async function getBlurImage(src) {
	try {
		const buffer = await fetch(src).then(async (res) =>
			Buffer.from(await res.arrayBuffer())
		);

		const data = await getPlaiceholder(buffer);

		return data;
	} catch (error) {
		console.log(error);
	}
}
