import Dashboard from "./Dashboard";

export default function Layout({ shopGames }) {
	return (
		<>
			<header>
				<h1>LOGO</h1>{" "}
				<nav>
					<ul>
						<li>nav</li>
						<li>nav</li>
						<li>nav</li>
						<li>nav</li>
					</ul>
				</nav>
			</header>

			<main>
				<Dashboard shopGames={shopGames} />
			</main>
			<footer>footer w/link to api</footer>
		</>
	);
}
