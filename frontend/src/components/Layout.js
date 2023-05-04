import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SearchResults from "./SearchResults";

export default function Layout({ login, searchResult, setSearchResult, setSelectedId }) {
	return (
		<>
			<a className="skip" href="#main">
				Skip to main content
			</a>
			<header>
				<Navbar
					login={login}
					searchResult={searchResult}
					setSearchResult={setSearchResult}
					setSelectedId={setSelectedId}
				/>
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
