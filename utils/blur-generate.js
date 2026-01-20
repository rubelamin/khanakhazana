import { getPlaiceholder } from "plaiceholder";

export async function getBlurImage(src) {
  try {
    const res = await fetch(src);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.statusText}`);
    }
    const buffer = Buffer.from(await res.arrayBuffer());

    const data = await getPlaiceholder(buffer);

    return data;
  } catch (error) {
    console.log(error);
    return {
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
    };
  }
}
