import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, writeClient } from "../../sanity/client";
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
	const [message, setMessage] = useState("");

	//legge til favoritt ved klikk om man er logget inn
	//kilde: https://github.com/toremake/UIN2023_sanity_create/blob/main/frontend/src/components/Show.js
	const gameReference = {
		_type: "reference",
		_ref: myGame._id,
		_key: myGame.title,
	};

	function addFave(event) {
		event.preventDefault();
		if (login === true) {
			writeClient
				.patch(user._id)
				.setIfMissing({ favourites: [] })
				.append("favourites", [gameReference])
				.commit({ autoGenerateKeys: true });
			setMessage(`${myGame.title} has been added to your favourites!`);
			//setTimeout for å gi sanity nok tid til å fullføre oppdatering av ny favoritt
			setTimeout(() => {
				getUserById();
			}, 1000);
		} else {
			setMessage("You must be logged in to add favourites.");
		}
	}

	const getUserById = async () => {
		const userData = await fetchUserById(userId);
		setUser(userData);

		console.log("userdata faves", userData.favourites);
	};

	useEffect(() => {
		getUserById();
	}, [userId]);

	//state for å sjekke om spillet er i favoritter
	const [isFaved, setIsFaved] = useState(false);
	 useEffect(() => {
			if (user.favourites && myGame._id) {
				const gameFaved = user.favourites.find(
					(fav) => fav._ref === myGame._id
				);
				if (gameFaved) {
					setIsFaved(true);
				} else{
					setIsFaved(false)
				}
			}
		}, [user, myGame])
	
		console.log("isfaved",isFaved)

	return (
		<>
			<article className="game-page">
				<h3>{myGame.title}</h3>
				<h4>Playtime:</h4>
				<span>{myGame.hoursplayed} hours</span>
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
				{isFaved === true ? null : <button onClick={addFave}>Add to favourites</button>}
				
				<span>{message}</span>
				<img src={selectedGame.background_image} alt={selectedGame.name} />
			</article>
		</>
	);
}
