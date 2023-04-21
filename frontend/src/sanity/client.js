import {createClient} from '@sanity/client'

export const client = createClient({
	projectId: "4trl9uor",
	dataset: "production",
	useCdn: true,
	apiVersion: "2021-10-21",
});



