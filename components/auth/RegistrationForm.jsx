"use client";

import { useEffect, useState } from "react";
import LoadingUI from "../common/LoadingUI";

import { registerUser } from "@/app/actions";

export default function RegistrationForm() {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	async function onSubmit(event) {
		event.preventDefault();

		setLoading(true);

		try {
			const formData = new FormData(event.currentTarget);

			const res = await registerUser(formData);

			if (res) {
				setLoading(false);
			}
		} catch (error) {
			setError(error.message);
		}
	}

	useEffect(() => {
		return () => setLoading(false);
	}, []);

	return (
		<>
			{loading ? (
				<div className="flex flex-col justify-center items-center py-6 px-3">
					<LoadingUI />
					<div>Registering....</div>
				</div>
			) : (
				<form className="login-form" onSubmit={onSubmit}>
					<div>
						<label htmlFor="firstName">First Name</label>
						<input type="text" name="firstName" id="firstName" />
					</div>
					<div>
						<label htmlFor="lastName">Last Name</label>
						<input type="text" name="lastName" id="lastName" />
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
						Create Account
					</button>
				</form>
			)}
		</>
	);
}
