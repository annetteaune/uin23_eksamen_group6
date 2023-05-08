import { TagCloud } from "react-tagcloud";

export default function WordCloud({ selectedGame }) {
	const words = selectedGame?.map(({ name, games_count }) => ({
		value: name,
		count: games_count,
	}));

	console.log(words);
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
