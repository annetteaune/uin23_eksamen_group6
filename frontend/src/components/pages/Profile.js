import { Link } from "react-router-dom";


export default function Profile({ user, login }) {
	console.log(user);

	if (login === true) {
		return (
			<section>
				<h2>Welcome {user.username}!</h2>
				<span>{user.useremail}</span>
				<img src={user.imageUrl} />
			</section>
		);
	} else {
		return (
			<section>
				<h2>You need to log in to see your profile</h2>
                <Link to="/login">
                <button>Log in</button></Link>
			</section>
		);
	}
}
