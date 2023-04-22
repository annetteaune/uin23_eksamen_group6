import { client } from "./client";

//hente alle spill i sanity
//kilde for imageurl: 
//https://www.sanity.io/docs/presenting-images
export const fetchMyGames = async () => {
	const data = await client.fetch(
		`*[_type == "game"]{title, slug, apiid, hoursplayed, favourited, image, "imageUrl": image.asset->url, genre->}`
	);
	return data;
};


