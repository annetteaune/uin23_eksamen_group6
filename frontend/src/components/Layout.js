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
						<li>
							<Link to="/">Home</Link>
						</li>

						<li>
							<Link to="/shop">Shop</Link>
						</li>

						<li>
							{" "}
							<Link to="/my-games">My Games</Link>
						</li>

						<li>
							<Link to="/favourites">Favourites</Link>
						</li>

						{login === false ? (
							<li>
								<Link to="/login">Log in</Link>
							</li>
						) : (
							<li>
								<Link to="/profile">Account</Link>
							</li>
						)}
					</ul>
				</nav>
			</header>

			<main>
				<Outlet shopGames={shopGames} />
			</main>
			<footer>
				<a href="https://rawg.io/" target="blank">
					API and additional images by RAWG
				</a>
				<a href="https://www.vecteezy.com/vector-art/2915042-small-squares-are-connected-to-each-other-to-form-a-color-bar-simple-pattern-design-template">
					Background by Vecteezy
				</a>
			</footer>
		</>
	);
}
