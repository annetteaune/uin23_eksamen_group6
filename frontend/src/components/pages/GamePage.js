import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function GamePage({ getGame, selectedGame  }) {
	const { slug } = useParams();

useEffect(() => {
	getGame();
}, []);

	return (
		<article>
			
				<h3>{selectedGame.name}</h3>
				<span>Release date:{selectedGame.released}</span>
				<img src={selectedGame.background_image} alt={selectedGame.name} />
				{selectedGame.description_raw}
			
		</article>
	);
}
