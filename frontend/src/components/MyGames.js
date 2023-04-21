import { Link } from "react-router-dom";
import GameCard from "./GameCard";

export default function MyGames({setSelectedId, myGamesArray}) {
	return (
		<>
			<h2>MyGames</h2>
			<Link to="/my-games">Go to My Games</Link>
			{myGamesArray.map((game, index) => (
				<GameCard
					key={index}
					title={game.title}
					
					slug={game.slug}
					id={game.apiid}
					setSelectedId={setSelectedId}
					genres={game.genre}
				/>
			))}
		</>
	);
}
