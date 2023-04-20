import { useEffect, useState } from "react";
import GameCard from "../GameCard";

export default function ShopPage({setSelectedId}) {
	//state for å lagre nye spill
	const [newGames, setNewGames] = useState([]);
	//hente spill til shop fra api
	const getNewGames = async () => {
		const response = await fetch(
			`https://api.rawg.io/api/games?key=58b2b216076c4896b0055f655cd83168&dates=2023-01-10,2023-05-01&ordering=-released&stores=1&page=1&page_size=6`
		);

		const data = await response.json();
		setNewGames(data.results);
	};
	useEffect(() => {
		getNewGames();
	}, []);

	//state for å lagre populære spill
	const [trendingGames, setTrendingGames] = useState([]);
	//hente spill til shop fra api
	const getTrendingGames = async () => {
		const response = await fetch(
			`https://api.rawg.io/api/games?key=58b2b216076c4896b0055f655cd83168&dates=2023-01-01,2023-12-31&ordering=-added&stores=1&page=1&page_size=6`
		);

		const data = await response.json();
		setTrendingGames(data.results);
	};
	useEffect(() => {
		getTrendingGames();
	}, []);

	return (
		<>
			<h2>Shop</h2>
			<article>
				<h3>New Games</h3>
				{newGames.map((game, index) => (
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
			</article>
			<article>
				<h3>Trending games</h3>
				{trendingGames.map((game, index) => (
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
			</article>
		</>
	);
}
