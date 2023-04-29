import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout({ shopGames, login }) {
	return (
		<>
			<header>
				<Navbar login={login} />
			</header>
			<main>
				<Outlet shopGames={shopGames} />
			</main>
			<footer>
				<a href="https://rawg.io/" target="blank">
					API and additional images by RAWG
				</a>
			</footer>
		</>
	);
}
