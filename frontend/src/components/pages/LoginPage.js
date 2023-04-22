import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ setLogin, users, setUser }) {
	//state for feilmedling
	const [message, setMessage] = useState("");
	//lagre inputvalue for sjekk mot brukerarray
	const [inputValue, setInputValue] = useState("");
	//lagre inputvalue ved endring
	function handleInputChange(event) {
		setInputValue(event.target.value);
	}
	//sjekke om brukeren fins og handle deretter
	function handleSubmit(event) {
		event.preventDefault();
		const user = users.find((user) => user.useremail === inputValue);
		if (user) {
			setLogin(true);
			setUser(user);
			setMessage("");
			let path = `/profile`;
			navigate(path);
		} else {
			setMessage("User not found");
		}
	}
	//for å redirecte til profilside ved login,
	//kilde: https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page
	let navigate = useNavigate();

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Registered e-mail:</label>
				<input
					name="email"
					id="email"
					type="text"
					placeholder="annettla@hiof.no"
					value={inputValue}
					onChange={handleInputChange}
				></input>
				<button type="submit" onClick={handleSubmit}>
					Login
				</button>
			</form>
			<p>{message}</p>
		</section>
	);
}
