import Layout from "./components/Layout";
import "./css/main.css";
import { useEffect, useState } from "react";

function App() {
	//state for å lagre spill til shop
	const [shopGames, setShopGames] = useState([]);

	//hente spill til shop fra api
	const getGamesForShop = async () => {
		const response = await fetch(
			`https://api.rawg.io/api/games?key=58b2b216076c4896b0055f655cd83168&ordering=released&stores=1&page=1&page_size=3`
		);

		const data = await response.json();
		console.log(data.results);
		setShopGames(data.results);
		console.log(shopGames);
	};
	useEffect(() => {
		getGamesForShop();
	}, []);
	return <Layout shopGames={shopGames} />;
}

export default App;
