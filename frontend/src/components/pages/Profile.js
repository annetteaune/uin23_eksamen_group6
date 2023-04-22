import { Link } from "react-router-dom";

export default function Profile({ user, login }) {
	console.log(user);

	if (login === true) {
		return (
			<section className="profile-page">
				{" "}
				<div className="image-wrapper">
					{user.imageUrl == null ? <img src="user.jpg" alt="User image placeholder" />: <img src={user.imageUrl} alt="User image" />}
					<img src={user.imageUrl} />
				</div> 
				<h2>Welcome, {user.username}!</h2>
				<span>{user.useremail}</span>
			</section>
		);
	} else {
		return (
			<section>
				<h2>You need to log in to see your profile</h2>
				<Link to="/login">
					<button>Log in</button>
				</Link>
			</section>
		);
	}
}
