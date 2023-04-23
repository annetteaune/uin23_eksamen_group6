import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { writeClient } from "../../sanity/client";
import { fetchSanityGame } from "../../sanity/gameServices";

export default function GamePage({
	getGame,
	selectedGame,
	setMyGame,
	myGame,
	user,
	login
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
const [message, setMessage] = useState("")

//legge til favoritt ved klikk om man er logget inn
//kilder i vedlagt dokument
	const gameReference = {
		_type: "reference",
		_ref: myGame._id,
		_key: myGame.title,
	
	};
	
	function addFave(t, a) {
		if (login === true) {
	writeClient
			.patch(user._id)
			.setIfMissing({ favourites: [] })
			.append("favourites", [gameReference], [{ title: t, apiid: a  }])
			.commit({ autoGenerateKeys: true });
		setMessage(`${myGame.title} has been added to your favourites!`)
		} else {
			setMessage("You must be logged in to add favourites.");
		}
	
	}

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
				<button onClick={addFave}>Add to favourites</button>
				<span>{message}</span>
				<img src={selectedGame.background_image} alt={selectedGame.name} />
			</article>
		</>
	);
}
