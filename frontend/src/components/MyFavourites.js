import { Link } from "react-router-dom";
import FaveCards from "./FaveCards";

export default function MyFavourites({
	user,
	login,
	setSelectedId,
	favourites,
	myGamesArray,
}) {
	//console.log("user:", user);

	/*Ettersom favoritt-listen kun er referanser til de faktiske spillene, må jeg bruke
.find for å "slå de sammen" til brukbare objekter */
	if (login === true) {
		const favGames = user.favourites.map((obj) => {
			const refId = obj._ref;
			const matchingObj = myGamesArray.find((o) => o._id === refId);
			return matchingObj;
		});
		console.log("favGames", favGames);
		return (
			<section className="favourites">
				<div className="header-title">
					<h2>MyFavourites</h2>
					<Link to="/favourites">Go to Favourites</Link>
				</div>
				{favGames.map((game, index) => (
					<FaveCards key={index} title={game.title} image={game.imageUrl} />
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
