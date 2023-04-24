import { Link } from "react-router-dom";


export default function MyFavourites({user, login, setSelectedId, favourites}) {
	console.log("user::", user);





	if (login === true) {
		return (
			<section>
				<h2>MyFavourites</h2>
				<Link to="/favourites">Go to Favourites</Link>
                {user.favourites.map((game,index) => (
                    <p key={index}>{game._key}</p>
                ))}
			</section>
		);
	} else {
		return (
			<section>
				<h2>MyFavourites</h2>
				<Link to="/favourites">Go to Favourites</Link>
				<p>Log in to see your favourites</p>
			</section>
		);
	}
}
