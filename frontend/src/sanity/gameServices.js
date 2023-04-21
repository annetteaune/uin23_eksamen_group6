import { client } from "./client";

export const fetchMyGames = async () => {
	const data = await client.fetch(`*[_type == "game"]`);
	return data;
};
