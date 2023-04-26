import { createClient } from "@sanity/client";

export const client = createClient({
	projectId: "4trl9uor",
	dataset: "production",
	useCdn: false,
	apiVersion: "2021-10-21",
});

//kilde for oppsett:
//https://github.com/toremake/UIN2023_sanity_create/blob/main/frontend/src/utils/sanity/client.js

export const writeClient = createClient({
	token:
		"skGTGRwabHB5aF5gfNu8ly3AjRqtUvwev02NfHKmMZnT3BmVOUKCrFhwqv92vnl35gaEoHLQIJG9wFLqE5tUp0hJ4hBzjYMhSelCHigNLNvqJ9lUxkGc1QPQ6nPkGY99tyWCv9m3Ir4ZVRpl1YYQUXAYJVw7a1gsFQJXRNsVuQ8QlIQg3ya3",
	projectId: "4trl9uor",
	dataset: "production",
	apiVersion: "2021-10-21",
	useCdn: true,
});
