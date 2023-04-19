import GameCard from "./GameCard";

export default function GameShop({ shopGames }) {
	return (
		<section className="shop">
			{shopGames.map((game, index) => (
				<GameCard key={index} title={game.name} image={game.background_image} />
			))}
		</section>
	);
}
