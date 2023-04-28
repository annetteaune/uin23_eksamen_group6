import { Link } from "react-router-dom";

export default function GameCard({
	title,
	image,
	slug,
	id,
	setSelectedId,
	genres,
	_id,
}) {
	const saveGameId = (event) => {
		setSelectedId(event.target.id);
	};

	/* filter for å bestemme om det er shop- eller mygame-kort som returneres.
		API-et returnerer en array for sjangere, mens sanity returnerer et objekt, så jeg bruker
		disse for å differensiere mellom dem. Kunne brukt state her isteden.
		Kilder:
		https://www.w3schools.com/jsref/jsref_isarray.asp
		https://www.w3schools.com/js/js_typeof.asp 
	*/
	if (Array.isArray(genres)) {
		return (
			<article className="game-card">
				{image !== null ?<img src={image} alt={title} /> : <img src="/placeholder.png" alt="pleaceholder image" />}
				
				<h3 className="card-title">{title}</h3>
				<div className="card-genre">
					{genres.map((gen) => (
						<h4 key={gen.id}>{gen.name}</h4>
					))}
				</div>
				<Link to={`/shop/${slug}`}>
					<button className="card-btn" id={id} onClick={saveGameId}>
						View
					</button>
				</Link>
			</article>
		);
	} else if (typeof genres === "object" && genres !== null) {
		return (
			<article className="game-card">
				<img src={image} alt={title} />
				<h3 className="card-title">{title}</h3>
				<div className="card-genre"><h4  key={genres.id}>
					{genres.title}
				</h4></div>
				

				<Link to={`/my-games/${slug.current}`}>
					<button className="card-btn" id={id} onClick={saveGameId}>
						View
					</button>
				</Link>
			</article>
		);
	}
}
