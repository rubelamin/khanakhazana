import { headers } from "next/headers";
import Link from "next/link";

import "./globals.css";

export default async function NotFound() {
	const headersList = headers();
	const domain = headersList.get("host");
	// const data = await getSiteData(domain);
	return (
		<div className="flex mt-12 py-20, justify-center items-center">
			<h2>Not Found: {domain}</h2>
			<p>Could not find requested recipes</p>
			<p>
				View <Link href="/">all recipes</Link>
			</p>
		</div>
	);
}
