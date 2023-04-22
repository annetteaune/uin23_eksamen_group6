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

	/* filter for å bestemme om det er shop- eller mygame-kort som returneres.
		API-et returnerer en array for sjangere, mens sanity returnerer et objekt, så jeg bruker
		disse for å differensiere mellom dem. Kunne også brukt state her.
	*/
	if (Array.isArray(genres)) {
		return (
			<article className="game-card">
				<img src={image} alt={title} />
				<h3>{title}</h3>
				{genres.map((gen) => (
					<h4 key={gen.id}>{gen.name}</h4>
				))}

				<Link to={slug}>
					<button id={id} onClick={saveGameId}>
						View Game
					</button>
				</Link>
			</article>
		);
	} else if (typeof genres === "object" && genres !== null) {
		return (
			<article className="game-card">
				<img src={image} alt={title} />
				<h3>{title}</h3>
				<h4 key={genres.id}>{genres.title}</h4>

				<Link to={slug}>
					<button id={id} onClick={saveGameId}>
						Details
					</button>
				</Link>
			</article>
		);
	}
}
