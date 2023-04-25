import { Link } from "react-router-dom";
import GameCard from "./GameCard";

export default function GameShop({ shopGames, setSelectedId }) {
	return (
		<section className="shop">
			<div className="header-title">
				<h2>Shop</h2>
				<Link to="/shop">Visit Shop</Link>
			</div>

			{shopGames.map((game, index) => (
				<GameCard
					key={index}
					title={game.name}
					image={game.background_image}
					slug={game.slug}
					id={game.id}
					setSelectedId={setSelectedId}
					genres={game.genres}
				/>
			))}
		</section>
	);
}
