import { Link } from "react-router-dom";
import GameCard from "./GameCard";

export default function MyGames({ setSelectedId, myGamesArray, login }) {
	//ny games-array for å kun hente ut tre stk
	const dashGames = myGamesArray.slice(0, 3);

	return (
		<section className="my-games">
			<div className="header-title">
				<h2>My Games</h2>
				<Link to="/my-games">See all games</Link>
			</div>
			{dashGames.map((game, index) => (
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
	);
}
