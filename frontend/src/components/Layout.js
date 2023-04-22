import { Link, Outlet } from "react-router-dom";

export default function Layout({ shopGames, login }) {
	return (
		<>
			<header>
				<Link to="/">
					<h1>LOGO</h1>
				</Link>
				<nav>
					<ul>
						<Link to="/shop">
							<li>Shop</li>
						</Link>
						<Link to="/my-games">
							<li>My Games</li>
						</Link>
						<Link to="/favourites">
							<li>Favourites</li>
						</Link>
						{login === false ? (
							<Link to="/login">
								<li>Login</li>
							</Link>
						) : (
							<Link to="/profile">
								<li>Profile</li>
							</Link>
						)}
					</ul>
				</nav>
			</header>

			<main>
				<Outlet shopGames={shopGames} />
			</main>
			<footer>footer w/link to api & all photo credit to api</footer>
		</>
	);
}
