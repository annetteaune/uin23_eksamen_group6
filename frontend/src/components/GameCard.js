import { Link } from "react-router-dom";

export default function GameCard({
	title,
	image,
	slug,
	id,
	setSelectedId,
	genres,
}) {
	const saveGameId = (event) => {
		setSelectedId(event.target.id);
	};
	return (
		<article className="game-card">
			<img src={image} alt={title} />
			<h3>{title}</h3>
			{genres.map((gen) => (
				<h4>{gen.name}</h4>
			))}

			<Link to={slug}>
				<button id={id} onClick={saveGameId}>
					View Game
				</button>
			</Link>
		</article>
	);
}
