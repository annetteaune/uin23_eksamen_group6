import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout({ login }) {
	return (
		<>
		<a className="skip" href="#main" >
			Skip to main content
		</a>
			<header>
				<Navbar login={login} />
			</header>
			<main id="main">
				<Outlet />
			</main>
			<footer>
				<a href="https://rawg.io/" target="blank">
					API and additional images by RAWG
				</a>
			</footer>
		</>
	);
}
