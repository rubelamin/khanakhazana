"use client";

import { loginUser } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingUI from "../common/LoadingUI";

export default function LoginForm() {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [beforeRedirect, setBeforeRedirect] = useState(false);

	const { setAuth } = useAuth();

	const router = useRouter();

	async function onSubmit(event) {
		event.preventDefault();

		setLoading(true);
		setBeforeRedirect(true);

		try {
			const formData = new FormData(event.currentTarget);
			const found = await loginUser(formData);

			if (found) {
				setAuth(found);

				router.push("/");
			} else {
				setError("Authentication Error!");
			}
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		return () => setBeforeRedirect(false);
	}, []);

	return (
		<>
			{!loading && beforeRedirect && (
				<div className="flex flex-col justify-center items-center py-6 px-3">
					<LoadingUI />
					<div>Authenticating....</div>
				</div>
			)}
			{loading ? (
				<div className="flex flex-col justify-center items-center py-6 px-3">
					<LoadingUI />
					<div>Authenticating....</div>
				</div>
			) : (
				<form className="login-form" onSubmit={onSubmit}>
					<div className="justify-center items-center text-[13px] text-red-600">
						{error}
					</div>
					<div>
						<label htmlFor="email">Email Address</label>
						<input type="email" name="email" id="email" />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" />
					</div>
					<button
						type="submit"
						className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
					>
						Login
					</button>
				</form>
			)}
		</>
	);
}
