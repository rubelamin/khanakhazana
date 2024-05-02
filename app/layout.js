import Header from "@/components/Header";
import { dbConnection } from "@/db/mongoConnection";
import { Poppins } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";
import ToastProvider from "./providers/ToastProvider";

const poppin = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	style: ["normal", "italic"],
	display: "swap",
});

export const metadata = {
	title: "Khana Khazana",
	description: "Developed by Rubel Amin",
};

export default async function RootLayout({ children }) {
	await dbConnection();
	return (
		<html lang="en">
			<body className={poppin.className}>
				<ToastProvider>
					<AuthProvider>
						<Header />
						<main>{children}</main>
					</AuthProvider>
				</ToastProvider>
			</body>
		</html>
	);
}
