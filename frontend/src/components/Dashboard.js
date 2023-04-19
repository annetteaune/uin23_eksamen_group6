import GameShop from "./GameShop";
import MyGames from "./MyGames";
import MyFavourites from "./MyFavourites";

export default function Dashboard({ shopGames }) {
	return (
		<>
			<GameShop shopGames={shopGames} />
			<MyGames />
			<MyFavourites />
		</>
	);
}
