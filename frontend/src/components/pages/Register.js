import { useState } from "react";
import { writeClient } from "../../sanity/client";

export default function Register() {
	//state for å lagre brukernavn
	const [username, setUsername] = useState("");
	//state for å lagre epost
	const [useremail, setUseremail] = useState("");

	//skrive til sanity

	function saveUser(event) {
		event.preventDefault();
		console.log(username, useremail);
         writeClient.create({
            _type: "user",
            username: username,
            useremail: useremail
        })
    

	}

	return (
		<section>
			<form>
				<label htmlFor="username">Your name:</label>
				<input
					name="username"
					id="username"
					type="text"
					placeholder="Your Name"
					onChange={(event) => {
						setUsername(event.target.value);
					}}
					value={username}
				></input>
				<label htmlFor="email">Your email:</label>
				<input
					name="email"
					id="email"
					type="text"
					placeholder="annettla@hiof.no"
					onChange={(event) => {
						setUseremail(event.target.value);
					}}
					value={useremail}
				></input>
				<button type="submit" onClick={saveUser}>
					Login
				</button>
			</form>
		</section>
	);
}
