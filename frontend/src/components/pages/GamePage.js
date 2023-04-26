import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { writeClient } from "../../sanity/client";
import { fetchSanityGame } from "../../sanity/gameServices";
import { fetchUserById } from "../../sanity/userServices";

export default function GamePage({
	getGame,
	selectedGame,
	setMyGame,
	myGame,
	user,
	users,
	login,
	setUser,
	userId,
	favourite,
	setFavourite,
}) {
	const { slug } = useParams();

	//hente enkelt spill fra sanity
	const getMyGame = async (slug) => {
		const data = await fetchSanityGame(slug);
		setMyGame(data[0]);
		console.log("mygame:", data[0]);
	};

	//hente api-info
	useEffect(() => {
		getGame();
	}, []);

	//hente sanity-info
	useEffect(() => {
		getMyGame(slug);
	}, [slug]);

	//state for melding om favoritter
	const [message, setMessage] = useState("Click to toggle");

	//legge til favoritt ved klikk, om man er logget inn
	//kilde: https://github.com/toremake/UIN2023_sanity_create/blob/main/frontend/src/components/Show.js
	const gameReference = {
		_type: "reference",
		_ref: myGame._id,
		_key: myGame.title,
	};

	//oppdatere sanity
	//kilde: https://webtricks.blog/oppdatere-et-array-felt-i-en-innholdstype-i-sanity-fra-et-react-grensesnitt/
	function addFave(event) {
		event.preventDefault();
		if (login === true) {
			writeClient
				.patch(user._id)
				.setIfMissing({ favourites: [] })
				.append("favourites", [gameReference])
				.commit({ autoGenerateKeys: true });

			//setTimeout for å gi sanity nok tid til å fullføre oppdatering av ny favoritt
			setTimeout(() => {
				setMessage(`${myGame.title} has been added to your favourites!`);
				getUserById();
			}, 1000);
		} else {
			setMessage("You must be logged in to add favourites.");
		}
	}
	function removeFave(event) {
		event.preventDefault();
		if (login === true) {
			const updatedFavourites = user.favourites.filter(
				(fav) => fav._ref !== myGame._id
			);
			writeClient
				.patch(user._id)
				.set({ favourites: updatedFavourites })
				.commit({ autoGenerateKeys: true });
			//setTimeout for å gi sanity nok tid til å fullføre oppdateringen
			setTimeout(() => {
				setMessage(`${myGame.title} has been removed from your favourites!`);
				getUserById();
			}, 1000);
		} else {
			setMessage("You must be logged in to remove favourites.");
		}
	}
	const getUserById = async () => {
		const userData = await fetchUserById(userId);
		setUser(userData);
	};

	useEffect(() => {
		getUserById();
	}, [userId]);

	//state for å sjekke om spillet er i favoritter
	const [isFaved, setIsFaved] = useState(false);
	useEffect(() => {
		if (user.favourites && myGame._id) {
			const gameFaved = user.favourites.find((fav) => fav._ref === myGame._id);
			if (gameFaved) {
				setIsFaved(true);
			} else {
				setIsFaved(false);
			}
		}
	}, [user, myGame]);

	console.log(selectedGame);

	return (
		<>
			<article className="game-page">
				<section className="fav-button-area">
					{isFaved === true ? (
						<button className="heart-btn" onClick={removeFave}>
							<img src="/fav.png" alt="red heart icon" />
						</button>
					) : (
						<button className="heart-btn" onClick={addFave}>
							<img src="/nofav.png" alt="empty heart icon" />
						</button>
					)}
					<span className="fav-msg">{message}</span>
				</section>

				<h3 className="game-page-title">{myGame.title}</h3>
				<section className="info-area">
					<p>
						Playtime: <span>{myGame.hoursplayed} hours</span>
					</p>

					<p>
						Release date: <span>{selectedGame.released}</span>
					</p>
					<p>
						Genres:
						{selectedGame.genres?.map((gen) => (
							<span key={gen.id}> {gen.name} </span>
						))}{" "}
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

				<section className="img-area">
					<img src={selectedGame.background_image} alt={selectedGame.name} />
					<img
						src={selectedGame.background_image_additional}
						alt={selectedGame.name}
					/>
				</section>
			</article>
		</>
	);
}
