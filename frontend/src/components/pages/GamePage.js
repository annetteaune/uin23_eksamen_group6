import { useCallback, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchSanityGame } from "../../sanity/gameServices";
import FavBtn from "../FavBtn";
import Breadcrumbs from "../Breadcrumbs";
import WordCloud from "../WordCloud";

export default function GamePage({
	getGame,
	selectedGame,
	setMyGame,
	myGame,
	user,
	login,
	setUser,
	userId,
	getShops,
	stores,
	storeNoURL,
}) {
	const { slug } = useParams();
	const location = useLocation();

	//hente enkelt spill fra sanity
	const getMyGame = useCallback(
		async (slug) => {
			const data = await fetchSanityGame(slug);
			setMyGame(data[0]);
		},
		[setMyGame]
	);

	//hente api-info, oppdatere om slug endrer seg ifht search
	useEffect(() => {
		getGame();
		getShops();
	}, [slug, getGame, getShops]);
	//console.log("loopsjekk:",selectedGame)

	//hente sanity-info, men bare om man ikke befinner seg i /shop
	useEffect(() => {
		if (location.pathname.startsWith("/my-games")) {
			getMyGame(slug);
		}
	}, [slug, getMyGame, location.pathname]);

	/* Kombinere arrays med info om stores med og uten url, slik at de kan mappes gjennom  
		Kilde: https://stackoverflow.com/questions/46849286/merge-two-array-of-objects-based-on-a-key
		Resultatene i begge svar-arrayer returneres i APIet i samme rekkefølge hver gang, så velger 
		å benytte det øverste svaret i linken. 
		*/
	let completeStore = storeNoURL?.map((item, i) =>
		Object.assign({}, item, stores[i])
	);

	//console.log("tags", selectedGame.tags);

	return (
		<>
			<Breadcrumbs slug={slug} />
			<article className="game-page">
				{login === true && location.pathname.startsWith("/my-games") ? (
					<FavBtn
						user={user}
						myGame={myGame}
						userId={userId}
						login={login}
						setUser={setUser}
					/>
				) : null}

				<h3 className="game-page-title">{selectedGame?.name}</h3>
				<section className="info-area list-bckg">
					{location.pathname.startsWith("/my-games") ? (
						<p>
							Playtime: <span>{myGame?.hoursplayed} hours</span>
						</p>
					) : null}

					<p>
						Release date: <span>{selectedGame?.released}</span>
					</p>
					<p>
						Genres:
						{selectedGame.genres?.map((gen) => (
							<span key={gen.id}> {gen.name} </span>
						))}{" "}
					</p>
					<p>
						Rating: <span>{selectedGame?.metacritic}</span>
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
						{selectedGame.platforms?.map((plat, index) => (
							<span key={index}>{plat.platform.name}</span>
						))}
					</div>
					<div>
						<p>Avaliable to purchase from:</p>
						{completeStore?.map((store) => (
							<a href={store.url} key={store.id} target="blank">
								{store.store.name}
							</a>
						))}
					</div>
				</section>
					{selectedGame.background_image !== null ? (<section className="img-area">
					<img src={selectedGame?.background_image} alt={selectedGame.name} />
					<img
						src={selectedGame?.background_image_additional}
						alt={selectedGame?.name}
					/></section>) : null}
				
				
				<section className="plot-area list-bckg">
					<p>{selectedGame?.description_raw}</p>
				</section>
			</article>
		</>
	);
}
