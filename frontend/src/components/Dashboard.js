import GameShop from "./GameShop"
import MyGames from "./MyGames"
import MyFavourites from "./MyFavourites"

export default function Dashboard() {
    return (
			<>
				<GameShop />
				<MyGames />
				<MyFavourites/>
			</>
		);
}