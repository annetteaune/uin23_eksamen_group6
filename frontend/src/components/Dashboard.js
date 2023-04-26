import GameShop from "./GameShop";
import MyGames from "./MyGames";
import MyFavourites from "./MyFavourites";
import { useEffect } from "react";

export default function Dashboard({
	setFavourites,
	shopGames,
	setSelectedId,
	myGamesArray,
	getGamesForShop,
	getMyGames,
	user,
	login,
	favourites,
	
	
}) {
	useEffect(() => {
		getGamesForShop();
	}, []);
	useEffect(() => {
		getMyGames();
	}, []);

	return (
		<div className="grid-container">
			<div className="dash-container">
				<GameShop shopGames={shopGames} setSelectedId={setSelectedId} />
				<MyGames
					setSelectedId={setSelectedId}
					myGamesArray={myGamesArray}
					login={login}
					
				/>
			</div>
			<MyFavourites
				setSelectedId={setSelectedId}
				user={user}
				login={login}
				setFavourites={setFavourites}
				favourites={favourites}
				myGamesArray={myGamesArray}
			/>
		</div>
	);
}
