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
						<Link to="/">
							<li>Home</li>
						</Link>
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
								<li>
									<i className="fa-regular fa-user"></i>
								</li>
							</Link>
						) : (
							<Link to="/profile">
								<li>
									<i className="fa-solid fa-user"></i>
								</li>
							</Link>
						)}
					</ul>
				</nav>
			</header>

			<main>
				<Outlet shopGames={shopGames} />
			</main>
			<footer>
				API and additional images by <a href="https://rawg.io/" target="blank">RAWG</a>
			</footer>
		</>
	);
}
