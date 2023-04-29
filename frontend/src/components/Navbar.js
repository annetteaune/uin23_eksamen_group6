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
				<NavLink to="/">LOGO</NavLink>
			</div>
			<button className="nav-icon" onClick={toggleMenu}>
				{isActive ? (
					<i className="fa-solid fa-bars"></i>
				) : (
					<i class="fa-solid fa-x"></i>
				)}
			</button>
			<div className={`nav-links ${isActive ? "hide" : "show"}`}>
				<ul className>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>

					<li>
						<NavLink to="/shop">Shop</NavLink>
					</li>

					<li>
						{" "}
						<NavLink to="/my-games">My Games</NavLink>
					</li>

					<li>
						<NavLink to="/favourites">Favourites</NavLink>
					</li>

					{login === false ? (
						<li>
							<NavLink to="/login">Log in</NavLink>
						</li>
					) : (
						<li>
							<NavLink to="/profile">Account</NavLink>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
}
