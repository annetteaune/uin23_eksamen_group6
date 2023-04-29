import ReactWordcloud from "react-wordcloud";

export default function WordCloud({ selectedGame }) {
	const words = selectedGame?.map(({ name, games_count }) => ({
		text: name,
		value: games_count,
	}));
	const minSize = [290, 350];
	const maxWords = 20;
	const options = {
		colors: ["#35826A", "#AD5F1F", "#553a2a", "#0C5679", "#AD0000"],
		rotations: 0,
		rotationAngles: [90, 0],
		enableTooltip: false,
		fontFamily: "urbanist",
		transitionDuration: 1500,
		fontSizes: [20, 60],
		fontWeight: "bold",
		padding: 3,
	};
	//gjemmer hele komponentet fra gamepage om det er svært få tags, av estetiske grunner
	if (selectedGame?.length > 5) {
		return (
			<section className="wordcloud">
				<ReactWordcloud
					words={words}
					minSize={minSize}
					options={options}
					maxWords={maxWords}
				/>
			</section>
		);
	}
}
