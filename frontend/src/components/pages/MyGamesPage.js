import Breadcrumbs from "../Breadcrumbs";
import GameCard from "../GameCard";

export default function MyGamesPage({ myGamesArray, setSelectedId }) {
	return (
		<>
		<Breadcrumbs />
			<h2 className="page-title">My games</h2>
			<section className="games-list">
				{myGamesArray.map((game, index) => (
					<GameCard
						key={index}
						title={game.title}
						image={game.imageUrl}
						slug={game.slug}
						id={game.apiid}
						setSelectedId={setSelectedId}
						genres={game.genre}
					/>
				))}
			</section>
		</>
	);
}
