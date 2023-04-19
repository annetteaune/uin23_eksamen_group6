import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./css/main.css";
import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard"
import ShopPage from "./components/pages/ShopPage";
import MyGamesPage from "./components/pages/MyGamesPage";
import FavouritesPage from "./components/pages/FavouritesPage";
import GamePage from "./components/pages/GamePage"

function App() {
	/** GAMESHOP ********************************************************************************/
	//state for å lagre spill til shop
	const [shopGames, setShopGames] = useState([]);

	//hente spill til shop fra api
	const getGamesForShop = async () => {
		const response = await fetch(
			`https://api.rawg.io/api/games?key=58b2b216076c4896b0055f655cd83168&dates=2023-01-10,2023-05-01&ordering=-released&stores=1&page=1&page_size=3`
		);

		const data = await response.json();
		console.log(data.results);
		setShopGames(data.results);
		console.log(shopGames);
	};
	useEffect(() => {
		getGamesForShop();
	}, []);

	/** GAMEPAGE **********************************************************************************/

	//state for å lagre id for å se detaljer om hvert enkelt spill
	const [selectedId, setSelectedId] = useState("");

	//state for å lagre info om hvert enkelt spill
	const [selectedGame, setSelectedGame] = useState([])

	//hente detaljer om hvert enkelt spill
	const getGame = async () => {
		const response = await fetch(
			`https://api.rawg.io/api/games/${selectedId}?key=58b2b216076c4896b0055f655cd83168`
		);

		const data = await response.json();
		console.log(data);
		setSelectedGame(data)
	};

	/******* */
	const getShops = async () => {
		const response = await fetch(
			`https://api.rawg.io/api/games/793647/stores?key=58b2b216076c4896b0055f655cd83168`
		);

		const data = await response.json();
		console.log(data)
	}
	useEffect(() => {
		getShops();
	}, []);

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						index
						element={
							<Dashboard shopGames={shopGames} setSelectedId={setSelectedId} />
						}
					/>
					<Route path="/shop" element={<ShopPage />} />
					<Route path="/my-games" element={<MyGamesPage />} />
					<Route path="/favourites" element={<FavouritesPage />} />
					<Route path=":slug" element={<GamePage getGame={getGame} selectedGame={selectedGame}/>} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
