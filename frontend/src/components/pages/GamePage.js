import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function GamePage({ getGame, selectedGame }) {
	const { slug } = useParams();

	useEffect(() => {
		getGame();
	}, []);

	return (
		<>
			<article>
				<h3>{selectedGame.name}</h3>
				<h5>Release date:</h5>
				<span>{selectedGame.released}</span>
				<h5>Genres:</h5>
				{selectedGame.genres?.map((gen) => (
					<span>{gen.name} </span>
				))}
				<h5>Developers:</h5>
				{selectedGame.developers?.map((dev) => (
					<span>{dev.name} </span>
				))}
				<img src={selectedGame.background_image} alt={selectedGame.name} />
				<p>{selectedGame.description_raw}</p>
			</article>
			<section>
				<h4>Avaliable at:</h4>
				{selectedGame.stores?.map((store) => (
					<span>{store.store.name}</span>
				))}
			</section>
		</>
	);
}
