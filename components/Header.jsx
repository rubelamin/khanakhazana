import Image from "next/image";
import Link from "next/link";

import lwsLogo from "../public/assets/images/logo.png";
import LogOut from "./auth/LogOut";

export default function Header() {
	return (
		<nav>
			<div className="container flex justify-between py-6">
				<Link href="/">
					<Image
						src={lwsLogo}
						alt="Khana Khazana"
						className="object-cover h-[53px]"
					/>
				</Link>
				<ul className="flex gap-4 text-sm text-gray-500">
					<li className="py-2 active">
						<Link href="/">Home</Link>
					</li>
					<li className="py-2">
						<Link href="/">Recipe</Link>
					</li>
					<li className="py-2">
						<Link href="/about">About us</Link>
					</li>
					<li className="py-2 ">
						<LogOut />
					</li>
				</ul>
			</div>
		</nav>
	);
}
