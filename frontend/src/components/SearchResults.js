import SearchCards from "./SearchCards";

export default function SearchResults({ searchResult, setSelectedId, toggleDropdown }) {

    if (searchResult?.length >= 3){
        	return (
						<section className="search-results">
							{searchResult?.map((res, index) => (
								<SearchCards
									key={index}
									title={res.name}
									image={res.background_image}
									slug={res.slug}
									id={res.id}
									setSelectedId={setSelectedId}
									toggleDropdown={toggleDropdown}
								/>
							))}
							<i
								className="fa-solid fa-angles-up"
								onClick={toggleDropdown}
							></i>
						</section>
					);
    }

}
