import { Link } from "react-router-dom";
import GameCard from "../GameCard";

export default function FavouritesPage({ setSelectedId, login, favourites }) {
	if (login === true) {
		return (
			<>
				<h2 className="page-title">Favourites</h2>
				<section className="games-list">
					{favourites.map((game, index) => (
						<GameCard
							key={index}
							title={game.title}
							image={game.imageUrl}
							slug={game.slug}
							id={game.apiid}
							setSelectedId={setSelectedId}
							genres={game.genre}
							_id={game._id}
						/>
					))}
				</section>
			</>
		);
	} else {
		console.log("login", login);
		return (
			<>
				<h2>Favourites</h2>
				<p>You must be logged in to see your favourites.</p>
				<Link to="/login">
					<button>To Login</button>
				</Link>
			</>
		);
	}
}
