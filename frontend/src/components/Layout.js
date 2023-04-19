import Dashboard from "./Dashboard"

export default function Layout({shopGames}) {
	return (
		<>
        <header>
            <h1>A header with a logo</h1>
        </header>
        <nav>
            <div>navigation</div>
        </nav>
        <main>
			<Dashboard shopGames={shopGames}/>
        </main>
        <footer>
            footer w/link to api
        </footer>
		</>
	);
}
