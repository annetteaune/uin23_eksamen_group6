import { Link } from "react-router-dom";

export default function MyFavourites({
	user,
	login,
	setSelectedId,
	favourites,
}) {
	console.log("user::", user);

	if (login === true) {
		return (
			<section className="favourites">
				<div className="header-title">
					<h2>MyFavourites</h2>
					<Link to="/favourites">Go to Favourites</Link>
				</div>
				{user.favourites.map((game, index) => (
					<p key={index}>{game._key}</p>
				))}
			</section>
		);
	} else {
		return (
			<section className="favourites">
				<div className="header-title">
					<h2>MyFavourites</h2>
					<Link to="/favourites">Go to Favourites</Link>
				</div>
				<span className="login-msg">Log in to see your favourites</span>
			</section>
		);
	}
}
