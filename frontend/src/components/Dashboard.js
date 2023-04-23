import GameShop from "./GameShop";
import MyGames from "./MyGames";
import MyFavourites from "./MyFavourites";
import { useEffect } from "react";

export default function Dashboard({ shopGames, setSelectedId, myGamesArray, getGamesForShop, getMyGames, user, login }) {



useEffect(() => {
	getGamesForShop();
}, []);
useEffect(() => {
	getMyGames();
}, []);

	return (
		<>
			<GameShop shopGames={shopGames} setSelectedId={setSelectedId} />
			<MyGames
				setSelectedId={setSelectedId}
				myGamesArray={myGamesArray}
				login={login}
			/>
			<MyFavourites setSelectedId={setSelectedId} user={user} login={login} />
		</>
	);
}
