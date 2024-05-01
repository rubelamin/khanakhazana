"use client";

import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LogOut() {
	const { auth, setAuth } = useAuth();

	const router = useRouter();

	const logout = () => {
		setAuth(null);
		router.push("/login");
	};

	return (
		<>
			{auth ? (
				<>
					<span className="mx-2">Hello, {auth?.firstName}</span>
					<span
						className="cursor-pointer bg-[#eb4a36] px-6 rounded-md text-white content-center py-2"
						onClick={logout}
					>
						Logout
					</span>
				</>
			) : (
				<Link href={"/login"}>
					<span className="bg-[#eb4a36] px-6 rounded-md text-white content-center py-2">
						Login
					</span>
				</Link>
			)}
		</>
	);
}
