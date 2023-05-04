import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ login }) {
	const [isActive, setIsActive] = useState(true);
	function toggleMenu() {
		setIsActive((current) => !current);
	}

	return (
		<nav className="navbar">
			<div className="logo">
				<NavLink to="/">
					<img src="/logo.png" alt="logo" />
				</NavLink>
			</div>
			<button className="nav-icon" onClick={toggleMenu}>
				{isActive === true ? (
					<i className="fa-solid fa-bars"></i>
				) : (
					<i className="fa-solid fa-x"></i>
				)}
			</button>
			<div className={`nav-links ${isActive === true ? "hide" : "show"}`}>
				<ul>
					<li>
						<NavLink to="/" onClick={toggleMenu}>
							Home
						</NavLink>
					</li>

					<li>
						<NavLink to="/shop" onClick={toggleMenu}>
							Shop
						</NavLink>
					</li>

					<li>
						{" "}
						<NavLink to="/my-games" onClick={toggleMenu}>
							My Games
						</NavLink>
					</li>

					<li>
						<NavLink to="/favourites" onClick={toggleMenu}>
							Favourites
						</NavLink>
					</li>

					{login === false ? (
						<li>
							<NavLink to="/login" onClick={toggleMenu}>
								Log in
							</NavLink>
						</li>
					) : (
						<li>
							<NavLink to="/profile" onClick={toggleMenu}>
								Account
							</NavLink>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
}
