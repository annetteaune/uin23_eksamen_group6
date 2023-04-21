import { client } from "./client";

//hente alle spill i sanity
export const fetchMyGames = async () => {
	const data = await client.fetch(`*[_type == "game"]{title, slug, apiid, hoursplayed, favourited, genre->}`);
	return data;
};


