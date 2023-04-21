import GameShop from "./GameShop";
import MyGames from "./MyGames";
import MyFavourites from "./MyFavourites";

export default function Dashboard({ shopGames, setSelectedId, myGamesArray }) {


	return (
		<>
			<GameShop shopGames={shopGames} setSelectedId={setSelectedId} />
			<MyGames setSelectedId={setSelectedId} myGamesArray={myGamesArray} />
			<MyFavourites setSelectedId={setSelectedId} />
		</>
	);
}
