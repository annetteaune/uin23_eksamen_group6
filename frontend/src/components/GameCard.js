export default function GameCard({ title, image }) {
	return (
		<article className="game-card"> 
			<img src={image} alt={title}/>
			<h3>{title}</h3>
		</article>
	);
}
