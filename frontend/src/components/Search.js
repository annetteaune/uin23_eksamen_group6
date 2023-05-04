import { useState } from "react";

export default function Search({ setSearchResult, setOpenDropDown }) {
	//State for søkeord
	const [search, setSearch] = useState("");
    //api-kall
	const getGameSearch = async () => {
		const response = await fetch(
			`https://api.rawg.io/api/games?key=58b2b216076c4896b0055f655cd83168&search=${search}&page=1&page_size=3`
		);
		const data = await response.json();
		setSearchResult(data);
		console.log(data);
	};


			

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const handleSearch = (event) => {
		const inputValue = event.target.value;

		//const replacedValue = inputValue.replaceAll(" ", "-");
		if (inputValue.length >= 3) {
			setSearch(inputValue);
		}
	};

	const handleClick = () => {
		if (search.length >= 3) {
			getGameSearch();
			setOpenDropDown(false);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit} id="search-form">
				<input
					type="search"
					aria-label="search"
					placeholder="Type to search"
					onChange={handleSearch}
				/>
				<button type="submit" aria-label="search button" onClick={handleClick}>
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
			</form>
		</>
	);
}
