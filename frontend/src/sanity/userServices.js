import { client } from "./client";

//hente brukerinfo
//kilde for imageurl:
//https://www.sanity.io/docs/presenting-images
export const fetchAllUsers = async () => {
	const data = await client.fetch(
		`*[_type == "user"]{username, _id, useremail, favourites, "imageUrl": userimage.asset->url,}`
	);
	return data;
};

