import { Route, Routes, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import "./css/main.css";
import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import ShopPage from "./components/pages/ShopPage";
import MyGamesPage from "./components/pages/MyGamesPage";
import FavouritesPage from "./components/pages/FavouritesPage";
import GamePage from "./components/pages/GamePage";
import { fetchGamesCount, fetchMyGames } from "./sanity/gameServices";
import LoginPage from "./components/pages/LoginPage";
import Profile from "./components/pages/Profile";
import { fetchAllUsers } from "./sanity/userServices";
import Register from "./components/pages/Register";
import ShopGamePage from "./components/pages/ShopGamePage";

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
		setShopGames(data.results);
		//console.log("shopgames:", data.results);
	};

	/** GAMEPAGE **********************************************************************************/

	//state for å lagre id for å se detaljer om hvert enkelt spill
	const [selectedId, setSelectedId] = useState("");

	//state for å lagre info om hvert enkelt spill
	const [selectedGame, setSelectedGame] = useState([]);

	//State for å lagre tilgjengelige  butikker, har url men ikke navn
	const [stores, setStores] = useState([]);

	//state for å lagre en array av stores for hvert enkelt spill, inneholder ikke url
	//kombineres med stores i gamepage
	const [storeNoURL, setStoreNoURL] = useState([]);

	//hente detaljer om hvert enkelt spill
	const getGame = async () => {
		const response = await fetch(
			`https://api.rawg.io/api/games/${selectedId}?key=58b2b216076c4896b0055f655cd83168`
		);

		const data = await response.json();
		setSelectedGame(data);
		setStoreNoURL(data.stores);
	};

	//Hente butikker som selger spillene
	const getShops = async () => {
		const response = await fetch(
			`https://api.rawg.io/api/games/${selectedId}/stores?key=58b2b216076c4896b0055f655cd83168`
		);

		const data = await response.json();
		setStores(data.results);
	};

	/**MYGAMES************************************************************************************/

	//state for å lagre mygames
	const [myGamesArray, setMyGamesArray] = useState([]);

	//state for å lagre ett enkelt spill
	const [myGame, setMyGame] = useState([]);

	//hente mygames fra sanity
	const getMyGames = async () => {
		const data = await fetchMyGames();
		setMyGamesArray(data);
		console.log("mygames:", data);
	};

	/**LOGIN & USERPAGE**************************************************************************/
	//state for å lagre om en bruker er logget inn
	const [login, setLogin] = useState(false);
	//state for å lagre alle brukere
	const [users, setUsers] = useState([]);
	//state for å lagre innlogget bruker
	const [user, setUser] = useState({});
	//hente brukere fra sanity
	const getUsers = async () => {
		const data = await fetchAllUsers();
		setUsers(data);
	};
	useEffect(() => {
		getUsers();
		console.log(users);
	}, []);

	const [favourites, setFavourites] = useState([]);

	/** */


	
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout login={login} />}>
					<Route
						index
						element={
							<Dashboard
								shopGames={shopGames}
								setSelectedId={setSelectedId}
								myGamesArray={myGamesArray}
								getGamesForShop={getGamesForShop}
								getMyGames={getMyGames}
								user={user}
								login={login}
								favourites={favourites}
								setFavourites={setFavourites}
							/>
						}
					/>
					<Route
						path="/login"
						element={
							<LoginPage
								setLogin={setLogin}
								login={login}
								users={users}
								setUser={setUser}
							/>
						}
					/>
					<Route path="/register" element={<Register />} />
					<Route
						path="/profile"
						element={<Profile user={user} login={login} />}
					/>
					<Route
						path="/shop"
						element={<ShopPage setSelectedId={setSelectedId} />}
					/>

					<Route
						path="/my-games"
						element={
							<MyGamesPage
								myGamesArray={myGamesArray}
								setSelectedId={setSelectedId}
							/>
						}
					/>
					<Route
						path="/favourites"
						element={
							<FavouritesPage
								setSelectedId={setSelectedId}
								login={login}
								favourites={favourites}
							/>
						}
					/>
					<Route
						path="/my-games/:slug"
						element={
							<GamePage
								getGame={getGame}
								selectedGame={selectedGame}
								setMyGame={setMyGame}
								myGame={myGame}
								user={user}
								login={login}
								getUsers={getUsers}
								setUser={setUser}
								users={users}
								favourites={favourites}
								setFavourites={setFavourites}
								userId={user._id}
								getShops={getShops}
								stores={stores}
								storeNoURL={storeNoURL}
							/>
						}
					/>
					<Route
						path="/shop/:slug"
						element={
							<ShopGamePage
								getGame={getGame}
								selectedGame={selectedGame}
								getShops={getShops}
								stores={stores}
								storeNoURL={storeNoURL}
							/>
						}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
