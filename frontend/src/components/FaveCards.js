import { Link } from "react-router-dom";

export default function FaveCards({ title, image, setSelectedId, slug, id }) {
	const saveGameId = (event) => {
		setSelectedId(event.target.id);
	};
	return (
		<article className="fave-card">
			<img src={image} alt={title} />
			<Link to={`/my-games/${slug.current}`}>
				<button className="fave-card-btn" id={id} onClick={saveGameId}>
					{title}
				</button>
				<i className="fa-solid fa-chevron-right"></i>
			</Link>
		</article>
	);
}
