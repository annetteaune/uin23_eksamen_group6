export default function GameCard({ title, image }) {
	return (
		<article>
			<img src={image} alt={title}/>
			<h3>title: {title}</h3>
			<h4>Genre:  </h4>
		</article>
	);
}
