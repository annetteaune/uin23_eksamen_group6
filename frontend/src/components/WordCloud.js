import { TagCloud } from "react-tagcloud";

export default function WordCloud({ tags }) {
	//hvis ikke tags eksisterer, returner en tom array
	//for å unngå kræsj av nettsted om tags returnerer undefined
	const words = tags
		? tags.map(({ name, games_count }) => ({
				value: name,
				count: games_count,
		  }))
		: [];

	console.log(tags);
	//gjemmer clouden om det er svært få tags
	if (words.length > 2)
		return (
			<TagCloud
				tags={words}
				minSize={20}
				maxSize={50}
				colorOptions={{
					luminosity: "dark",
					hue: "orange",
				}}
			/>
		);
}
