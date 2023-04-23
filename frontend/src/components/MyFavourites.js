import { Link } from "react-router-dom";


export default function MyFavourites({user, login, setSelectedId}) {
	console.log("user::", user);





	if (login === true) {
		return (
			<section>
				<h2>MyFavourites</h2>
				<Link to="/favourites">Go to Favourites</Link>

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
