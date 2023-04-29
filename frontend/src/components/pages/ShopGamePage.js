import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
import WordCloud from "../WordCloud";

export default function GamePage({
	getGame,
	selectedGame,
	getShops,
	stores,
	storeNoURL,
}) {
	const { slug } = useParams();

	useEffect(() => {
		getGame();
	}, []);

	useEffect(() => {
		getShops();
	}, []);

	/* Kombinere arrays med info om stores med og uten url, slik at de kan mappes gjennom  
		Kilde: https://stackoverflow.com/questions/46849286/merge-two-array-of-objects-based-on-a-key
		Resultatene i begge svar-arrayer returneres i APIet i samme rekkefølge hver gang, så velger 
		å benytte det øverste svaret i linken. 
		*/
	let completeStore = storeNoURL?.map((item, i) =>
		Object.assign({}, item, stores[i])
	);

	console.log(selectedGame);
	return (
		<>
			<Breadcrumbs slug={slug} />
			<article className="game-page">
				<h3 className="game-page-title">{selectedGame.name}</h3>
				<section className="info-area list-bckg">
					<p>
						Release date:
						{selectedGame.released !== null ? (
							<span>{selectedGame.released}</span>
						) : (
							<span>N/A</span>
						)}
					</p>
					<p>
						Genres:
						{selectedGame.genres?.map((gen) => (
							<span key={gen.id}> {gen.name} </span>
						))}{" "}
					</p>
					<p>
						Rating:
						{selectedGame.metacritic !== null ? (
							<span>{selectedGame.metacritic}</span>
						) : (
							<span>N/A</span>
						)}
					</p>
					<p>
						Developers:
						{selectedGame.developers?.map((dev) => (
							<span key={dev.id}> {dev.name} </span>
						))}
					</p>
					<p>
						Published by:
						{selectedGame.publishers?.map((pub) => (
							<span key={pub.id}> {pub.name} </span>
						))}{" "}
					</p>
				</section>
				<WordCloud selectedGame={selectedGame.tags} />
				<section className="platform-area list-bckg">
					<div>
						<p>Avaliable platforms:</p>
						{selectedGame.platforms?.map((plat) => (
							<span key={plat.id}>{plat.platform.name}</span>
						))}
					</div>
					<div>
						<p>Avaliable to purchase from:</p>
						{completeStore.map((store) => (
							<a href={store.url} key={store.id} target="blank">
								{store.store.name}
							</a>
						))}
					</div>
				</section>

				<section className="img-area">
					<img src={selectedGame.background_image} alt={selectedGame.name} />
					<img
						src={selectedGame.background_image_additional}
						alt={selectedGame.name}
					/>
				</section>
				<section className="plot-area list-bckg">
					<p>{selectedGame.description_raw}</p>
				</section>
			</article>
		</>
	);
}
