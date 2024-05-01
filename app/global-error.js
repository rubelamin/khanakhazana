"use client";

import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppin = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	style: ["normal", "italic"],
	display: "swap",
});

export const metadata = {
	title: "Error - Khana Khazana",
	description: "Developed by LWS",
};

export default function GlobalError({ error, reset }) {
	return (
		<html lang="en">
			<body className={poppin.className}>
				<Header />
				<main>
					<h2>Something went wrong!</h2>
					<button onClick={() => reset()}>Try again</button>
				</main>
			</body>
		</html>
	);
}
