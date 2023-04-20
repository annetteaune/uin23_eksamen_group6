import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function GamePage({ getGame, selectedGame, getShops, stores, storeNoURL }) {
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


	return (
		<>
			<article>
				<h3>{selectedGame.name}</h3>
				<h4>Release date: </h4>
				<span>{selectedGame.released}</span>
				<h4>Genres:</h4>
				{selectedGame.genres?.map((gen) => (
					<span key={gen.id}>{gen.name} </span>
				))}
				<h4>Developers:</h4>
				{selectedGame.developers?.map((dev) => (
					<span key={dev.id}>{dev.name} </span>
				))}
				<h4>Published by:</h4>
				{selectedGame.publishers?.map((pub) => (
					<span key={pub.id}>{pub.name} </span>
				))}
				<img src={selectedGame.background_image} alt={selectedGame.name} />
				<p>{selectedGame.description_raw}</p>
			</article>
			<section>
				<h4>Avaliable for purchase from:</h4>
				{completeStore.map((store) => (
					<a href={store.url} key={store.id} target="blank">
						{store.store.name}
					</a>
				))}
			</section>
		</>
	);
}
