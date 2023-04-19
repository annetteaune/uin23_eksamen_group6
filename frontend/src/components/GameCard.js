import { Link } from "react-router-dom";

export default function GameCard({ title, image, slug, id, setSelectedId}) {

	const saveGameId = (event) => {
		setSelectedId(event.target.id);
	};
	return (
		<article className="game-card">
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<Link to="/">
				<button>Buy</button>
			</Link>
			<Link to={slug}>
				<button id={id} onClick={saveGameId}>View</button>
			</Link>
		</article>
	);
}
