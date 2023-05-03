import { Link } from "react-router-dom";

export default function FaveCards({ title, image, setSelectedId, slug, id }) {
	const saveGameId = (id) => {
		setSelectedId(id);
	};
	return (
		<article className="fave-card">
			<Link
				to={`/my-games/${slug.current}`}
				id={id}
				onClick={() => saveGameId(id)}
			>
				<img src={image} alt={title} />
				<h3>{title}</h3>
				<i className="fa-solid fa-chevron-right"></i>
			</Link>
		</article>
	);
}
