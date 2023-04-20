import GameShop from "./GameShop";
import MyGames from "./MyGames";
import MyFavourites from "./MyFavourites";

export default function Dashboard({ shopGames, setSelectedId }) {


	return (
		<>
			<GameShop shopGames={shopGames} setSelectedId={setSelectedId} />
			<MyGames setSelectedId={setSelectedId} />
			<MyFavourites setSelectedId={setSelectedId} />
		</>
	);
}
